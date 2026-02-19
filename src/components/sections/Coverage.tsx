/**
 * Coverage.tsx - Sección de Cobertura Geográfica
 * 
 * Muestra las zonas donde Sinnexys ofrece servicio presencial
 * en la Sabana Norte de Cundinamarca, Colombia.
 * 
 * También incluye información del soporte remoto disponible
 * para todo el territorio nacional.
 * 
 * Municipios de cobertura presencial:
 * - Chía, Cajicá, Zipaquirá, Sopó, Bogotá (Norte)
 * - Tabio, Tenjo, Tocancipá, Gachancipá, Cota, Cogua, Nemocón
 */
import { MapPin, Wifi, Navigation } from 'lucide-react';

// Interfaz que define la estructura de cada ubicación de cobertura
interface Location {
  name: string;        // Nombre del municipio
  distance: string;    // Distancia aproximada desde Chía (sede principal)
}

export default function Coverage() {
  // Lista de municipios con cobertura presencial y distancia desde Chía
  const locations: Location[] = [
    { name: 'Chía', distance: 'Sede principal' },
    { name: 'Cajicá', distance: '~5 km' },
    { name: 'Sopó', distance: '~10 km' },
    { name: 'Cota', distance: '~12 km' },
    { name: 'Tabio', distance: '~13 km' },
    { name: 'Tenjo', distance: '~18 km' },
    { name: 'Tocancipá', distance: '~15 km' },
    { name: 'Gachancipá', distance: '~20 km' },
    { name: 'Zipaquirá', distance: '~22 km' },
    { name: 'Cogua', distance: '~28 km' },
    { name: 'Nemocón', distance: '~30 km' },
    { name: 'Bogotá (Norte)', distance: '~30 km' },
  ];

  return (
    <section id="cobertura" className="py-20 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1929] mb-4">
            Dónde estamos
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Servicio presencial en Sabana Norte y soporte remoto nacional
          </p>
        </div>

        {/* Grid principal: Información de servicios (izquierda) + Tarjeta de ubicaciones (derecha) */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Columna izquierda: Tarjetas de servicio presencial y remoto */}
          <div className="space-y-6">

            {/* Tarjeta: Atención Presencial */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#0066FF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1929] mb-3">
                Atención Presencial
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nuestro equipo técnico se desplaza hasta tu ubicación en la Sabana Norte
                para resolver problemas de hardware, redes y configuración in-situ.
              </p>
              {/* Lista de servicios presenciales */}
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
                  Diagnóstico en sitio
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
                  Mantenimiento preventivo y correctivo
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
                  Instalación de redes y cableado
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
                  Configuración de equipos y servidores
                </li>
              </ul>
            </div>

            {/* Tarjeta: Soporte Remoto Nacional */}
            <div className="bg-gradient-to-br from-[#0A1929] to-[#1a2c42] rounded-2xl shadow-lg p-8 text-white relative overflow-hidden group">
              {/* Efecto de brillo decorativo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF] rounded-full filter blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Wifi className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Soporte Remoto Nacional
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Soluciones inmediatas sin importar dónde estés. Conexión segura
                  para resolver problemas de software y configuración.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium text-[#00D9FF]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse"></span>
                    Disponible ahora
                  </span>
                  <span className="w-px h-4 bg-white/20"></span>
                  <span>Cobertura en toda Colombia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Tarjeta visual de ubicaciones */}
          <div className="relative">
            <div className="relative group">
              {/* Efecto de brillo decorativo alrededor de la tarjeta */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Encabezado con patrón de puntos */}
                <div className="relative h-32 bg-gradient-to-br from-[#0066FF] to-[#004bb5] overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-24 h-24 text-white/10 transform rotate-12" />
                  </div>
                </div>

                <div className="relative px-8 pb-8 -mt-12">
                  {/* Ícono circular principal */}
                  <div className="bg-white p-2 rounded-full shadow-lg inline-block mb-6 relative z-10 mx-auto w-24 h-24 flex items-center justify-center">
                    <div className="w-full h-full bg-[#F0F7FF] rounded-full flex items-center justify-center">
                      <MapPin className="w-10 h-10 text-[#0066FF]" />
                    </div>
                  </div>

                  {/* Información de la región */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#0A1929] mb-1">Sabana Norte</h3>
                    <p className="text-sm text-gray-500 font-medium">Cundinamarca, Colombia</p>
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Cobertura Activa
                    </div>
                  </div>

                  {/* Grid de municipios con distancia */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                    {locations.map((location, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-[#F0F7FF] hover:text-[#0066FF] transition-all duration-300 group/item border border-transparent hover:border-[#0066FF]/20 cursor-default"
                      >
                        <Navigation className="w-3 h-3 text-gray-400 group-hover/item:text-[#0066FF] transition-colors flex-shrink-0" />
                        <div className="min-w-0">
                          <span className="text-gray-700 font-medium text-sm group-hover/item:text-[#0066FF] block truncate">
                            {location.name}
                          </span>
                          <span className="text-xs text-gray-400">{location.distance}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enlace para validar cobertura */}
                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="text-gray-500 text-sm">
                      ¿Tu municipio no está en la lista?<br />
                      <a
                        href="#contacto"
                        className="text-[#0066FF] font-medium hover:underline"
                      >
                        Contáctanos para validar cobertura
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
