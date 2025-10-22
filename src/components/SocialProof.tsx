import { useEffect, useRef } from 'react';

const SocialProof = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = [
    { name: 'Papelaria Criativa', image: '🏪' },
    { name: 'Arte & Papel', image: '🎨' },
    { name: 'Papel & Cia', image: '📝' },
    { name: 'Mundo da Papelaria', image: '🌎' },
    { name: 'Papelaria Central', image: '🏢' },
    { name: 'Escritório Total', image: '💼' },
    { name: 'Papel Express', image: '⚡' },
    { name: 'Papelaria Premium', image: '⭐' },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-[#6c256f]">+5000 lojas</span> em todo o Brasil já abastecem com a Onda Pro.
        </h2>

        <div
          ref={scrollRef}
          className="overflow-hidden my-16 relative"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex gap-16 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-w-[200px] h-32 border border-gray-200 shadow-sm"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{logo.image}</div>
                  <p className="text-sm font-medium text-gray-700">{logo.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 mb-2">
            De pequenas empresas a redes internacionais
          </p>
          <p className="text-2xl font-semibold bg-gradient-to-r from-[#6c256f] to-[#009bac] bg-clip-text text-transparent">
            todos com o mesmo resultado: mais giro, mais margem, menos preocupação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
