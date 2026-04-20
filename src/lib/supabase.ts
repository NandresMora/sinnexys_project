import { createClient } from '@supabase/supabase-js'

/**
 * supabase.ts
 *
 * Cliente Supabase con soporte REAL de offline mediante cola propia en localStorage.
 *
 * ¿Por qué NO usar solo el BackgroundSync del Service Worker?
 * ─────────────────────────────────────────────────────────────
 * El evento `sync` del SW solo se dispara cuando el NAVEGADOR detecta
 * reconexión a nivel de sistema operativo. En Chrome DevTools (offline toggle),
 * ese evento NUNCA se dispara → la cola del SW jamás se procesa.
 *
 * Solución: cola explícita en localStorage + listener `window.online`.
 * Funciona en DevTools, en mobile y en reconexión real.
 *
 * Flujo:
 *  1. Online  → insert directo a Supabase.
 *  2. Offline → payload guardado en localStorage como "pendiente".
 *  3. `window` emite 'online' → se procesan TODOS los pendientes automáticamente.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Configuración del cliente
// ─────────────────────────────────────────────────────────────────────────────

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Faltan variables de entorno para Supabase. Verifica tu archivo .env')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})

// ─────────────────────────────────────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────────────────────────────────────

export type LeadPayload = {
  nombre: string
  email: string
  telefono?: number | null
  servicio?: string | null
  mensaje: string
}

export type SubmitResult =
  | { ok: true; queued: false }       // Guardado en Supabase ✅
  | { ok: true; queued: true }        // Sin red — guardado local, se enviará luego 📬
  | { ok: false; message: string }    // Error real ❌

// ─────────────────────────────────────────────────────────────────────────────
// Cola offline en localStorage
// ─────────────────────────────────────────────────────────────────────────────

const QUEUE_KEY = 'sinnexys_offline_leads'
const MAX_AGE_MS = 24 * 60 * 60 * 1000 // 24 horas

type QueuedLead = LeadPayload & { _queuedAt: number }

/** Agrega un lead a la cola persistente de localStorage */
function enqueueOfflineLead(payload: LeadPayload): void {
  try {
    const existing: QueuedLead[] = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]')
    existing.push({ ...payload, _queuedAt: Date.now() })
    localStorage.setItem(QUEUE_KEY, JSON.stringify(existing))
    console.log('📬 Lead guardado en cola offline. Total pendientes:', existing.length)
  } catch (e) {
    console.warn('⚠️ No se pudo guardar en la cola offline:', e)
  }
}

/** Procesa y reenvía todos los leads pendientes al recuperar la red */
export async function flushOfflineQueue(): Promise<void> {
  try {
    const raw = localStorage.getItem(QUEUE_KEY)
    if (!raw) return

    const queue: QueuedLead[] = JSON.parse(raw)
    if (queue.length === 0) return

    console.log(`🌐 Conexión restaurada. Procesando ${queue.length} lead(s) pendiente(s)...`)

    const remaining: QueuedLead[] = []

    for (const item of queue) {
      // Descartar leads con más de 24 h en cola
      if (Date.now() - item._queuedAt > MAX_AGE_MS) {
        console.warn('⌛ Lead descartado por antigüedad:', item.email)
        continue
      }

      // Extraer metadato interno antes de enviar
      const { _queuedAt: _ignored, ...payload } = item

      try {
        const { error } = await supabase.from('leads').insert([payload])

        if (error) {
          console.error('❌ Error al reenviar lead:', error.message)
          remaining.push(item) // Volver a encolar si falla
        } else {
          console.log('✅ Lead reenviado exitosamente:', payload.email)
        }
      } catch {
        // Fallo de red durante el flush — mantener en cola
        remaining.push(item)
      }
    }

    localStorage.setItem(QUEUE_KEY, JSON.stringify(remaining))

    if (remaining.length === 0) {
      console.log('✅ Cola offline procesada completamente.')
    } else {
      console.warn(`⚠️ ${remaining.length} lead(s) no pudieron reenviarse y siguen en cola.`)
    }
  } catch (e) {
    console.warn('⚠️ Error al procesar la cola offline:', e)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Listener global de reconexión — se registra UNA sola vez al importar el módulo
// ─────────────────────────────────────────────────────────────────────────────

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    // Pequeño delay para asegurarse de que la red es estable antes de reintentar
    setTimeout(flushOfflineQueue, 1500)
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper principal de envío
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Envía un lead a Supabase con manejo completo de offline.
 *
 * - Online  → POST directo. Éxito: `{ ok: true, queued: false }`.
 * - Offline → Se guarda en localStorage. Al recuperar red, se envía automáticamente.
 *             Resultado: `{ ok: true, queued: true }`.
 * - Error de Supabase (RLS, validación, etc.) → `{ ok: false, message }`.
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  // ── Caso 1: Sin red detectada ──────────────────────────────────────────────
  if (!navigator.onLine) {
    enqueueOfflineLead(payload)
    return { ok: true, queued: true }
  }

  // ── Caso 2: Con red — intento directo ──────────────────────────────────────
  try {
    const { error } = await supabase.from('leads').insert([payload])

    if (error) {
      // Error de Supabase (no de red): policy, constraint, etc.
      console.error('❌ Error de Supabase:', error)
      return {
        ok: false,
        message: error.message || 'Error al guardar en la base de datos.',
      }
    }

    return { ok: true, queued: false }

  } catch (err) {
    // TypeError: Failed to fetch → fallo de red aunque onLine=true
    const isNetworkError =
      err instanceof TypeError && err.message.toLowerCase().includes('fetch')

    if (isNetworkError) {
      console.warn('⚠️ Failed to fetch con onLine=true — guardando en cola offline.')
      enqueueOfflineLead(payload)
      return { ok: true, queued: true }
    }

    console.error('❌ Error inesperado en submitLead:', err)
    return {
      ok: false,
      message: 'Ocurrió un error inesperado. Intenta de nuevo.',
    }
  }
}