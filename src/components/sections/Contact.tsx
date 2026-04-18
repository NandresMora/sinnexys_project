import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, User, AtSign, MessageSquare } from 'lucide-react';
import { submitLead } from '../../lib/supabase';


/**
 * Lead type definition for Supabase (Comentado para evitar lint warning)
 * 
type Lead = {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
};
*/

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'queued' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitLead({
      nombre: formData.name,
      email: formData.email,
      telefono: formData.phone ? Number(formData.phone) : null,
      servicio: formData.service || null,
      mensaje: formData.message,
    });

    if (result.ok) {
      setSubmitStatus(result.queued ? 'queued' : 'success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      setErrorMessage(result.message);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 6000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-[#0A1929] to-[#0066FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-gray-300">
            Estamos listos para ayudarte a impulsar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp / Llamadas</h4>
                    <div className="flex flex-col">
                      <a href="https://wa.me/573123602705" className="text-[#00D9FF] hover:underline">
                        WhatsApp: +57 312 360 2705
                      </a>
                      <a href="tel:+573123602705" className="text-white hover:text-[#00D9FF] transition-colors mt-1 font-medium">
                        Llamar ahora: +57 (312) 360-2705
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:contactosinnexys@gmail.com" className="text-[#00D9FF] hover:underline">
                      contactosinnexys@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                    <p className="text-gray-300">
                      Sabana Norte, Cundinamarca<br />
                      Colombia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Horario de atención
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                  <span className="font-semibold text-white">Lunes - Viernes</span>
                  <span className="text-[#00D9FF] font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                  <span className="font-semibold text-white">Sábados y Domingos</span>
                  <span className="text-[#00D9FF] font-medium">9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-8">
              {/* Nombre */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#0A1929] font-semibold mb-2">
                  Nombre completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#0A1929] font-semibold mb-2">
                  Correo electrónico *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-[#0A1929] font-semibold mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                    placeholder="300 000 0000"
                  />
                </div>
              </div>

              {/* Servicio */}
              <div className="mb-6">
                <label htmlFor="service" className="block text-[#0A1929] font-semibold mb-2">
                  Servicio de interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="soporte">Soporte y Mantenimiento</option>
                  <option value="desarrollo">Desarrollo Web</option>
                  <option value="soluciones">Soluciones IT</option>
                  <option value="consultoria">Consultoría</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#0A1929] font-semibold mb-2">
                  Mensaje *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                <Send className="w-5 h-5" />
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ¡Mensaje enviado exitosamente! Te responderemos pronto.
                </div>
              )}

              {submitStatus === 'queued' && (
                <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>
                    <strong>Sin conexión en este momento.</strong> Tu mensaje fue guardado y se enviará automáticamente cuando recuperes internet. ¡No necesitas hacer nada más!
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
                  {errorMessage || 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
