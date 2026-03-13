import { useState } from 'react';
import { Laptop, Globe, Settings, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  packages: { name: string; features: string[] }[];
  image: string;
}

function ServiceCard({ icon, title, subtitle, packages, image }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-white rounded-xl shadow-[0_4px_24px_-4px_rgba(0,102,255,0.12)] hover:shadow-[0_12px_40px_-8px_rgba(0,102,255,0.25)] transition-all duration-300 hover:-translate-y-2 group">

      {/* Imagen — overflow-hidden SOLO aquí */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Ícono superpuesto */}
      <div className="absolute top-36 left-6 w-20 h-20 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-3xl flex items-center justify-center shadow-xl ring-4 ring-white z-10 p-3">
        {icon}
      </div>

      {/* Contenido */}
      <div className="p-8 pt-10">
        <h3 className="text-2xl font-bold text-[#0A1929] mb-2">{title}</h3>
        <p className="text-lg text-[#0066FF] font-semibold mb-4">{subtitle}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[#0066FF] hover:text-[#00D9FF] font-semibold transition-colors border border-[#0066FF] hover:border-[#00D9FF] rounded-lg px-4 py-2"
        >
          {isExpanded ? 'Ocultar opciones' : 'Ver opciones'}
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {/* Paquetes expandibles */}
      <div
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: isExpanded ? '1200px' : '0px', opacity: isExpanded ? 1 : 0 }}
      >
        <div className="px-8 pb-8 space-y-4">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-[#F0F4F8] rounded-lg p-4 border-l-4 border-[#0066FF]">
              <h4 className="font-bold text-[#0A1929] mb-2">{pkg.name}</h4>
              <ul className="space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-700">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Borde inferior gradiente al hover */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl" />
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Laptop className="w-8 h-8 text-white" />,
      title: 'Soporte y Mantenimiento',
      subtitle: 'Portátiles, computadores y soporte remoto',
      image: '/src/assets/support.jpg',
      packages: [
        {
          name: 'Básico',
          features: ['Limpieza física y software', 'Eliminación de virus', 'Optimización del sistema', 'Respaldo de datos']
        },
        {
          name: 'Profesional',
          features: ['Todo lo del paquete básico', 'Instalación de software', 'Configuración remota', 'Actualización de drivers', 'Soporte remoto 1 mes']
        },
        {
          name: 'Empresarial',
          features: ['Soporte remoto continuo mensual', 'Mantenimiento preventivo', 'Monitoreo proactivo', 'Atención prioritaria', 'Visitas programadas']
        }
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Desarrollo Web',
      subtitle: 'Ajustado a tu presupuesto',
      image: '/src/assets/develoment.jpg',
      packages: [
        {
          name: 'Landing Page',
          features: ['Diseño moderno y responsive', 'Hasta 5 secciones', 'Formulario de contacto', 'Optimización SEO básica', 'Hosting incluido 1 año']
        },
        {
          name: 'Sitio Corporativo',
          features: ['Hasta 10 páginas', 'Diseño personalizado', 'Panel de administración', 'Blog integrado', 'SEO avanzado', 'Soporte 3 meses']
        },
        {
          name: 'E-commerce Básico',
          features: ['Catálogo de productos', 'Carrito de compras', 'Pasarela de pago', 'Panel de administración', 'Gestión de inventario', 'Soporte 6 meses']
        }
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Soluciones IT',
      subtitle: 'Cotización personalizada',
      image: '/src/assets/soluciones.jpg',
      packages: [
        {
          name: 'Consultoría Digital',
          features: ['Análisis de necesidades digitales', 'Diagnóstico tecnológico', 'Propuesta de soluciones web', 'Plan de implementación', 'Seguimiento']
        },
        {
          name: 'Hosting y Correos',
          features: ['Registro de dominio', 'Hosting optimizado', 'Certificado SSL', 'Correos corporativos', 'Soporte técnico']
        },
        {
          name: 'Mantenimiento Web',
          features: ['Actualizaciones de seguridad', 'Respaldos automáticos', 'Monitoreo 24/7', 'Optimización de rendimiento', 'Soporte prioritario']
        }
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1929] mb-4">
            Nuestros servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para impulsar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}