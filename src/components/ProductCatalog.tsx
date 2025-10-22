import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

interface ProductCatalogProps {
  onCTAClick: () => void;
}

const ProductCatalog = ({ onCTAClick }: ProductCatalogProps) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const products = [
    {
      title: 'Linha Escolar Premium',
      shortDesc: 'Cadernos, agendas e materiais com design exclusivo',
      fullDesc: 'Produtos desenvolvidos especialmente para o período escolar, com acabamento premium e designs que chamam atenção nas prateleiras. Margens de até 180%.',
      gradient: 'from-[#6c256f] to-[#8c4091]',
      icon: '📚'
    },
    {
      title: 'Organização & Escritório',
      shortDesc: 'Planejadores, organizadores e acessórios corporativos',
      fullDesc: 'Linha completa para organização pessoal e profissional. Produtos com alta rotatividade e ótima margem de lucro. Perfeitos para vendas corporativas.',
      gradient: 'from-[#009bac] to-[#4dbdc6]',
      icon: '💼'
    },
    {
      title: 'Presentes & Papelaria Criativa',
      shortDesc: 'Itens diferenciados para datas especiais',
      fullDesc: 'Produtos únicos que transformam sua vitrine. Ideal para datas comemorativas com margens excelentes e alto giro. Design que vende sozinho.',
      gradient: 'from-[#8c4091] to-[#009bac]',
      icon: '🎁'
    },
    {
      title: 'Decoração & Casa',
      shortDesc: 'Itens decorativos e funcionais para o lar',
      fullDesc: 'Linha de produtos para decoração de ambientes. Quadros, organizadores decorativos e itens que unem funcionalidade e estética. Margem superior a 150%.',
      gradient: 'from-[#4dbdc6] to-[#77c8d2]',
      icon: '🏠'
    }
  ];

  return (
    <section id="produtos" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#009bac]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#6c256f]/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-20 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
              Conheça os produtos que transformam{' '}
              <span className="bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] bg-clip-text text-transparent">
                prateleiras em lucro
              </span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Escolha entre linhas que unem qualidade, apelo visual e rentabilidade.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              layout
              className={`group relative bg-gradient-to-br ${product.gradient} rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xl hover:shadow-2xl ${
                expandedCard === index ? 'md:col-span-2' : ''
              }`}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10 p-6 md:p-8 lg:p-10 min-h-[280px] md:min-h-[320px] flex flex-col justify-between text-white">
                <div>
                  <motion.div
                    className="text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 drop-shadow-2xl"
                    animate={expandedCard === index ? {
                      rotate: [0, -12, 12, -12, 0],
                      scale: [1, 1.15, 1]
                    } : {}}
                    transition={{ duration: 0.7, type: 'spring' }}
                  >
                    {product.icon}
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 drop-shadow-lg">{product.title}</h3>
                  <p className="text-base md:text-lg lg:text-xl opacity-95 mb-3 md:mb-4 font-medium">{product.shortDesc}</p>

                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-4 md:mt-6 border-t-2 border-white/40 pt-4 md:pt-6 font-medium">
                          {product.fullDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between mt-6 md:mt-8">
                  <span className="text-xs md:text-sm lg:text-base font-semibold bg-white/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full">
                    {expandedCard === index ? 'Toque para minimizar' : 'Toque para saber mais'}
                  </span>
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full touch-target flex items-center justify-center"
                    animate={{ rotate: expandedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                  >
                    <ChevronDown size={24} strokeWidth={2.5} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.4}>
          <div className="text-center px-4">
            <motion.button
              onClick={onCTAClick}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-10 md:px-12 py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#6c256f] rounded-full shadow-2xl overflow-hidden min-h-[56px]"
              whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -15px rgba(108, 37, 111, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundSize: '200% 100%' }}
            >
              <motion.span
                className="w-3 h-3 bg-green-300 rounded-full shadow-lg shadow-green-400/50"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
              <span className="relative z-10">Quero um atendimento exclusivo</span>
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

export default ProductCatalog;
