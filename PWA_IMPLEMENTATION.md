# PWA Implementation — Sinnexys Project

> **Stack:** Vite 5 · React 18 · TypeScript · Tailwind CSS · Supabase
> **Plugin:** [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/) (workbox bajo el capó)

---

## 1. Motivación

Convertir el sitio de Sinnexys en una **Progressive Web App (PWA)** permite:

- Instalación en el homescreen de Android / iOS sin pasar por una tienda.  
- Funcionamiento parcial **offline** (assets en caché).  
- Splash screen y experiencia nativa en móvil.  
- Cumplir los criterios de **Lighthouse PWA audit** al 100 %.

---

## 2. Dependencia instalada

```bash
npm install vite-plugin-pwa -D
```

| Paquete | Versión | Rol |
|---|---|---|
| `vite-plugin-pwa` | `^0.x` | Genera service worker (Workbox) y manifiesto |

---

## 3. Archivos modificados

### 3.1 `vite.config.ts` — Plugin VitePWA

Se añadió el plugin `VitePWA` con:

| Opción | Valor | Por qué |
|---|---|---|
| `registerType` | `autoUpdate` | El SW se actualiza solo al detectar nueva versión en producción |
| `manifest.name` | `Sinnexys - Soluciones IT` | Nombre completo al instalar en dispositivo |
| `manifest.short_name` | `Sinnexys` | Nombre del ícono en homescreen |
| `manifest.display` | `standalone` | Se abre sin barra de dirección del navegador |
| `manifest.theme_color` | `#0066FF` | Color de la barra de estado en Android |
| `manifest.background_color` | `#0a0a0a` | Color del splash screen |
| `manifest.start_url` | `/` | Ruta al abrir desde homescreen |

#### Estrategias de caché (Workbox `runtimeCaching`)

| URL Pattern | Estrategia | Razón |
|---|---|---|
| `*.supabase.co/*` | **NetworkFirst** | Datos del formulario de contacto deben estar frescos; fallback a caché si hay fallo de red |
| `fonts.googleapis.com/*` | **StaleWhileRevalidate** | Hojas de estilos de Google Fonts: sirve rápido, actualiza en background |
| `fonts.gstatic.com/*` | **CacheFirst** | Archivos de fuentes no cambian; caché por 1 año |
| `*.png/jpg/svg/...` | **CacheFirst** | Imágenes estáticas; caché por 30 días |

### 3.2 `index.html` — Meta tags PWA

Se agregaron dos etiquetas en `<head>`:

```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.webmanifest" />
```

- `apple-touch-icon`: permite a Safari (iOS) mostrar el ícono correcto al "Añadir a inicio".  
- `manifest`: enlaza el manifiesto generado por el plugin en el build.

> `theme-color` ya existía en el `index.html` original (`#0066FF`). No se duplicó.

---

## 4. Archivos nuevos

### 4.1 Íconos PWA en `/public/`

| Archivo | Tamaño | Uso |
|---|---|---|
| `pwa-192x192.png` | 192 × 192 px | Ícono estándar Android / Chrome |
| `pwa-512x512.png` | 512 × 512 px | Splash screen / Tienda |
| `maskable-icon-512x512.png` | 512 × 512 px | Adaptive icon Android (safe zone) |
| `apple-touch-icon.png` | 180 × 180 px | Homescreen iOS (Safari) |

Todos generados a partir del `favicon.png` original del proyecto mediante redimensionado con alta calidad bicúbica.

### 4.2 `manifest.webmanifest` (auto-generado en build)

El plugin genera este archivo en `dist/manifest.webmanifest` durante `npm run build`. **No se crea manualmente.**

### 4.3 `dist/sw.js` (auto-generado en build)

El Service Worker es generado por Workbox al hacer `npm run build`. Registra las estrategias de caché definidas en `vite.config.ts`.

---

## 5. Estructura final de la implementación

```
sinnexys_project/
├── public/
│   ├── apple-touch-icon.png          ← [NUEVO] iOS homescreen icon
│   ├── maskable-icon-512x512.png     ← [NUEVO] Android adaptive icon
│   ├── pwa-192x192.png               ← [NUEVO] Android / Chrome icon
│   ├── pwa-512x512.png               ← [NUEVO] Splash screen icon
│   ├── og-image.png                  (existente)
│   └── sitemap.xml                   (existente)
│
├── dist/                             (generado en build)
│   ├── manifest.webmanifest          ← [AUTO] Manifiesto PWA
│   ├── sw.js                         ← [AUTO] Service Worker (Workbox)
│   └── workbox-*.js                  ← [AUTO] Runtime de Workbox
│
├── index.html                        ← [MODIFICADO] +apple-touch-icon +manifest
├── vite.config.ts                    ← [MODIFICADO] +VitePWA plugin
└── package.json                      ← [MODIFICADO] +vite-plugin-pwa devDep
```

---

## 6. Flujo de actualización del Service Worker

```
Usuario abre la app
        │
        ▼
SW verifica si hay nueva versión en el servidor
        │
   ¿Nueva versión?
   ┌────┴────┐
  No        Sí
   │         │
   │    Descarga en background (registerType: autoUpdate)
   │         │
   │    Activa en la próxima visita (skipWaiting automático)
   ▼         ▼
Sirve desde caché   →   Mezcla caché + red según estrategia
```

---

## 7. Cómo verificar que funciona

### Build y revisión local

```bash
npm run build
npx serve dist
```

Luego abre Chrome DevTools → **Application → Manifest** para ver el manifiesto y  
**Application → Service Workers** para confirmar que el SW está registrado.

### Lighthouse Audit

1. Abre Chrome DevTools → **Lighthouse**
2. Selecciona categoría **Progressive Web App**
3. Ejecuta el audit sobre la URL de producción desplegada


### Criterios que debe cumplir tras la implementación

| Criterio | Estado esperado |
|---|---|
| Web App Manifest válido | ✅ |
| Service Worker registrado | ✅ |
| Íconos 192px y 512px | ✅ |
| Maskable icon | ✅ |
| `theme-color` definido | ✅ (ya existía) |
| Funciona sobre HTTPS | ✅ (GitHub Pages) |
| Installable (botón "Instalar app") | ✅ |

---

## 8. Notas adicionales

- El Service Worker solo se activa en **producción** (`npm run build`). En `npm run dev` no hay SW activo (comportamiento intencional de Vite).
- Las llamadas a Supabase usan **NetworkFirst** con timeout de 10 s: si la red falla, sirve el último resultado cacheado (evita pantallas en blanco en conexión lenta).
- Para forzar que los usuarios reciban la actualización inmediatamente (sin esperar a recargar), se puede agregar un componente `UpdatePrompt` en React que escuche el evento `onNeedRefresh` de `vite-plugin-pwa/react`. Esto es opcional.
