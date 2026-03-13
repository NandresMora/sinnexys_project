import { Shield, DollarSign, Users, Zap, TrendingUp, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '50+', label: 'Clientes satisfechos' },
    { number: '100+', label: 'Proyectos realizados' },
    { number: '3+', label: 'Años de experiencia' },
    { number: '99%', label: 'Tasa de satisfacción' },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Experiencia certificada',
      description: 'Equipo de ingenieros de sistemas con amplia trayectoria en el sector tecnológico'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Precios competitivos',
      description: 'Tarifas justas y transparentes, adaptadas a las necesidades de pymes y negocios'
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

        {/* Cifras destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-extrabold text-[#00D9FF] mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Valores */}
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

        {/* Misión / CTA */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-[#00D9FF]" />
            <span className="text-[#00D9FF] text-sm font-medium">Nuestra misión</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ser el aliado tecnológico de confianza para pymes y emprendedores, ofreciendo soluciones accesibles, modernas y de alta calidad que impulsen su crecimiento digital.
          </p>
        </div>
      </div>
    </section>
  );
}
