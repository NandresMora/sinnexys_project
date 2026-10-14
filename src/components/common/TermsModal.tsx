import { useEffect } from 'react';
import { X, FileText, ShieldCheck, Mail, Phone } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, BUSINESS_REGION, BUSINESS_COUNTRY } from '../../config/site';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0066FF]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="terms-modal-title" className="text-xl sm:text-2xl font-bold text-[#0A1929]">
                Términos y Condiciones
              </h2>
              <p className="text-xs text-gray-500 font-medium">
                SINNEXYS – Servicios IT y Soluciones Digitales
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
            aria-label="Cerrar modal de Términos y Condiciones"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6 overflow-y-auto text-gray-600 space-y-6 text-sm sm:text-base leading-relaxed">
          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-600">
              Bienvenido a <strong>SINNEXYS</strong>. Al navegar en este sitio web, solicitar cotizaciones o utilizar nuestros canales de contacto, aceptas cumplir con los presentes Términos y Condiciones regulados conforme a la legislación de la República de Colombia.
            </p>
          </div>

          <p className="font-medium text-xs text-gray-400">
            Última actualización: Octubre de 2026
          </p>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              1. Identificación y Ámbito de Aplicación
            </h3>
            <p>
              El presente sitio web es operado por <strong>SINNEXYS – Servicios IT y Soluciones Digitales</strong>, iniciativa tecnológica con sede operativa en {BUSINESS_REGION}, {BUSINESS_COUNTRY}.
            </p>
            <p className="mt-2">
              Estos Términos y Condiciones rigen el acceso, consulta, uso de formularios y contratación de servicios presentados a través de nuestro portal web y canales oficiales de atención.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              2. Servicios Ofrecidos y Naturaleza del Sitio
            </h3>
            <p>
              SINNEXYS ofrece soluciones tecnológicas especializadas para personas, emprendedores y pequeñas y medianas empresas (pymes), incluyendo:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Soporte Técnico y Mantenimiento:</strong> Mantenimiento preventivo y correctivo de computadores portátiles y de escritorio, optimización de sistemas operativos, limpieza física/lógica y soporte remoto nacional o presencial en municipios core de cobertura.</li>
              <li><strong>Desarrollo Web Profesional:</strong> Creación de páginas web (landing pages, sitios corporativos, plataformas web básicas), diseño responsive, integración de formularios y optimización técnica SEO.</li>
              <li><strong>Soluciones IT y Consultoría Digital:</strong> Asesoría tecnológica, hosting, correos corporativos y acompañamiento de transformación digital.</li>
            </ul>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 italic">
              * Nota: El sitio web tiene carácter informativo y de captación de requerimientos. No constituye una pasarela de compra desasistida inmediata; cada requerimiento se evalúa de manera individual.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              3. Cotizaciones, Presupuestos y Contratación
            </h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Las solicitudes enviadas mediante el formulario web o el botón de WhatsApp no constituyen un contrato vinculante inmediato, sino una manifestación de interés comercial.</li>
              <li>Toda propuesta formal o cotización emitida por SINNEXYS tendrá una validez estándar de quince (15) días calendario a partir de su emisión, salvo estipulación en contrario.</li>
              <li>La contratación efectiva del servicio se perfecciona mediante la confirmación explícita por escrito (vía correo electrónico, WhatsApp corporativo u orden de servicio) y el pago del anticipo acordado si aplica.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              4. Obligaciones del Usuario y del Cliente
            </h3>
            <p>Al hacer uso del sitio web o contratar nuestros servicios, el usuario se compromete a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Suministrar información verídica, exacta y comprobable en los formularios de contacto.</li>
              <li>No emplear las herramientas de comunicación para enviar spam, código malicioso, contenidos ilícitos o realizar ataques de denegación de servicio.</li>
              <li>Para servicios de desarrollo web: facilitar en los tiempos acordados los insumos, contenidos, accesos y aprobaciones necesarias para el despliegue del proyecto.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              5. Condiciones de Soporte Técnico y Responsabilidad de Backups
            </h3>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-2 text-xs sm:text-sm text-amber-900 rounded-r-lg">
              <strong>Importante sobre la información del usuario:</strong> Es responsabilidad exclusiva del cliente realizar copias de seguridad (backups) de sus archivos, información y programas antes de someter cualquier equipo a mantenimiento físico o sesión de soporte remoto.
            </div>
            <p className="mt-2">
              Salvo que el servicio expresamente contratado sea la recuperación o copia de seguridad de datos, SINNEXYS no asume responsabilidad patrimonial por pérdida o alteración de información originada por fallas previas de hardware (como sectores defectuosos en discos duros), malware preexistente o deterioro por desgaste del equipo.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              6. Garantía de Servicios
            </h3>
            <p>
              De conformidad con la Ley 1480 de 2011 (Estatuto del Consumidor de Colombia):
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Soporte y Reparaciones:</strong> Los servicios de mantenimiento técnico cuentan con garantía sobre la mano de obra realizada según el periodo estipulado en la orden de servicio correspondiente.</li>
              <li><strong>Desarrollo Web:</strong> Las soluciones web entregadas incluyen un periodo de garantía técnica para solventar anomalías de código o ajustes directamente relacionados con el alcance acordado en la propuesta inicial.</li>
              <li><strong>Exclusiones de Garantía:</strong> La garantía quedará sin efecto en caso de intervención de terceros no autorizados, manipulación inadecuada por parte del usuario, infección posterior por virus/malware, golpes, sobretensiones eléctricas o modificaciones a credenciales y servidores sin previo aviso.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              7. Propiedad Intelectual
            </h3>
            <p>
              Todos los elementos visuales, marcas, logotipos, textos, código fuente, estilos y estructuras del sitio web son propiedad exclusiva de SINNEXYS o cuentan con licencias de uso legítimo. Queda prohibida su reproducción, ingeniería inversa o uso comercial sin autorización previa y escrita.
            </p>
            <p className="mt-2">
              En los proyectos de desarrollo web a medida, los derechos patrimoniales sobre los entregables finales acordados se transferirán al cliente una vez se encuentre cancelado el 100% del valor total estipulado en el contrato o cotización.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              8. Precios y Formas de Pago
            </h3>
            <p>
              Los precios de referencia mostrados o cotizados están expresados en pesos colombianos (COP). Los métodos de pago autorizados (transferencias bancarias, pasarelas de pago o transferencias electrónicas) serán comunicados exclusivamente por nuestros canales oficiales.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              9. Protección de Datos y Privacidad
            </h3>
            <p>
              El tratamiento de los datos recolectados en el formulario de contacto se encuentra sujeto a nuestra <strong>Política de Privacidad</strong> y en estricto cumplimiento de la Ley 1581 de 2012 de Protección de Datos Personales (Habeas Data) en Colombia.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              10. Enlaces a Terceros y Plataformas Externas
            </h3>
            <p>
              Nuestro sitio puede enlazar o interactuar con plataformas de terceros como WhatsApp, Supabase o servicios de analítica. SINNEXYS no asume responsabilidad sobre la disponibilidad, términos de uso o políticas de seguridad de dichos servicios externos ajenos a nuestro control directo.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              11. Modificaciones de los Términos
            </h3>
            <p>
              SINNEXYS se reserva el derecho de modificar o actualizar estos Términos y Condiciones en cualquier momento para reflejar cambios legales o ajustes operativos. La versión actualizada siempre estará disponible y vigente en este apartado web.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-lg font-bold text-[#0A1929] mb-2">
              12. Ley Aplicable y Jurisdicción
            </h3>
            <p>
              Los presentes Términos y Condiciones se rigen e interpretan con base en las leyes de la República de Colombia. Cualquier controversia derivada del uso del sitio web o de los servicios prestados se procurará dirimir de mutuo acuerdo o mediante los centros de conciliación legalmente habilitados en el territorio colombiano.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h3 className="text-base font-bold text-[#0A1929] mb-2">
              13. Canales Oficiales de Contacto
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">
              Para cualquier duda, aclaración o solicitud formal relativa a estos términos, puedes comunicarte a través de:
            </p>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4 text-[#0066FF]" />
                <span>Correo: <strong>{CONTACT_EMAIL}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-[#00D9FF]" />
                <span>WhatsApp / Atención: <strong>{WHATSAPP_DISPLAY}</strong></span>
              </div>
            </div>
          </section>
        </div>
        
        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] hover:scale-105 text-white rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
