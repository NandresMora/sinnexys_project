import { Star, Gift } from 'lucide-react';

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

        <div className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-xl p-8 md:p-12 text-white text-center shadow-2xl">
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
            className="inline-block bg-white text-[#0066FF] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all hover:scale-105"
          >
            Aprovecha la oferta
          </a>
        </div>
      </div>
    </section>
  );
}
