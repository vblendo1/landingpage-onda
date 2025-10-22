import { useState } from 'react';
import { X, User, Phone, Mail, Store, MapPin, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
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
    console.log('Modal form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#6c256f]/40 to-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.6)] relative z-10 border-4 border-white/20 overflow-hidden"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 20, stiffness: 250 }}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] px-6 py-5 md:px-10 md:py-8 flex items-center justify-between rounded-t-3xl shadow-xl z-20">
              <motion.h3
                className="text-lg sm:text-xl md:text-3xl font-extrabold text-white drop-shadow-lg leading-tight"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Receba seu Catálogo no WhatsApp
              </motion.h3>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg flex-shrink-0"
                aria-label="Fechar"
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="text-white" size={22} strokeWidth={2.5} />
              </motion.button>
            </div>

            <div className="max-h-[calc(90vh-80px)] md:max-h-[calc(90vh-100px)] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>{`
                .max-h-\\[calc\\(90vh-100px\\)\\]::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-12">
              <motion.p
                className="text-gray-700 mb-6 md:mb-10 text-center text-sm sm:text-base md:text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Preencha seus dados e receba nosso catálogo completo com produtos, condições e ofertas exclusivas.
              </motion.p>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {[
                  { icon: User, name: 'name', type: 'text', placeholder: 'Nome completo' },
                  { icon: Phone, name: 'whatsapp', type: 'tel', placeholder: 'WhatsApp (com DDD)' },
                  { icon: Mail, name: 'email', type: 'email', placeholder: 'E-mail' },
                  { icon: Store, name: 'storeName', type: 'text', placeholder: 'Nome da Loja' },
                  { icon: MapPin, name: 'location', type: 'text', placeholder: 'Cidade/Estado' },
                ].map((field, index) => {
                  const Icon = field.icon;
                  return (
                    <motion.div
                      key={field.name}
                      className="group relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#6c256f] to-[#009bac] rounded-xl flex items-center justify-center shadow-lg group-focus-within:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={18} />
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData] as string}
                        onChange={handleChange}
                        required
                        className="w-full pl-16 md:pl-20 pr-4 md:pr-6 py-3.5 sm:py-4 md:py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#009bac] focus:bg-white focus:shadow-xl focus:outline-none transition-all duration-300 text-gray-900 text-base md:text-lg font-medium"
                      />
                    </motion.div>
                  );
                })}

                <motion.div
                  className="flex items-start gap-3 pt-3 pb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="modalAcceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-5 h-5 md:w-6 md:h-6 text-[#009bac] border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009bac] cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="modalAcceptTerms" className="text-xs sm:text-sm text-gray-700 leading-snug md:leading-relaxed font-medium cursor-pointer">
                    Aceito receber comunicações da Onda Pro via WhatsApp, e-mail e outros canais.
                    Li e concordo com a Política de Privacidade e Termos de Uso.
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  className="group relative w-full py-4 sm:py-5 md:py-6 bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#6c256f] text-white text-base sm:text-lg md:text-xl font-bold rounded-2xl shadow-2xl overflow-hidden mt-3 md:mt-4 min-h-[56px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 30px 60px -15px rgba(108, 37, 111, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    <Send size={20} className="sm:w-6 sm:h-6" />
                    Receber Catálogo no WhatsApp
                  </span>
                </motion.button>
              </div>
            </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;