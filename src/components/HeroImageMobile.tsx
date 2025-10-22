import { motion } from 'framer-motion';

const HeroImageMobile = () => {
  return (
    <section className="lg:hidden py-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-[#6c256f] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-[#009bac] to-transparent rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-md mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#6c256f]/10 to-[#009bac]/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
          <img
            src="/Garoto Site - Hero.png"
            alt="Criança com produtos ONDA PRO"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroImageMobile;
