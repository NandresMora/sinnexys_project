import { createClient } from '@supabase/supabase-js'

/**
 * supabase.ts
 * 
 * Este archivo configura y exporta el cliente de Supabase para toda la aplicación.
 * 
 * ¿Cómo funciona?:
 * 1. Extrae las variables de entorno de `import.meta.env`. Vite carga automáticamente las
 *    variables del archivo `.env` que comienzan con el prefijo `VITE_`.
 * 2. `createClient` inicializa la conexión usando la URL del proyecto y la clave pública (anon key).
 * 
 * ¿Por qué esta estructura?:
 * - Seguridad: No exponemos las claves directamente en el código fuente.
 * - Flexibilidad: Permite cambiar entre entornos (desarrollo, producción) sin tocar el código.
 * - Singleton: Exportamos una única instancia del cliente para ser reutilizada.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validación simple para asegurar que las variables están presentes
if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Faltan variables de entorno para Supabase. Verifica tu archivo .env')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)