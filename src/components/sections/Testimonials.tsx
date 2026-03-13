import { Star, Gift, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Gerente General',
      company: 'Empresa Local',
      text: 'Excelente servicio y atención. Resolvieron nuestros problemas de IT rápidamente.',
      rating: 5
    },
    {
      name: 'Carlos Ramírez',
      role: 'Dueño',
      company: 'Negocio Pyme',
      text: 'Muy profesionales, nos desarrollaron una página web moderna y funcional.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Emprendedora',
      company: 'Startup Tech',
      text: 'Precios justos y trabajo de calidad. Totalmente recomendados para soporte técnico.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1929] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Icono de comillas */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 mb-4 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1929]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role} — {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de promoción */}
        <div className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
          {/* Destellos decorativos */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/50 rounded-full animate-pulse delay-200"></div>

          <div className="relative z-10">
            <Gift className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Promoción de lanzamiento!
            </h3>
            <p className="text-xl md:text-2xl mb-6">
              15% OFF en tu primer servicio
            </p>
            <p className="text-lg mb-8 opacity-90">
              Aprovecha esta oferta exclusiva para nuevos clientes y descubre la calidad de nuestros servicios
            </p>
            <a
              href="https://wa.me/573123602705"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0066FF] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.504-1.477A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.598-.836-6.328-2.229l-.36-.293-2.637.865.88-2.605-.319-.378A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Aprovecha la oferta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
