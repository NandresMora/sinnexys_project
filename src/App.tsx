

// Componentes de Layout (estructura general de la página)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';


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

// Funcionalidades Experimentales (Pruebas PWA sugeridas)
import PWATestFeatures from './components/experimental/PWATestFeatures';

// --- CONFIGURACIÓN DE PRUEBAS EXPERIMENTALES ---
// Cambiar a 'false' para desactivar la solicitud de ubicación en el ingreso
const ENABLE_EXPERIMENTAL_PWA_TESTS = true; 

function App() {
  return (
    <div className="min-h-screen">
      <PWATestFeatures enabled={ENABLE_EXPERIMENTAL_PWA_TESTS} />
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
