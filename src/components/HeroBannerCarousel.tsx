import { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const HeroBannerCarousel = () => {
  const banners = [
    {
      id: 1,
      image: '/sm-banner-ondao2025-ondanotes.png',
      alt: 'OndaNotes - Blocos de Notas Adesivas - Volta às Aulas 2025'
    },
    {
      id: 2,
      image: '/sm-banner-ondao2025.png',
      alt: 'Frete Grátis Todo Brasil - Volta às Aulas 2025'
    },
    {
      id: 3,
      image: '/sm-banner-ondao2025-corretivos.png',
      alt: 'Corretivos e Cola em Fita - Volta às Aulas 2025'
    },
    {
      id: 4,
      image: '/sm-banner-ondao2025-canetapop.png',
      alt: 'Canetas POP Esferográfica e Espiral - Volta às Aulas 2025'
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      duration: 20
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="lg:hidden relative w-full pt-16 pb-2 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {banners.map((banner) => (
                <div
                  key={banner.id}
                  className="flex-[0_0_100%] min-w-0 relative"
                >
                  <motion.img
                    src={banner.image}
                    alt={banner.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === selectedIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-[#6c256f] to-[#009bac]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Optional: Navigation Arrows for larger mobile screens */}
          <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 pointer-events-none">
            <motion.button
              onClick={scrollPrev}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#6c256f] hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Banner anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={scrollNext}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#6c256f] hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Próximo banner"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBannerCarousel;
