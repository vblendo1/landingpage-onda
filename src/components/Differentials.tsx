import { useState } from 'react';
import { Truck, Calendar, TrendingUp, Users, Sparkles, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

interface DifferentialsProps {
  onCTAClick: () => void;
}

const Differentials = ({ onCTAClick }: DifferentialsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const differentials = [
    {
      icon: Truck,
      title: 'Frete grátis',
      description: 'Para todo o Brasil',
      color: '#009bac'
    },
    {
      icon: Calendar,
      title: 'Prazo de 60 dias',
      description: 'Pague depois de vender',
      color: '#6c256f'
    },
    {
      icon: TrendingUp,
      title: 'Margens até 200%',
      description: 'Lucro real garantido',
      color: '#009bac'
    },
    {
      icon: Users,
      title: 'Atendimento exclusivo',
      description: 'Suporte dedicado ao lojista',
      color: '#8c4091'
    },
    {
      icon: Sparkles,
      title: 'Design premium',
      description: 'Produtos que vendem sozinhos',
      color: '#4dbdc6'
    },
    {
      icon: Shield,
      title: 'Qualidade garantida',
      description: 'Importação direta e confiável',
      color: '#6c256f'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % differentials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + differentials.length) % differentials.length);
  };

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#6c256f] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#009bac] to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight px-4">
              Infraestrutura de{' '}
              <span className="bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] bg-clip-text text-transparent">
                negócios completa
              </span>
              , desde o primeiro dia
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              Condições exclusivas pensadas para proteger seu caixa e maximizar seus lucros
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop Grid Layout */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}08 0%, ${item.color}15 100%)`
                  }}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <Icon size={32} style={{ color: item.color }} strokeWidth={2.5} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12 relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="px-4"
              >
                {(() => {
                  const item = differentials[currentSlide];
                  const Icon = item.icon;
                  return (
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 min-h-[280px] flex flex-col items-center justify-center text-center">
                      <div
                        className="w-20 h-20 mb-6 rounded-xl flex items-center justify-center shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)`,
                        }}
                      >
                        <Icon size={40} style={{ color: item.color }} strokeWidth={2.5} />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6c256f] to-[#8c4091] flex items-center justify-center shadow-lg"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Anterior"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex gap-2">
              {differentials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-[#6c256f] to-[#009bac] w-8'
                      : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#009bac] to-[#4dbdc6] flex items-center justify-center shadow-lg"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Próximo"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center px-4">
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 italic max-w-2xl mx-auto">
              Sem atravessador, sem enrolação. Só produto com giro rápido, boa apresentação e margem de verdade.
            </p>

            <motion.button
              onClick={onCTAClick}
              className="group relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#009bac] via-[#4dbdc6] to-[#009bac] rounded-full shadow-2xl overflow-hidden touch-target"
              whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -15px rgba(0, 155, 172, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundSize: '200% 100%' }}
            >
              <motion.span
                className="w-3 h-3 bg-green-300 rounded-full shadow-lg shadow-green-400/50"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
              <span className="relative z-10">Quero condições exclusivas</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Differentials;
