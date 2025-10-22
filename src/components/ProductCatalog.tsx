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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conheça os produtos que transformam{' '}
              <span className="bg-gradient-to-r from-[#6c256f] to-[#009bac] bg-clip-text text-transparent">
                prateleiras em lucro
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha entre linhas que unem qualidade, apelo visual e rentabilidade.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
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
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              layout
              className={`relative bg-gradient-to-br ${product.gradient} rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shine-effect ${
                expandedCard === index ? 'md:col-span-2 min-h-[400px]' : 'min-h-[280px]'
              }`}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-black/20"></div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <motion.div
                    className="text-6xl mb-4"
                    animate={expandedCard === index ? {
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {product.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">{product.title}</h3>
                  <p className="text-lg opacity-90 mb-4">{product.shortDesc}</p>

                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-lg leading-relaxed mt-4 border-t border-white/30 pt-4">
                          {product.fullDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-medium">
                    {expandedCard === index ? 'Clique para minimizar' : 'Clique para saber mais'}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
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
              Quero um atendimento exclusivo
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductCatalog;
