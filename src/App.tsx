import React, { Suspense } from 'react';

// Componentes de Layout (estructura general de la página)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';

// Componentes de Secciones - Críticos para el primer renderizado (Above the Fold)
import Hero from './components/sections/Hero';

// Componentes de Secciones - Cargados Diferidamente (Code Splitting)
const Services = React.lazy(() => import('./components/sections/Services'));
const Process = React.lazy(() => import('./components/sections/Process'));
const Coverage = React.lazy(() => import('./components/sections/Coverage'));
const About = React.lazy(() => import('./components/sections/About'));
const Testimonials = React.lazy(() => import('./components/sections/Testimonials'));
const Contact = React.lazy(() => import('./components/sections/Contact'));

// Componentes Comunes (elementos reutilizables)
import WhatsAppButton from './components/common/WhatsAppButton';

// Marcador de posición animado (Skeleton fallback) para secciones en carga diferida
const SectionLoader = () => (
  <div className="w-full py-20 bg-gray-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm font-medium">Cargando sección...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Services />
        <Process />
        <Coverage />
        <About />
        <Testimonials />
        <Contact />
      </Suspense>
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  );
}

export default App;
