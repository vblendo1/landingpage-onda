import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import { StaggerTestimonials } from './ui/stagger-testimonials';

interface TestimonialsProps {
  onCTAClick: () => void;
}

const Testimonials = ({ onCTAClick }: TestimonialsProps) => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6 md:mb-8">
            Histórias reais de quem viu o{' '}
            <span className="bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] bg-clip-text text-transparent">
              estoque girar de verdade
            </span>
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto font-medium">
            Lojistas como você já transformaram seus negócios com a Onda Pro
          </p>
        </AnimatedSection>

        <StaggerTestimonials />

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12 md:mt-16">
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
