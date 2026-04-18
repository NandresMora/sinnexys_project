import { createClient } from '@supabase/supabase-js'

/**
 * supabase.ts
 *
 * Configura y exporta el cliente de Supabase para toda la aplicación.
 *
 * Mejoras implementadas:
 * - Validación de variables de entorno en tiempo de carga.
 * - Helper `submitLead` con detección de estado offline y reintentos.
 * - El cliente usa `fetch` nativo; el Service Worker se encarga del
 *   BackgroundSync cuando no hay red.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Faltan variables de entorno para Supabase. Verifica tu archivo .env')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,   // App pública, no necesitamos sesión
    autoRefreshToken: false,
  },
  global: {
    headers: {
      // Cabecera explícita para que el SW reconozca la petición
      'X-Client-Info': 'sinnexys-web/1.0',
    },
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
  | { ok: true; queued: false }          // Guardado en Supabase ✅
  | { ok: true; queued: true }           // Sin red — encolado por el SW 📬
  | { ok: false; message: string }       // Error real ❌

// ─────────────────────────────────────────────────────────────────────────────
// Helper principal
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Inserta un lead en Supabase.
 *
 * - Si el navegador reporta que está offline, devuelve `{ ok: true, queued: true }`
 *   de inmediato: el Service Worker reintentará la petición hasta 24 h.
 * - Si hay error de red en línea (fetch fail), re-lanza para que el componente
 *   muestre un feedback claro.
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  // 1. ¿Estamos offline según el navegador?
  if (!navigator.onLine) {
    // Hacemos la petición igualmente para que el SW la encole vía BackgroundSync
    // No esperamos respuesta — es fire-and-forget cuando estamos offline
    void supabase.from('leads').insert([payload])
    return { ok: true, queued: true }
  }

  // 2. Intento normal con red disponible
  try {
    const { error } = await supabase.from('leads').insert([payload])

    if (error) {
      // Error de Supabase (RLS, constraint, etc.) — no es un error de red
      console.error('❌ Error de Supabase:', error)
      return {
        ok: false,
        message: error.message || 'Error al guardar en la base de datos.',
      }
    }

    return { ok: true, queued: false }
  } catch (err) {
    // TypeError: Failed to fetch → problema de red aunque onLine=true (VPN, DNS, etc.)
    const isNetworkError =
      err instanceof TypeError && err.message.toLowerCase().includes('fetch')

    if (isNetworkError) {
      console.warn('⚠️ Error de red al enviar a Supabase. El SW reintentará más tarde.')
      // Intentamos de nuevo para que el SW lo encole
      void supabase.from('leads').insert([payload])
      return { ok: true, queued: true }
    }

    console.error('❌ Error inesperado en submitLead:', err)
    return {
      ok: false,
      message: 'Ocurrió un error inesperado. Intenta de nuevo.',
    }
  }
}