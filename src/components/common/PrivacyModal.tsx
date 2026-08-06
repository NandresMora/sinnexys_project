import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-[#0A1929]">Política de Privacidad</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-gray-600 space-y-6">
          <p className="font-medium text-sm text-gray-400">Última actualización: Agosto de 2026</p>
          
          <p>
            En <strong>SINNEXYS – Servicios IT y Soluciones Digitales</strong>, valoramos la privacidad de nuestros usuarios y nos comprometemos a proteger la información personal que nos suministran a través de nuestro sitio web.
          </p>
          <p>
            Al utilizar nuestro formulario de contacto, aceptas las condiciones descritas en esta Política de Privacidad.
          </p>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">1. Responsable del tratamiento de datos</h3>
            <p>SINNEXYS es el responsable del tratamiento de los datos personales recopilados a través de este sitio web.</p>
            <ul className="mt-2 space-y-1">
              <li><strong>Contacto:</strong></li>
              <li><strong>Correo electrónico:</strong> contactosinnexys@gmail.com <span className="text-sm text-gray-400"></span></li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">2. Información que recopilamos</h3>
            <p>Cuando completas nuestro formulario de contacto podemos solicitar información como:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Empresa (si aplica)</li>
              <li>Tipo de servicio de interés</li>
              <li>Mensaje o descripción de la necesidad</li>
            </ul>
            <p className="mt-2">No solicitamos datos sensibles ni información financiera mediante este formulario.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">3. Finalidad del tratamiento</h3>
            <p>Los datos suministrados serán utilizados únicamente para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Responder solicitudes de información.</li>
              <li>Elaborar cotizaciones.</li>
              <li>Contactar al interesado sobre los servicios solicitados.</li>
              <li>Dar seguimiento a oportunidades comerciales.</li>
              <li>Gestionar el proceso comercial de SINNEXYS.</li>
            </ul>
            <p className="mt-2">No utilizaremos tus datos para finalidades diferentes sin tu autorización.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">4. ¿Dónde se almacenan los datos?</h3>
            <p>La información enviada mediante el formulario se almacena de forma segura en la infraestructura tecnológica utilizada por SINNEXYS.</p>
            <p className="mt-2">Actualmente utilizamos:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Supabase como plataforma de base de datos y almacenamiento de la información enviada mediante el formulario.</li>
              <li>Servicios de infraestructura y alojamiento necesarios para el funcionamiento del sitio web.</li>
            </ul>
            <p className="mt-2">El acceso a esta información está restringido únicamente al personal autorizado de SINNEXYS.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">5. Compartición de información</h3>
            <p>SINNEXYS no vende, alquila ni comercializa la información personal de sus usuarios.</p>
            <p className="mt-2">Solo podremos compartir información cuando:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>exista obligación legal;</li>
              <li>sea requerida por una autoridad competente;</li>
              <li>sea necesario para prestar el servicio solicitado mediante proveedores tecnológicos que apoyan la operación.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">6. Conservación de los datos</h3>
            <p>Los datos se conservarán únicamente durante el tiempo necesario para atender la solicitud del usuario, mantener la relación comercial o cumplir obligaciones legales.</p>
            <p className="mt-2">Posteriormente podrán ser eliminados o anonimizados conforme a nuestras políticas internas.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">7. Derechos del titular</h3>
            <p>De conformidad con la legislación colombiana, el titular de los datos podrá:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>conocer la información almacenada;</li>
              <li>solicitar su actualización;</li>
              <li>corregir datos inexactos;</li>
              <li>solicitar la eliminación cuando sea procedente;</li>
              <li>revocar la autorización otorgada para el tratamiento de sus datos.</li>
            </ul>
            <p className="mt-2">Las solicitudes podrán realizarse mediante nuestro correo de contacto.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">8. Seguridad de la información</h3>
            <p>SINNEXYS implementa medidas técnicas y organizativas razonables para proteger la información contra:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>acceso no autorizado;</li>
              <li>pérdida;</li>
              <li>alteración;</li>
              <li>divulgación;</li>
              <li>destrucción accidental.</li>
            </ul>
            <p className="mt-2">Aunque ningún sistema es completamente invulnerable, trabajamos para mantener un nivel adecuado de seguridad acorde con el tamaño y naturaleza de nuestra operación.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">9. Uso de cookies</h3>
            <p>Nuestro sitio puede utilizar cookies técnicas y de análisis para mejorar la experiencia de navegación y comprender el comportamiento de los visitantes.</p>
            <p className="mt-2">Estas cookies no tienen como finalidad identificar personalmente al usuario.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">10. Cambios en esta política</h3>
            <p>SINNEXYS podrá actualizar esta Política de Privacidad cuando sea necesario para reflejar cambios legales, operativos o tecnológicos.</p>
            <p className="mt-2">La versión vigente será siempre la publicada en este sitio web.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0A1929] mb-2">11. Aceptación</h3>
            <p>Al enviar el formulario de contacto, el usuario manifiesta que ha leído esta Política de Privacidad y autoriza el tratamiento de sus datos personales para las finalidades aquí descritas.</p>
          </section>
        </div>
        
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
