import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A1929] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#00D9FF]">Sinnexys</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('servicios')} className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('proceso')} className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Proceso
            </button>
            <button onClick={() => scrollToSection('cobertura')} className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Cobertura
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Contacto
            </button>
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066FF] hover:bg-[#00D9FF] text-white px-6 py-2 rounded-lg transition-all hover:scale-105"
            >
              Solicitar servicio
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#00D9FF] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0A1929] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('proceso')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection('cobertura')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors"
            >
              Cobertura
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-gray-800 rounded-md transition-colors"
            >
              Contacto
            </button>
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-3 py-2 bg-[#0066FF] hover:bg-[#00D9FF] text-white rounded-md transition-colors"
            >
              Solicitar servicio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
