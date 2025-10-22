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
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Nossos diferenciais fazem o{' '}
            <span className="bg-gradient-to-r from-[#6c256f] to-[#009bac] bg-clip-text text-transparent">
              lucro trabalhar pra você
            </span>
          </h2>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  scale={1.03}
                  transitionSpeed={2500}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                >
                  <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full shine-effect">
                    <motion.div
                      className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}15` }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Icon size={32} style={{ color: item.color }} strokeWidth={2.5} />
                    </motion.div>
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                      {item.text}
                    </p>
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
              className="inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#009bac] to-[#4dbdc6] rounded-full shadow-lg transition-all duration-300 shine-effect"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 155, 172, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              Quero ver os produtos campeões de venda
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Differentials;
