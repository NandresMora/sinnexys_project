/**
 * Coverage.tsx - Sección de Cobertura Geográfica
 * 
 * Muestra las zonas donde Sinnexys ofrece servicio presencial
 * en la Sabana Norte de Cundinamarca, Colombia.
 * 
 * También incluye información del soporte remoto disponible
 * para todo el territorio nacional.
 */
import { MapPin, Wifi, Clock, ShieldCheck } from 'lucide-react';

export default function Coverage() {
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
                para resolver problemas de software, equipos y soporte especializado in-situ.
              </p>
              {/* Lista de servicios presenciales */}
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
                  Diagnóstico y solución en sitio
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
                  Mantenimiento preventivo y correctivo
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
                  Configuración de equipos y software
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
                  Asesoría tecnológica personalizada
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

          {/* Columna derecha: Tarjeta visual de prioridad regional */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_24px_48px_-12px_rgba(0,102,255,0.12)] overflow-hidden">

              {/* Header strip — accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF]" />

              <div className="p-10">
                {/* Region identity block */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#0066FF] uppercase mb-2">
                      Área de Operaciones
                    </p>
                    <h3 className="text-3xl font-bold tracking-tight text-[#0A1929] mb-1">
                      Sabana Norte
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">Cundinamarca, CO</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F7FF] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#0066FF]" />
                  </div>
                </div>

                {/* Status pill */}
                <div className="flex items-center gap-2 mb-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Servicio Activo</span>
                </div>

                {/* Minimalist Highlights */}
                <div className="space-y-8 mb-12">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0A1929]">Respuesta &lt; 24h</h4>
                      <p className="text-sm text-gray-500">Atención prioritaria en zona urbana</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0A1929]">Soporte Certificado</h4>
                      <p className="text-sm text-gray-500">Garantía técnica en cada intervención</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0A1929]">Sedes Core</h4>
                      <p className="text-sm text-gray-500">Chía, Cajicá, Zipaquirá y Sopó</p>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="pt-8 border-t border-gray-100">
                  <a
                    href="#contacto"
                    className="flex items-center justify-between group/link bg-gray-50 hover:bg-[#0066FF] p-4 rounded-2xl transition-all duration-300"
                  >
                    <span className="text-sm font-bold text-gray-600 group-hover:text-white transition-colors">
                      Consultar otra ubicación
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:translate-x-1 transition-transform">
                      <svg className="w-4 h-4 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
