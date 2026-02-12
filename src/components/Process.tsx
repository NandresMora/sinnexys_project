import { MessageCircle, FileText, Zap } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Contáctanos',
      description: 'Cuéntanos tu necesidad por WhatsApp, correo o formulario. Respuesta rápida garantizada.'
    },
    {
      number: '02',
      icon: <FileText className="w-8 h-8" />,
      title: 'Propuesta',
      description: 'Recibe una cotización detallada y personalizada en menos de 24 horas.'
    },
    {
      number: '03',
      icon: <Zap className="w-8 h-8" />,
      title: 'Ejecución',
      description: 'Implementamos tu solución con calidad y seguimiento continuo hasta tu satisfacción.'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-gradient-to-br from-[#0A1929] to-[#0066FF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-[#00D9FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0066FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso simple y transparente, enfocado en tu éxito
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00D9FF] via-[#0066FF] to-[#00D9FF] transform -translate-y-1/2 opacity-30"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl font-bold text-[#00D9FF] mb-4 opacity-50">
                    {step.number}
                  </div>

                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-full flex items-center justify-center mb-6 relative z-10">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00D9FF] hover:bg-white text-[#0A1929] px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Comenzar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
