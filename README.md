# 🚀 Proyecto Sinnexys - Sitio Web Corporativo

> **Proyecto académico** — Desarrollo de un sitio web corporativo para una empresa de servicios IT utilizando tecnologías modernas de desarrollo web.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/Licencia-MIT-green)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Ejecución](#-instalación-y-ejecución)
- [Despliegue en GitHub Pages](#-despliegue-en-github-pages)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Créditos](#-créditos)

---

## 📖 Descripción

**Sinnexys** es una empresa de soluciones tecnológicas enfocada en la Sabana Norte de Cundinamarca, Colombia. Este proyecto consiste en el desarrollo de su sitio web corporativo tipo *landing page*, que presenta sus servicios, zonas de cobertura e información de contacto.

### Funcionalidades principales:
- ✅ Navegación suave entre secciones con scroll animado
- ✅ Diseño responsive (adaptable a móviles, tablets y escritorio)
- ✅ Formulario de contacto funcional
- ✅ Botón flotante de WhatsApp
- ✅ Sección de cobertura con 12 municipios
- ✅ Catálogo de servicios con paquetes y precios

---

## 🛠 Tecnologías Utilizadas

| Tecnología | Uso | Versión |
|---|---|---|
| **React** | Biblioteca de UI para construir componentes | 18.3 |
| **TypeScript** | Tipado estático para JavaScript | 5.5 |
| **Vite** | Empaquetador y servidor de desarrollo | 5.4 |
| **Tailwind CSS** | Framework CSS de utilidades | 3.4 |
| **Lucide React** | Librería de iconos SVG | 0.344 |
| **ESLint** | Linter para mantener calidad de código | 9.9 |

---

## 📁 Estructura del Proyecto

```
sinnexys_project/
├── public/                  # Archivos estáticos públicos
├── src/                     # Código fuente principal
│   ├── assets/              # Recursos (imágenes, logos)
│   │   └── logo.png         # Logo de la empresa
│   ├── components/          # Componentes React organizados
│   │   ├── common/          # Componentes reutilizables
│   │   │   └── WhatsAppButton.tsx
│   │   ├── layout/          # Componentes de estructura
│   │   │   ├── Navbar.tsx   # Barra de navegación
│   │   │   └── Footer.tsx   # Pie de página
│   │   └── sections/        # Secciones de la página
│   │       ├── Hero.tsx     # Banner principal
│   │       ├── Services.tsx # Servicios ofrecidos
│   │       ├── Process.tsx  # Proceso de trabajo
│   │       ├── Coverage.tsx # Cobertura geográfica
│   │       ├── About.tsx    # Acerca de la empresa
│   │       ├── Testimonials.tsx # Testimonios
│   │       └── Contact.tsx  # Formulario de contacto
│   ├── App.tsx              # Componente raíz de la app
│   ├── main.tsx             # Punto de entrada de React
│   └── index.css            # Estilos globales y animaciones
├── index.html               # HTML base con SEO y meta tags
├── vite.config.ts           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind CSS
├── tsconfig.json            # Configuración de TypeScript
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo
```

---

## ⚙️ Instalación y Ejecución

### Prerrequisitos
- [Node.js](https://nodejs.org/) versión 18 o superior
- [npm](https://www.npmjs.com/) (incluido con Node.js)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/sinnexys_project.git
   cd sinnexys_project
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   La terminal mostrará una URL, generalmente `http://localhost:5173`

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera archivos optimizados para producción |
| `npm run preview` | Previsualiza la versión de producción |
| `npm run lint` | Ejecuta el linter para verificar el código |
| `npm run typecheck` | Verifica los tipos de TypeScript |

---

## 🌐 Despliegue en GitHub Pages

### Configuración automática con GitHub Actions

1. En tu repositorio de GitHub, ir a **Settings → Pages**
2. En **Source**, seleccionar **GitHub Actions**
3. Crear el archivo `.github/workflows/deploy.yml` con el siguiente contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

### Despliegue manual

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`, listos para subir a cualquier hosting.

> **⚠️ Importante:** El campo `base` en `vite.config.ts` debe coincidir con el nombre de tu repositorio en GitHub. Si tu repositorio se llama diferente a `sinnexys_project`, debes actualizar ese valor.

---

## 📸 Capturas de Pantalla

*Las capturas de pantalla se agregarán próximamente después del despliegue.*

---

## 👨‍💻 Créditos

| Rol | Nombre |
|---|---|
| Desarrollo | Ingeniero Jr |
| Diseño UI/UX | Sinnexys Team |
| Tecnologías | React, TypeScript, Vite, Tailwind CSS |

### Información Académica

- **Institución:** UNIMINUTO
- **Programa:** Ingeniería de Sistemas
- **Año:** 2026

---

## 📄 Licencia

Este proyecto es de uso académico y comercial para Sinnexys.

---

*Desarrollado con ❤️ usando React + TypeScript*
