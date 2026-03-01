

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
