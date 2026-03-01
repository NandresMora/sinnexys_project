import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';


/**
 * Lead type definition for Supabase
 */
type Lead = {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Intentamos insertar el lead en la tabla 'leads' de Supabase
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            nombre: formData.name,
            email: formData.email,
            telefono: formData.phone ? Number(formData.phone) : null,
            servicio: formData.service || null,
            mensaje: formData.message
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Error enviando a Supabase:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
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
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <a href="https://wa.me/573123602705" className="text-[#00D9FF] hover:underline">
                      +57 3123602705
                    </a>
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
              <div className="space-y-2 text-gray-300">
                <p><span className="font-semibold text-white">Lunes - Viernes:</span> 8:00 AM - 6:00 PM</p>
                <p><span className="font-semibold text-white">Sábados y Domingos:</span> 9:00 AM - 5:00 PM</p>

              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#0A1929] font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#0A1929] font-semibold mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-[#0A1929] font-semibold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                  placeholder="300 000 0000"
                />
              </div>

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

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#0A1929] font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                ></textarea>
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
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                  ¡Mensaje enviado exitosamente! Te responderemos pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
                  Hubo un error al enviar el mensaje a nuestra base de datos. Por favor, intenta de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
