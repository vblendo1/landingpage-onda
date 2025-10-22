import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

interface TestimonialsProps {
  onCTAClick: () => void;
}

const Testimonials = ({ onCTAClick }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: 'Antes eu comprava tudo no marketplace. Com a Onda Pro, o giro triplicou e pago só depois de vender.',
      author: 'Papelaria Criativa',
      location: 'MG',
      gradient: 'from-[#6c256f]/10 to-[#8c4091]/10'
    },
    {
      text: 'Comecei com 1 kit, hoje já trabalho com 4 linhas da marca.',
      author: 'Arte & Papel',
      location: 'SP',
      gradient: 'from-[#009bac]/10 to-[#4dbdc6]/10'
    },
    {
      text: 'Frete grátis e 60 dias no boleto me salvaram no início da temporada.',
      author: 'Papelaria Esquina',
      location: 'RS',
      gradient: 'from-[#8c4091]/10 to-[#009bac]/10'
    }
  ];

  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#f6f6f6] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Histórias reais de quem viu o{' '}
            <span className="bg-gradient-to-r from-[#6c256f] to-[#009bac] bg-clip-text text-transparent">
              estoque girar de verdade
            </span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    nextTestimonial();
                  } else if (swipe > 10000) {
                    prevTestimonial();
                  }
                }}
                className="px-4"
              >
                <motion.div
                  className={`bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-3xl p-12 shadow-xl border border-gray-200 shine-effect`}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <Quote className="text-[#009bac] mb-6" size={48} />
                  </motion.div>
                  <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-[#6c256f]">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                    </div>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-yellow-400 text-2xl"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            aria-label="Anterior"
            whileHover={{ scale: 1.1, x: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="text-[#6c256f]" size={24} />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            aria-label="Próximo"
            whileHover={{ scale: 1.1, x: 5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="text-[#6c256f]" size={24} />
          </motion.button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#009bac] w-8' : 'bg-gray-300 w-3'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{ width: index === currentIndex ? 32 : 12 }}
              />
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <motion.button
              onClick={onCTAClick}
              className="px-10 py-4 text-lg font-semibold text-[#6c256f] bg-white rounded-full shadow-md transition-all duration-300 border-2 border-[#6c256f] shine-effect"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(108, 37, 111, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Quero ter o mesmo resultado
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
