import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A1929] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-[#00D9FF] mb-4">Sinnexys</h3>
            <p className="text-gray-400 mb-4">
              Soluciones que impulsan tu crecimiento
            </p>
            <p className="text-sm text-gray-400">
              Soluciones tecnológicas para tu crecimiento
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#00D9FF]">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                  Soporte y Mantenimiento
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                  Desarrollo Web
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                  Soluciones IT
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#00D9FF]">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('nosotros')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                  Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('proceso')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                  Proceso
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cobertura')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                  Cobertura
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacto')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#00D9FF]">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/sinnexys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors">



                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00D9FF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Sinnexys. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
