import { useState } from 'react';
import { Send, User, Phone, Mail, Store, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    storeName: '',
    location: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-[#6c256f] via-[#8c4091] to-[#009bac] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4dbdc6] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Solicite seu Catálogo Exclusivo
          </h2>
          <p className="text-xl md:text-2xl text-white/95 font-medium max-w-3xl mx-auto">
            Receba os produtos, condições e ofertas direto no seu WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm border-4 border-white/20">
          <div className="space-y-5">
            <div className="group relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-[#6c256f] to-[#8c4091] rounded-xl flex items-center justify-center shadow-lg group-focus-within:scale-110 transition-transform duration-300">
                <User className="text-white" size={20} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-20 pr-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#009bac] focus:bg-white focus:shadow-xl focus:outline-none transition-all duration-300 text-gray-900 text-lg font-medium"
              />
            </div>

            <div className="group relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-[#009bac] to-[#4dbdc6] rounded-xl flex items-center justify-center shadow-lg group-focus-within:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={20} />
              </div>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp (com DDD)"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full pl-20 pr-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#009bac] focus:bg-white focus:shadow-xl focus:outline-none transition-all duration-300 text-gray-900 text-lg font-medium"
              />
            </div>

            <div className="group relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-[#8c4091] to-[#009bac] rounded-xl flex items-center justify-center shadow-lg group-focus-within:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={20} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-20 pr-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#009bac] focus:bg-white focus:shadow-xl focus:outline-none transition-all duration-300 text-gray-900 text-lg font-medium"
              />
            </div>

            <div className="group relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-[#4dbdc6] to-[#77c8d2] rounded-xl flex items-center justify-center shadow-lg group-focus-within:scale-110 transition-transform duration-300">
                <Store className="text-white" size={20} />
              </div>
              <input
                type="text"
                name="storeName"
                placeholder="Nome da Loja"
                value={formData.storeName}
                onChange={handleChange}
                required
                className="w-full pl-20 pr-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#009bac] focus:bg-white focus:shadow-xl focus:outline-none transition-all duration-300 text-gray-900 text-lg font-medium"
              />
            </div>

            <div className="group relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-[#6c256f] to-[#009bac] rounded-xl flex items-center justify-center shadow-lg group-focus-within:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={20} />
              </div>
              <input
                type="text"
                name="location"
                placeholder="Cidade/Estado"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full pl-20 pr-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#009bac] focus:bg-white focus:shadow-xl focus:outline-none transition-all duration-300 text-gray-900 text-lg font-medium"
              />
            </div>

            <div className="flex items-start gap-4 pt-4 pb-2">
              <input
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
                className="mt-1 w-6 h-6 text-[#009bac] border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009bac] cursor-pointer"
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-700 leading-relaxed font-medium cursor-pointer">
                Aceito receber comunicações da Onda Pro via WhatsApp, e-mail e outros canais.
                Li e concordo com a Política de Privacidade e Termos de Uso.
              </label>
            </div>

            <button
              type="submit"
              className="group relative w-full py-6 bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#6c256f] text-white text-xl font-bold rounded-2xl shadow-2xl overflow-hidden mt-4"
              style={{ backgroundSize: '200% 100%' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = '100% 0%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = '0% 0%';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Send size={24} />
                Quero falar com um representante
              </span>
            </button>

            <p className="text-center text-sm text-gray-600 italic font-medium mt-4">
              ✨ Atendimento direto com nosso time comercial
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
