import { useState } from 'react';
import { Laptop, Globe, Settings, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  packages: { name: string; price: string; features: string[] }[];
}

function ServiceCard({ icon, title, subtitle, packages }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="p-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-lg flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#0A1929] mb-2">{title}</h3>
        <p className="text-lg text-[#0066FF] font-semibold mb-4">{subtitle}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[#0066FF] hover:text-[#00D9FF] font-semibold transition-colors"
        >
          {isExpanded ? 'Ocultar opciones' : 'Ver opciones'}
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="px-8 pb-8 space-y-4 animate-fadeIn">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-[#F0F4F8] rounded-lg p-4 border-l-4 border-[#0066FF]">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-[#0A1929]">{pkg.name}</h4>
                <span className="text-[#0066FF] font-bold">{pkg.price}</span>
              </div>
              <ul className="space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-700">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Laptop className="w-8 h-8 text-white" />,
      title: 'Soporte y Mantenimiento',
      subtitle: 'Desde $50.000 COP',
      packages: [
        {
          name: 'Básico',
          price: '$50.000',
          features: ['Limpieza física y software', 'Eliminación de virus', 'Optimización del sistema', 'Respaldo de datos']
        },
        {
          name: 'Profesional',
          price: '$120.000',
          features: ['Todo lo del paquete básico', 'Instalación de software', 'Configuración de red', 'Actualización de drivers', 'Soporte remoto 1 mes']
        },
        {
          name: 'Empresarial',
          price: 'Cotización',
          features: ['Soporte continuo mensual', 'Mantenimiento preventivo', 'Monitoreo proactivo', 'Atención prioritaria', 'Visitas programadas']
        }
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Desarrollo Web',
      subtitle: 'Desde $200.000 COP',
      packages: [
        {
          name: 'Landing Page',
          price: '$200.000',
          features: ['Diseño moderno y responsive', 'Hasta 5 secciones', 'Formulario de contacto', 'Optimización SEO básica', 'Hosting incluido 1 año']
        },
        {
          name: 'Sitio Corporativo',
          price: '$800.000',
          features: ['Hasta 10 páginas', 'Diseño personalizado', 'Panel de administración', 'Blog integrado', 'SEO avanzado', 'Soporte 3 meses']
        },
        {
          name: 'E-commerce Básico',
          price: '$1.500.000',
          features: ['Catálogo de productos', 'Carrito de compras', 'Pasarela de pago', 'Panel de administración', 'Gestión de inventario', 'Soporte 6 meses']
        }
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Soluciones IT',
      subtitle: 'Cotización personalizada',
      packages: [
        {
          name: 'Consultoría IT',
          price: 'Desde $150.000',
          features: ['Análisis de necesidades', 'Diagnóstico técnico', 'Propuesta de soluciones', 'Plan de implementación', 'Seguimiento']
        },
        {
          name: 'Hosting y Dominios',
          price: 'Desde $80.000/año',
          features: ['Registro de dominio', 'Hosting optimizado', 'Certificado SSL', 'Correos corporativos', 'Soporte técnico']
        },
        {
          name: 'Mantenimiento Web',
          price: 'Desde $100.000/mes',
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
