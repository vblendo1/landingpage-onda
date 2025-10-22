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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#6c256f] to-[#009bac] px-8 py-6 flex items-center justify-between rounded-t-3xl">
              <motion.h3
                className="text-2xl font-bold text-white"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Receba seu Catálogo no WhatsApp
              </motion.h3>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                aria-label="Fechar"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="text-white" size={24} />
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <motion.p
                className="text-gray-600 mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Preencha seus dados e receba nosso catálogo completo com produtos, condições e ofertas exclusivas.
              </motion.p>

              <div className="space-y-6">
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
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData] as string}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#009bac] focus:outline-none transition-colors duration-300 text-gray-800"
                      />
                    </motion.div>
                  );
                })}

                <motion.div
                  className="flex items-start gap-3 pt-2"
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
                    className="mt-1 w-5 h-5 text-[#009bac] border-gray-300 rounded focus:ring-[#009bac]"
                  />
                  <label htmlFor="modalAcceptTerms" className="text-sm text-gray-600 leading-relaxed">
                    Aceito receber comunicações da Onda Pro via WhatsApp, e-mail e outros canais.
                    Li e concordo com a Política de Privacidade e Termos de Uso.
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-[#009bac] to-[#4dbdc6] text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 shine-effect"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 155, 172, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Receber Catálogo no WhatsApp
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;