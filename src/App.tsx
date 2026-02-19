/**
 * App.tsx - Componente principal de la aplicación
 * 
 * Este componente actúa como el "contenedor" de toda la página web.
 * Aquí se importan y organizan todas las secciones que componen el sitio
 * de Sinnexys, siguiendo un orden lógico de navegación.
 * 
 * Estructura:
 * - Layout: Navbar (navegación) y Footer (pie de página)
 * - Sections: Hero, Services, Process, Coverage, About, Testimonials, Contact
 * - Common: WhatsAppButton (botón flotante)
 */

// Componentes de Layout (estructura general de la página)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Componentes de Secciones (contenido principal)
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Coverage from './components/sections/Coverage';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

// Componentes Comunes (elementos reutilizables)
import WhatsAppButton from './components/common/WhatsAppButton';

/**
 * Componente App
 * Renderiza todas las secciones de la página en orden.
 * Usa 'min-h-screen' para que ocupe al menos toda la altura de la pantalla.
 */
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Coverage />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
