import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.98)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(16px)', 'blur(20px)']
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-gray-200/60"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/AZUL.png" alt="Onda Pro" className="h-8 md:h-10" />
          </motion.div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:text-[#6c256f] font-medium transition-colors duration-300 relative group text-sm lg:text-base"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#6c256f] to-[#009bac]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </motion.button>
        </div>
      </div>

      <motion.div
        className="md:hidden fixed inset-0 top-16 bg-gradient-to-br from-white via-[#f6f6f6] to-white backdrop-blur-2xl z-40"
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="h-full overflow-y-auto px-6 py-8 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-6 py-5 text-gray-800 font-semibold text-lg rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#6c256f] hover:to-[#009bac] hover:text-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -30,
                scale: isMenuOpen ? 1 : 0.95
              }}
              transition={{ delay: isMenuOpen ? index * 0.08 + 0.1 : 0, type: 'spring', stiffness: 200, damping: 20 }}
              whileTap={{ scale: 0.96 }}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.div
            className="pt-6 mt-6 border-t border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 20
            }}
            transition={{ delay: isMenuOpen ? navItems.length * 0.08 + 0.2 : 0 }}
          >
            <p className="text-center text-sm text-gray-600 mb-4">
              Mais de 5000 lojas confiam na Onda Pro
            </p>
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-yellow-400 text-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    scale: isMenuOpen ? 1 : 0
                  }}
                  transition={{ delay: isMenuOpen ? navItems.length * 0.08 + 0.3 + i * 0.05 : 0, type: 'spring' }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
