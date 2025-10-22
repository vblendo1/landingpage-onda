import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

interface TestimonialsProps {
  onCTAClick: () => void;
}

const Testimonials = ({ onCTAClick }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
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
    <section id="depoimentos" className="py-24 bg-gradient-to-br from-white via-[#f6f6f6] to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#8c4091]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-[#4dbdc6]/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
            Histórias reais de quem viu o{' '}
            <span className="bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] bg-clip-text text-transparent">
              estoque girar de verdade
            </span>
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Lojistas como você já transformaram seus negócios com a Onda Pro
          </p>
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
                onDragStart={handleUserInteraction}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    nextTestimonial();
                  } else if (swipe > 10000) {
                    prevTestimonial();
                  }
                }}
                className="px-4"
                onTouchStart={handleUserInteraction}
              >
                <motion.div
                  className="relative bg-white rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 shadow-2xl border-2 border-gray-100 overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-50`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
                  <motion.div
                    className="relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#009bac] to-[#4dbdc6] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Quote className="text-white" size={40} strokeWidth={2.5} />
                    </div>
                  </motion.div>
                  <p className="relative z-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-10 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#6c256f] to-[#8c4091] flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg flex-shrink-0">
                        {testimonials[currentIndex].author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-bold text-gray-900">
                          {testimonials[currentIndex].author}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">{testimonials[currentIndex].location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 sm:gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-md"
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 200 }}
                          whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                        >
                          <span className="text-white text-base sm:text-lg md:text-xl font-bold">★</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={() => { prevTestimonial(); handleUserInteraction(); }}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-br from-[#6c256f] to-[#8c4091] rounded-full p-4 shadow-2xl z-10 items-center justify-center"
            aria-label="Anterior"
            whileHover={{ scale: 1.15, x: -8, boxShadow: '0 25px 35px -5px rgba(108, 37, 111, 0.5)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="text-white" size={28} strokeWidth={3} />
          </motion.button>

          <motion.button
            onClick={() => { nextTestimonial(); handleUserInteraction(); }}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-br from-[#009bac] to-[#4dbdc6] rounded-full p-4 shadow-2xl z-10 items-center justify-center"
            aria-label="Próximo"
            whileHover={{ scale: 1.15, x: 8, boxShadow: '0 25px 35px -5px rgba(0, 155, 172, 0.5)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="text-white" size={28} strokeWidth={3} />
          </motion.button>

          <div className="flex justify-center gap-2 sm:gap-3 mt-8 md:mt-10">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  handleUserInteraction();
                }}
                className={`h-3 sm:h-4 rounded-full transition-all duration-300 shadow-lg ${
                  index === currentIndex ? 'bg-gradient-to-r from-[#6c256f] to-[#009bac] w-10 sm:w-12' : 'bg-gray-300 w-3 sm:w-4'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <motion.button
              onClick={onCTAClick}
              className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] rounded-full shadow-2xl overflow-hidden min-h-[56px]"
              whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -15px rgba(108, 37, 111, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Quero ter o mesmo resultado</span>
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

export default Testimonials;
