import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/573000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        {isHovered && (
          <div className="bg-white text-[#0A1929] px-4 py-2 rounded-lg shadow-lg font-semibold whitespace-nowrap animate-slideIn">
            ¿Necesitas ayuda? Escríbenos
          </div>
        )}

        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-pulse hover:animate-none">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
      </div>
    </a>
  );
}
