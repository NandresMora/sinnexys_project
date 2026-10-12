import React, { lazy } from 'react';

// Componentes de Layout (estructura general de la página)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';

// Componentes de Secciones - Críticos para el primer renderizado (Above the Fold)
import Hero from './components/sections/Hero';

// Componentes de Secciones - Cargados Diferidamente (Code Splitting)
const Services = lazy(() => import('./components/sections/Services'));
const Process = lazy(() => import('./components/sections/Process'));
const Coverage = lazy(() => import('./components/sections/Coverage'));
const About = React.lazy(() => import('./components/sections/About'));
const Testimonials = React.lazy(() => import('./components/sections/Testimonials'));
const Contact = React.lazy(() => import('./components/sections/Contact'));

// Componentes Comunes (elementos reutilizables)
import WhatsAppButton from './components/common/WhatsAppButton';
import LazySection from './components/common/LazySection';

// Marcador de posición animado (Skeleton fallback) para secciones en carga diferida
const SectionLoader = () => (
  <div className="w-full py-20 bg-gray-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm font-medium">Cargando sección...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* CAMBIO AQUÍ: id="servicios" en lugar de "services" */}
      <LazySection id="servicios" delay={1000} fallback={<SectionLoader />} minHeight={900}>
        <Services />
      </LazySection>

      {/* CAMBIO AQUÍ: id="proceso" en lugar de "process" */}
      <LazySection id="proceso" delay={1400} fallback={<SectionLoader />} minHeight={500}>
        <Process />
      </LazySection>

      {/* CAMBIO AQUÍ: id="cobertura" en lugar de "coverage" */}
      <LazySection id="cobertura" delay={1800} fallback={<SectionLoader />} minHeight={700}>
        <Coverage />
      </LazySection>

      {/* CAMBIO AQUÍ: id="nosotros" en lugar de "about" */}
      <LazySection id="nosotros" delay={2200} fallback={<SectionLoader />} minHeight={500}>
        <About />
      </LazySection>

      {/* Testimonials no está en tu navbar, puedes dejarle el ID que quieras o quitarlo */}
      <LazySection id="testimonios" delay={2600} fallback={<SectionLoader />} minHeight={500}>
        <Testimonials />
      </LazySection>

      {/* CAMBIO AQUÍ: id="contacto" en lugar de "contact" */}
      <LazySection id="contacto" delay={3000} fallback={<SectionLoader />} minHeight={700}>
        <Contact />
      </LazySection>

      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  );
}
// Quité el "export default App;" de aquí abajo porque ya lo estás exportando en la función principal