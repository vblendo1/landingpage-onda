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
    <>
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
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </motion.button>

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
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-lg border-t border-gray-200/60">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 text-gray-800 hover:text-[#6c256f] hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
    </>
  );
};

export default Navbar;
