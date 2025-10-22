import { BookOpen, TrendingUp, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

const Blog = () => {
  const articles = [
    {
      icon: TrendingUp,
      title: 'Como aumentar o ticket médio na volta às aulas',
      excerpt: 'Estratégias práticas para maximizar suas vendas no período mais importante do ano para papelarias.',
      color: '#6c256f'
    },
    {
      icon: Eye,
      title: 'As tendências de papelaria que vão dominar 2026',
      excerpt: 'Descubra quais produtos estarão em alta e prepare seu estoque com antecedência.',
      color: '#009bac'
    },
    {
      icon: BookOpen,
      title: 'O segredo das vitrines que vendem sozinhas',
      excerpt: 'Técnicas de visual merchandising que transformam sua vitrine em uma verdadeira máquina de vendas.',
      color: '#8c4091'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Dicas que ajudam sua loja a{' '}
            <span className="bg-gradient-to-r from-[#6c256f] to-[#009bac] bg-clip-text text-transparent">
              vender mais
            </span>
            {' '}(sem gastar mais)
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Conteúdos exclusivos para lojistas que querem crescer
          </p>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
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
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 shine-effect"
              >
                <motion.div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: `${article.color}15` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon
                      size={80}
                      style={{ color: article.color }}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </motion.div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#6c256f] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-[#009bac] font-semibold hover:underline inline-flex items-center gap-2">
                    Ler artigo
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <motion.a
              href="/blog"
              className="inline-block px-10 py-4 text-lg font-semibold text-[#6c256f] bg-white rounded-full shadow-md transition-all duration-300 border-2 border-[#6c256f] shine-effect"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(108, 37, 111, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Acessar o Blog da Onda Pro
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;
