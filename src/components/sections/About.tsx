import { Shield, DollarSign, Users, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Experiencia certificada',
      description: 'Equipo de 3 ingenieros de sistemas con amplia trayectoria en el sector tecnológico'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Precios competitivos',
      description: 'Tarifas justas y transparentes, adaptadas a las necesidades de pymes y profesionales'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Atención personalizada',
      description: 'Acompañamiento directo y cercano en cada proyecto, entendiendo tus necesidades'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Tecnología moderna',
      description: 'Soluciones funcionales con las últimas herramientas y mejores prácticas del mercado'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-[#0A1929] via-[#0A1929] to-[#0066FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos el centro único de tecnología para pymes y profesionales, ofreciendo servicios integrales de IT con enfoque en cercanía, calidad y escalabilidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-lg flex items-center justify-center mb-4 text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Fundada por ingenieros apasionados
              </h3>
              <p className="text-gray-300 mb-6">
                Sinnexys nace de la visión de 3 ingenieros de sistemas comprometidos con democratizar el acceso a soluciones tecnológicas de calidad para pequeñas y medianas empresas.
              </p>
              <p className="text-gray-300 mb-6">
                Nuestro equipo cubre integralmente todas las áreas: desarrollo de software, infraestructura IT y soporte técnico especializado, garantizando un servicio completo y profesional.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#0066FF] rounded-lg px-4 py-2">
                  <div className="text-[#00D9FF] text-2xl font-bold">100+</div>
                  <div className="text-white text-sm">Proyectos exitosos</div>
                </div>
                <div className="bg-[#0066FF] rounded-lg px-4 py-2">
                  <div className="text-[#00D9FF] text-2xl font-bold">50+</div>
                  <div className="text-white text-sm">Clientes satisfechos</div>
                </div>
                <div className="bg-[#0066FF] rounded-lg px-4 py-2">
                  <div className="text-[#00D9FF] text-2xl font-bold">24/7</div>
                  <div className="text-white text-sm">Soporte disponible</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-xl flex items-center justify-center">
                <Users className="w-32 h-32 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
