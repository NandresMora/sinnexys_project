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
                Sobre nosotros
              </h3>
              <p className="text-gray-300 mb-6">
                Sinnexys nace de la visión de 3 ingenieros de sistemas comprometidos con democratizar el acceso a soluciones tecnológicas de calidad para pequeñas y medianas empresas.
              </p>
              <p className="text-gray-300 mb-6">
                Nos especializamos en desarrollo web profesional, soporte técnico remoto y soluciones digitales a medida — sin complicaciones, sin costos ocultos.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-center hover:bg-white/20 transition-all">
                  <div className="text-3xl font-bold text-[#00D9FF] mb-1">100%</div>
                  <div className="text-sm text-gray-300">Soporte remoto</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-center hover:bg-white/20 transition-all">
                  <div className="text-3xl font-bold text-[#00D9FF] mb-1">&lt;24h</div>
                  <div className="text-sm text-gray-300">Tiempo de respuesta</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-center hover:bg-white/20 transition-all">
                  <div className="text-3xl font-bold text-[#00D9FF] mb-1">50+</div>
                  <div className="text-sm text-gray-300">Clientes satisfechos</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-center hover:bg-white/20 transition-all">
                  <div className="text-3xl font-bold text-[#00D9FF] mb-1">3</div>
                  <div className="text-sm text-gray-300">Ingenieros expertos</div>
                </div>
              </div>
              <div className="bg-[#0066FF]/30 border border-[#00D9FF]/30 rounded-xl p-5">
                <p className="text-[#00D9FF] font-semibold text-sm mb-1">Nuestra misión</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ser el aliado tecnológico de confianza para pymes y profesionales, brindando soluciones digitales ágiles, accesibles y de alto impacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
