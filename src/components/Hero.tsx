import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1929] via-[#0A1929] to-[#0066FF] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#0066FF] rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#0066FF] rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#00D9FF] rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-[#0066FF]/20 border border-[#00D9FF]/30 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-[#00D9FF]" />
          <span className="text-[#00D9FF] text-sm font-medium">Soluciones tecnológicas profesionales</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Sinnexys
        </h1>

        <p className="text-2xl md:text-3xl text-[#00D9FF] font-semibold mb-6">
          Soluciones que impulsan tu crecimiento
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Servicios IT integrales para pymes en Sabana Norte: desarrollo web profesional, soporte técnico especializado y soluciones tecnológicas a tu medida
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('servicios')}
            className="group bg-[#0066FF] hover:bg-[#00D9FF] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
          >
            Ver servicios
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-transparent border-2 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Contactar ahora
          </button>
        </div>
      </div>
    </section>
  );
}
