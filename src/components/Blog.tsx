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
    <section id="blog" className="py-24 bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-[#009bac]/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#6c256f]/40 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6">
            Dicas que ajudam sua loja a{' '}
            <span className="bg-gradient-to-r from-[#6c256f] via-[#8c4091] to-[#009bac] bg-clip-text text-transparent">
              vender mais
            </span>
            {' '}(sem gastar mais)
          </h2>
          <p className="text-center text-gray-700 mb-20 text-xl font-medium max-w-2xl mx-auto">
            Conteúdos exclusivos para lojistas que querem crescer
          </p>
        </AnimatedSection>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                whileHover={{ y: -12, transition: { duration: 0.3, type: 'spring' } }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent"
              >
                <motion.div
                  className="h-56 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${article.color}15 0%, ${article.color}30 100%)`
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <motion.div
                    className="relative z-10 w-28 h-28 rounded-2xl flex items-center justify-center shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${article.color}40 0%, ${article.color}60 100%)`
                    }}
                    whileHover={{ rotate: [0, -12, 12, -12, 0], scale: 1.15 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                  >
                    <Icon
                      size={64}
                      style={{ color: article.color }}
                      strokeWidth={2}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%', skewX: -20 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#6c256f] group-hover:to-[#009bac] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    {article.excerpt}
                  </p>
                  <motion.button
                    className="inline-flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-[#009bac] to-[#4dbdc6] bg-clip-text text-transparent group-hover:gap-4 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Ler artigo
                    <motion.span
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#009bac] to-[#4dbdc6] text-white shadow-lg"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <motion.a
              href="/blog"
              className="group relative inline-flex items-center gap-3 px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-[#009bac] via-[#4dbdc6] to-[#009bac] rounded-full shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -15px rgba(0, 155, 172, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundSize: '200% 100%' }}
              animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
              transition={{ backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' } }}
            >
              <span className="relative z-10">Acessar o Blog da Onda Pro</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;
