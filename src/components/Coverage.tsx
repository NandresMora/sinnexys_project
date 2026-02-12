import { MapPin, Wifi } from 'lucide-react';

export default function Coverage() {
  const locations = [
    'Chía',
    'Cajicá',
    'Zipaquirá',
    'Sopó',
    'Bogotá (Norte)'
  ];

  return (
    <section id="cobertura" className="py-20 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1929] mb-4">
            Dónde estamos
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Servicio presencial en Sabana Norte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0A1929] mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#0066FF]" />
                Servicio presencial
              </h3>

              <div className="space-y-4">
                {locations.map((location, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-[#F0F4F8] rounded-lg hover:bg-[#0066FF] hover:text-white transition-colors group">
                    <div className="w-2 h-2 bg-[#00D9FF] rounded-full group-hover:bg-white"></div>
                    <span className="font-semibold">{location}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-lg text-white">
                <div className="flex items-start gap-3">
                  <Wifi className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Soporte remoto nacional</h4>
                    <p className="text-sm">
                      Atención remota disponible para toda Colombia mediante programas de acceso remoto seguros
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-xl p-8 text-white shadow-2xl">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

                <div className="relative space-y-6">
                  <div className="text-center py-8">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">Sabana Norte</h3>
                    <p className="text-lg">Cundinamarca, Colombia</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {locations.map((location, idx) => (
                      <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="font-bold">{location}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm opacity-90">
                      Atención rápida y personalizada en tu zona
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
