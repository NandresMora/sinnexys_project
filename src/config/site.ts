/**
 * site.ts
 *
 * Punto único de verdad para datos del negocio que antes estaban
 * repetidos (y por lo tanto, desincronizables) en múltiples componentes:
 * número de WhatsApp, correo, horarios, municipios de cobertura y redes.
 *
 * Si el número de WhatsApp o el correo cambian algún día, se edita
 * SOLO aquí — no hay que buscar por todo el proyecto.
 */

// ── Contacto ────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = '573123602705'; // Sin '+', formato E.164 para wa.me
export const WHATSAPP_DISPLAY = '+57 312 360 2705';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_TEL_URL = `tel:+${WHATSAPP_NUMBER}`;

export const CONTACT_EMAIL = 'contactosinnexys@gmail.com';

// ── Ubicación y cobertura ───────────────────────────────────────────────────

export const BUSINESS_REGION = 'Sabana Norte, Cundinamarca';
export const BUSINESS_COUNTRY = 'Colombia';

export const SERVICE_AREAS = ['Chía', 'Cajicá', 'Zipaquirá', 'Sopó'] as const;

// ── Horario de atención ─────────────────────────────────────────────────────

export const BUSINESS_HOURS = [
  { days: 'Lunes - Viernes', hours: '8:00 AM - 6:00 PM', opens: '08:00', closes: '18:00', dayRange: 'Mo-Fr' },
  { days: 'Sábados y Domingos', hours: '9:00 AM - 5:00 PM', opens: '09:00', closes: '17:00', dayRange: 'Sa-Su' },
] as const;

// ── Redes sociales ───────────────────────────────────────────────────────────
// Usa `null` para las redes que aún no existen o no están confirmadas.
// Los componentes deben ocultar el ícono si el valor es null, en vez de
// enlazar a "#" (un enlace roto le resta credibilidad a un sitio "profesional").

export const SOCIAL_LINKS: Record<string, string | null> = {
  facebook: 'https://www.facebook.com/sinnexys',
  twitter: null, // TODO: agregar cuando exista la cuenta oficial
  instagram: null, // TODO: agregar cuando exista la cuenta oficial
  linkedin: null, // TODO: agregar cuando exista la cuenta oficial
};

// ── Páginas legales ──────────────────────────────────────────────────────────
// También en null a propósito: el contenido de Política de Privacidad y
// Términos y Condiciones no se puede inventar, debe redactarlo el negocio
// (o un abogado) según los datos reales que se recopilan (el formulario
// envía nombre, correo, teléfono y mensaje a Supabase).

export const LEGAL_LINKS: Record<string, string | null> = {
  privacy: '/src/common/PrivacyModal.tsx', 
  terms: null,
};
