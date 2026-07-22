# ESTADO ACTUAL DEL PROYECTO SINNEXYS (React + TypeScript)

A continuación se detalla el análisis exhaustivo del código fuente del proyecto, basado estrictamente en lo programado en los componentes.

## 1. ARQUITECTURA VISUAL Y SECCIONES

### **Hero (`Hero.tsx`, `HeroLeftColumn.tsx`, `HeroRightColumn.tsx`)**
- **Estructura**: Dividida en dos columnas principales superpuestas sobre un fondo decorativo y anillos giratorios.
- **Textos Clave**:
  - Badge: "✨ Soluciones tecnológicas profesionales"
  - Título Principal: "Sinnexys"
  - Subtítulo Shimmer: "Soluciones que impulsan tu crecimiento"
  - Descripción: "Transforma tu pyme con soluciones IT integrales: desarrollo web profesional, soporte técnico especializado y tecnología a tu medida."
- **Elementos UI**: 
  - *Pills* informativos: "Desarrollo Web", "Soporte Técnico", "Redes & Conectividad".
  - Botones CTA: "Ver servicios" y "Contactar ahora".
  - Tarjetas flotantes (badges): "Diseño a tu medida" y "Chat disponible 24/7".

### **Servicios (`Services.tsx`)**
Estructurado en un grid de tarjetas con acordeones interactivos ("Ver opciones" / "Ocultar opciones"). **Nota importante:** En el código fuente *no existen precios hardcodeados*, solo se detallan los nombres y características.
- **Soporte y Mantenimiento** (Subtítulo: *Portátiles, computadores y soporte remoto*)
  - **Básico**: Limpieza física y software, Eliminación de virus, Optimización del sistema, Respaldo de datos.
  - **Profesional**: Todo lo del paquete básico, Instalación de software, Configuración remota, Actualización de drivers, Soporte remoto 1 mes.
  - **Empresarial**: Soporte remoto continuo mensual, Mantenimiento preventivo, Monitoreo proactivo, Atención prioritaria, Visitas programadas.
- **Desarrollo Web** (Subtítulo: *Ajustado a tu presupuesto*)
  - **Landing Page**: Diseño moderno y responsive, Hasta 5 secciones, Formulario de contacto, Optimización SEO básica, Hosting incluido 1 año.
  - **Sitio Corporativo**: Hasta 10 páginas, Diseño personalizado, Panel de administración, Blog integrado, SEO avanzado, Soporte 3 meses.
  - **E-commerce Básico**: Catálogo de productos, Carrito de compras, Pasarela de pago, Panel de administración, Gestión de inventario, Soporte 6 meses.
- **Soluciones IT** (Subtítulo: *Cotización personalizada*)
  - **Consultoría Digital**: Análisis de necesidades digitales, Diagnóstico tecnológico, Propuesta de soluciones web, Plan de implementación, Seguimiento.
  - **Hosting y Correos**: Registro de dominio, Hosting optimizado, Certificado SSL, Correos corporativos, Soporte técnico.
  - **Mantenimiento Web**: Actualizaciones de seguridad, Respaldos automáticos, Monitoreo 24/7, Optimización de rendimiento, Soporte prioritario.

### **Proceso (`Process.tsx`)**
- **Título**: "Cómo trabajamos - Un proceso simple y transparente, enfocado en tu éxito"
- **Pasos Programados**:
  1. **Contáctanos**: "Cuéntanos tu necesidad por WhatsApp, correo o formulario. Respuesta rápida garantizada."
  2. **Propuesta**: "Recibe una cotización detallada y personalizada en menos de 24 horas."
  3. **Ejecución**: "Implementamos tu solución con calidad y seguimiento continuo hasta tu satisfacción."
- **CTA final**: Botón "Comenzar ahora" apuntando a WhatsApp.

### **Cobertura (`Coverage.tsx`)**
- **Título**: "Dónde estamos - Servicio presencial en Sabana Norte y soporte remoto nacional"
- **Tarjetas de Servicio**: "Atención Presencial" y "Soporte Remoto Nacional".
- **Municipios Programados**: *Nota: El código fuente NO contiene 12 municipios harcodeados.* En la sección de "Sedes Core" únicamente se encuentran programados **4 municipios**:
  1. Chía
  2. Cajicá
  3. Zipaquirá
  4. Sopó

### **Nosotros (`About.tsx`)**
- **Título**: "Por qué elegirnos"
- **Estadísticas**: "5+ Clientes satisfechos", "10+ Proyectos realizados", "11+ Meses de experiencia", "99% Tasa de satisfacción".
- **Valores**: Experiencia certificada, Precios competitivos, Atención personalizada, Tecnología moderna.
- **Misión**: "Ser el aliado tecnológico de confianza para pymes y emprendedores..."

### **Testimonios (`Testimonials.tsx`)**
- **Clientes Hardcodeados** (Todos de 5 estrellas):
  - María González (Restaurante): "Excelente servicio y atención..."
  - Carlos Ramírez (Asesoría Contable): "Muy profesionales, nos desarrollaron..."
  - Ana Martínez (Startup Tech): "Precios justos y trabajo de calidad..."
- **Banner de Promoción**: "15% OFF en tu primer servicio", apuntando a WhatsApp.

### **Contacto (`Contact.tsx`)**
- **Información visible**: WhatsApp/Llamadas: +57 312 360 2705. Email: contactosinnexys@gmail.com. Ubicación: Sabana Norte, Cundinamarca, Colombia. Horarios (L-V 8:00 AM - 6:00 PM / S-D 9:00 AM - 5:00 PM).
- **Campos del Formulario**: Nombre completo, Correo electrónico, Teléfono, Servicio de interés (Soporte, Desarrollo, Soluciones, Consultoría, Otro) y Mensaje.

---

## 2. COMPONENTES GLOBALES Y NAVEGACIÓN

### **Navbar (`Navbar.tsx`)**
- **Comportamiento**: Barra de navegación superior fija (`fixed top-0`). Es transparente inicialmente pero al hacer scroll más de 20px, cambia su fondo a un azul muy oscuro (`#0A1929`) y añade sombra.
- **Navegación**: Utiliza enlaces tipo botón que ejecutan una función `scrollToSection` (utilizando `.scrollIntoView({ behavior: 'smooth' })`) para viajar a los IDs de las secciones.
- **Responsive**: Posee un menú de hamburguesa ocultable para móviles mediante estado local.

### **Footer (`Footer.tsx`)**
- Incorpora el mismo comportamiento de scroll suave para sus enlaces a las secciones del sitio.
- **Redes Sociales**: Facebook, Twitter, Instagram y LinkedIn (el de Facebook redirige a `https://www.facebook.com/sinnexys`, los demás están vacíos `#`).

### **Botón de WhatsApp (`WhatsAppButton.tsx`)**
- Botón flotante fijo en la esquina inferior derecha (`fixed bottom-6 right-6`).
- Implementa una animación constante de pulso (`animate-pulse`) que se detiene al hacer *hover*.
- Al pasar el cursor, se despliega un pequeño cuadro de texto lateral: "¿Necesitas ayuda? Escríbenos" gestionado mediante estado.

---

## 3. ESTADO DE LAS INTEGRACIONES Y FUNCIONALIDADES

- **Destinos de WhatsApp y Contacto Rápido**: Todos los botones de contacto y el componente flotante apuntan directamente al enlace de la API de WhatsApp: `https://wa.me/573123602705`.
- **Destino del Formulario de Contacto**: El formulario **NO** envía correos directos. Importa un helper asíncrono dinámicamente (`const { submitLead } = await import('../../lib/supabase');`) y envía el objeto JSON a una base de datos **Supabase**.
- **Manejo de Estados (Hooks Activos)**:
  - **`App.tsx`**: Utiliza `React.lazy` y `Suspense` para aplicar *Code Splitting* (carga diferida) en secciones pesadas, lo que mejora el rendimiento de carga inicial.
  - **`Navbar.tsx`**: Usa `useState` y `useEffect` para detectar el scroll de la ventana (`isScrolled`) y abrir/cerrar el menú móvil (`isOpen`).
  - **`Services.tsx`**: Usa un `useState` local (`isExpanded`) en el subcomponente `ServiceCard` para ocultar o mostrar con animación la lista de paquetes.
  - **`WhatsAppButton.tsx`**: Usa `useState` (`isHovered`) para mostrar el tooltip.
  - **`Contact.tsx`**: Posee estados intensivos para gestionar el formulario: `formData` (inputs), `isSubmitting` (deshabilitar botón durante la petición asíncrona), `submitStatus` (controla visualmente los estados: *idle*, *success*, *queued*, *error*) y `errorMessage`. 

---

## 4. ESTILO Y CONFIGURACIÓN VISUAL

- **Tailwind CSS**: Es el motor principal de estilos, apoyándose ampliamente en clases utilitarias (`flex`, `grid`, `absolute`, `relative`, `rounded-xl`, `backdrop-blur-sm`).
- **Esquema de Colores**: 
  - Predominan los fondos muy oscuros para darle una estética moderna y "tecnológica" (`#0A1929`, `#060E1A`).
  - Los acentos se manejan con azules vibrantes e intensos (`#0066FF` y `#00D9FF`), mayormente mezclados en gradientes lineales o radiales (`bg-gradient-to-r`, `bg-gradient-to-br`).
  - Se utilizan fondos claros (grises azulados como `#F0F4F8`) para romper la estética y diferenciar secciones enteras como *Servicios* y *Testimonios*.
- **Efectos y Animaciones**:
  - Efectos visuales de "glassmorphism" utilizando transparencias y desenfoque (`bg-white/10 backdrop-blur-sm`).
  - Animaciones interactivas constantes al pasar el cursor (`hover:scale-105`, `hover:-translate-y-2`, `transition-all duration-300`).
  - Animaciones de carga lenta para el background (`spin-slow`) inyectadas, así como elementos brillantes y destellos de fondo programados para crear un diseño "vivo" y dinámico (particularmente en `Hero` y `Process`).
