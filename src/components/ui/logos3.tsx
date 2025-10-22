import { useEffect, useRef } from "react";

interface Logo {
  id: string;
  description: string;
  image: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "+5000 lojas em todo o Brasil já abastecem com a Onda Pro.",
  logos = [
    {
      id: "logo-1",
      description: "Papelaria",
      image: "🏪",
    },
    {
      id: "logo-2",
      description: "Arte & Papel",
      image: "🎨",
    },
    {
      id: "logo-3",
      description: "Escritório",
      image: "📝",
    },
    {
      id: "logo-4",
      description: "Distribuidora",
      image: "🌎",
    },
    {
      id: "logo-5",
      description: "Papelaria Central",
      image: "🏢",
    },
    {
      id: "logo-6",
      description: "Escritório Total",
      image: "💼",
    },
    {
      id: "logo-7",
      description: "Express",
      image: "⚡",
    },
    {
      id: "logo-8",
      description: "Premium",
      image: "⭐",
    },
  ],
  className = "",
}: Logos3Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className={`py-12 bg-white border-y border-gray-200 ${className}`}>
      <div className="container flex flex-col items-center text-center max-w-7xl mx-auto px-6">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          <span className="bg-gradient-to-r from-[#6c256f] to-[#009bac] bg-clip-text text-transparent">
            {heading}
          </span>
        </h2>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div
          ref={scrollRef}
          className="overflow-hidden my-8 relative"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex gap-16 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-w-[200px] h-32 border border-gray-200 shadow-sm"
              >
                <div className="text-center">
                  <div className="text-5xl mb-2">{logo.image}</div>
                  <p className="text-sm font-medium text-gray-700">{logo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center max-w-3xl mx-auto mt-8 px-6">
        <p className="text-xl text-gray-700 mb-2">
          De pequenas empresas a redes internacionais
        </p>
        <p className="text-2xl font-semibold bg-gradient-to-r from-[#6c256f] to-[#009bac] bg-clip-text text-transparent">
          todos com o mesmo resultado: mais giro, mais margem, menos preocupação.
        </p>
      </div>
    </section>
  );
};

export { Logos3 };
