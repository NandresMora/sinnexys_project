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
  facebook: 'https://web.facebook.com/profile.php?id=61593477464610',
  twitter: null, // TODO: agregar cuando exista la cuenta oficial
  instagram: null, // TODO: agregar cuando exista la cuenta oficial
  linkedin: null, // TODO: agregar cuando exista la cuenta oficial
};

// ── Páginas legales ──────────────────────────────────────────────────────────
// Las páginas legales se gestionan mediante modales accesibles desde el footer
// y el formulario de contacto (cumpliendo con Ley 1581 de 2012 y Ley 1480 de 2011).

export const LEGAL_LINKS: Record<string, string | null> = {
  privacy: 'modal',
  terms: 'modal',
};
