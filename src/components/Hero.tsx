import { ChevronRight } from "lucide-react"
import { motion } from 'framer-motion'
import FloatingParticles from './ui/FloatingParticles'

interface HeroProps {
  onCTAClick: () => void;
}

const Hero = ({ onCTAClick }: HeroProps) => {
  const title = "Importadora de Materiais Escolares e de Escritório"
  const subtitle = {
    regular: "Venda hoje. Pague depois. ",
    gradient: "Até 60 dias pra lucrar antes de investir",
  }
  const description = "Produtos com até 200% de margem, frete grátis para todo Brasil e atendimento exclusivo. Transforme seu estoque em lucro com condições que cabem no seu bolso."
  const ctaText = "Quero meu Catálogo Exclusivo"

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f6f6f6] to-white">
      <motion.div
        className="absolute inset-0 z-[0] opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(108, 37, 111, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 155, 172, 0.15) 0%, transparent 50%)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingParticles />
      <section id="hero" className="relative max-w-full mx-auto z-1">
        <div className="max-w-screen-xl z-10 mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-16 md:pt-24 md:pb-16 lg:pt-28 lg:pb-0">
          {/* Mobile Layout - Text Only */}
          <motion.div
            className="lg:hidden space-y-5 max-w-3xl leading-0 mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 text-sm font-semibold mx-auto px-6 py-3 bg-gradient-to-r from-[#6c256f]/10 via-[#009bac]/10 to-[#6c256f]/10 backdrop-blur-sm border border-[#6c256f]/20 rounded-full w-fit shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="w-2 h-2 bg-gradient-to-r from-[#6c256f] to-[#009bac] rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] bg-clip-text text-transparent">
                {title}
              </span>
              <ChevronRight className="w-4 h-4 text-[#6c256f]" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-extrabold mx-auto leading-tight">
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {subtitle.regular}
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{
                  textShadow: '0 0 80px rgba(108, 37, 111, 0.3)'
                }}
              >
                {subtitle.gradient}
              </motion.span>
            </h2>

            <motion.p
              className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="items-center justify-center gap-x-4 space-y-4 sm:flex sm:space-y-0 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button
                onClick={onCTAClick}
                className="group relative inline-flex h-14 md:h-16 px-10 md:px-12 items-center justify-center rounded-full cursor-pointer overflow-hidden bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] shadow-2xl shadow-[#6c256f]/40 min-h-[56px]"
                whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -15px rgba(108, 37, 111, 0.6)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#009bac] via-[#8c4091] to-[#6c256f] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10 text-base sm:text-lg font-bold text-white flex items-center gap-2 md:gap-3">
                  {ctaText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%', skewX: -20 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Desktop Layout - Two Columns */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:min-h-[600px]">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-4 xl:space-y-5 pr-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 bg-gradient-to-r from-[#6c256f]/10 via-[#009bac]/10 to-[#6c256f]/10 backdrop-blur-sm border border-[#6c256f]/20 rounded-full w-fit shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="w-2 h-2 bg-gradient-to-r from-[#6c256f] to-[#009bac] rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] bg-clip-text text-transparent">
                  {title}
                </span>
                <ChevronRight className="w-4 h-4 text-[#6c256f]" />
              </motion.div>

              <h2 className="text-3xl xl:text-5xl 2xl:text-6xl tracking-tight font-extrabold leading-tight">
                <motion.span
                  className="block bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {subtitle.regular}
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{
                    textShadow: '0 0 80px rgba(108, 37, 111, 0.3)'
                  }}
                >
                  {subtitle.gradient}
                </motion.span>
              </h2>

              <motion.p
                className="text-base xl:text-lg text-gray-700 leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {description}
              </motion.p>

              <motion.div
                className="pt-4 xl:pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.button
                  onClick={onCTAClick}
                  className="group relative inline-flex h-14 xl:h-16 px-10 xl:px-12 items-center justify-center rounded-full cursor-pointer overflow-hidden bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] shadow-2xl shadow-[#6c256f]/40"
                  whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -15px rgba(108, 37, 111, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#009bac] via-[#8c4091] to-[#6c256f] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="relative z-10 text-base xl:text-lg font-bold text-white flex items-center gap-3">
                    {ctaText}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%', skewX: -20 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative h-full flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                className="relative w-full h-[600px] flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/Garoto Site - Hero.png"
                  alt="Criança com produtos ONDA PRO"
                  className="w-full h-full object-contain object-center"
                  loading="eager"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
