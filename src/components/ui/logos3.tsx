import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export const Logos3 = () => {
  const logos = [
    { name: 'Papelaria Criativa', emoji: '🏪' },
    { name: 'Arte & Papel', emoji: '🎨' },
    { name: 'Papel & Cia', emoji: '📝' },
    { name: 'Mundo da Papelaria', emoji: '🌎' },
    { name: 'Papelaria Central', emoji: '🏢' },
    { name: 'Escritório Total', emoji: '💼' },
    { name: 'Papel Express', emoji: '⚡' },
    { name: 'Papelaria Premium', emoji: '⭐' },
  ];

  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <section className="pt-8 pb-12 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-[#6c256f]">+5000 lojas</span> em todo o Brasil já abastecem com a Onda Pro
          </h2>
        </AnimatedSection>

        <div className="my-16 relative">
          <div
            className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
          />
          <div
            className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
          />

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * logos.length * 0.85],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{ width: 'max-content' }}
            >
              {tripleLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-w-[200px] h-32 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#009bac]/30 transition-shadow duration-300 shine-effect"
                >
                  <div className="text-center">
                    <motion.div
                      className="text-4xl mb-2"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {logo.emoji}
                    </motion.div>
                    <p className="text-sm font-medium text-gray-700">{logo.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="text-center max-w-3xl mx-auto px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-2 leading-relaxed">
              De pequenas empresas a redes internacionais
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-[#6c256f] to-[#009bac] bg-clip-text text-transparent leading-relaxed">
              todos com o mesmo resultado: mais giro, mais margem, menos preocupação
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
