import { Truck, Calendar, TrendingUp, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import AnimatedSection from './ui/AnimatedSection';

interface DifferentialsProps {
  onCTAClick: () => void;
}

const Differentials = ({ onCTAClick }: DifferentialsProps) => {
  const differentials = [
    {
      icon: Truck,
      text: 'Frete grátis para todo o Brasil',
      color: '#009bac'
    },
    {
      icon: Calendar,
      text: 'Até 60 dias para pagar no boleto bancário',
      color: '#6c256f'
    },
    {
      icon: TrendingUp,
      text: 'Produtos com margens de 110% a 200%',
      color: '#009bac'
    },
    {
      icon: Users,
      text: 'Atendimento exclusivo para lojistas',
      color: '#8c4091'
    },
    {
      icon: Sparkles,
      text: 'Produtos com design que vendem sozinhos',
      color: '#4dbdc6'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-br from-white via-[#f6f6f6] to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#6c256f]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#009bac]/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6">
            Nossos diferenciais fazem o{' '}
            <span className="bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] bg-clip-text text-transparent">
              lucro trabalhar pra você
            </span>
          </h2>
          <p className="text-center text-xl text-gray-600 mb-20 max-w-3xl mx-auto">
            Condições exclusivas pensadas para aumentar sua margem e facilitar seu caixa
          </p>
        </AnimatedSection>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
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
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  scale={1.05}
                  transitionSpeed={2000}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="all"
                >
                  <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}08 0%, ${item.color}15 100%)`
                      }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)`,
                        }}
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -8, 8, -8, 0],
                          transition: { duration: 0.6, type: 'spring' }
                        }}
                      >
                        <Icon size={40} style={{ color: item.color }} strokeWidth={2.5} />
                      </motion.div>
                      <p className="text-xl font-bold text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8 italic">
              Sem atravessador, sem enrolação.<br />
              Só produto com giro rápido, boa apresentação e margem de verdade.
            </p>

            <motion.button
              onClick={onCTAClick}
              className="group relative inline-flex items-center gap-3 px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-[#009bac] via-[#4dbdc6] to-[#009bac] rounded-full shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -15px rgba(0, 155, 172, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundSize: '200% 100%' }}
              animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
              transition={{ backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' } }}
            >
              <motion.span
                className="w-3 h-3 bg-green-300 rounded-full shadow-lg shadow-green-400/50"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
              <span className="relative z-10">Quero ver os produtos campeões de venda</span>
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
