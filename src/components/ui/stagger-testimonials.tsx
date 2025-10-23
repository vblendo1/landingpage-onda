import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Trabalhava só com produtos de atacadão, margem apertada e estoque parado. Com a Onda Pro, dobrei a margem de lucro e o prazo de 60 dias me deu fôlego pra crescer sem apertar o caixa.",
    by: "Carlos Mendes, Papelaria Criativa - Belo Horizonte, MG",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 1,
    testimonial: "No começo fiz um pedido teste de apenas uma linha de produtos. Em três meses já estava trabalhando com o catálogo completo. O giro é rápido e os produtos vendem sozinhos pela qualidade.",
    by: "Ana Paula Silva, Arte & Papel Express - São Paulo, SP",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 2,
    testimonial: "O frete grátis fez toda diferença no meu orçamento. Consegui estocar para volta às aulas sem gastar nada com transporte e o prazo de pagamento me permitiu vender antes de pagar o fornecedor.",
    by: "Roberto Costa, Papelaria Esquina - Porto Alegre, RS",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 3,
    testimonial: "Sempre tive dificuldade em encontrar produtos diferenciados que realmente giram. A Onda Pro trouxe novidades que meus clientes adoram e com uma margem que compensa investir em estoque.",
    by: "Juliana Ferreira, Mundo da Papelaria - Curitiba, PR",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 4,
    testimonial: "O atendimento exclusivo via WhatsApp me surpreendeu. Qualquer dúvida é resolvida na hora. E poder pagar em 60 dias virou uma vantagem competitiva gigante pro meu negócio.",
    by: "Marcos Oliveira, Central do Escritório - Brasília, DF",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 5,
    testimonial: "Minha loja estava estagnada. Produtos sem diferencial, margem baixa e muito concorrente vendendo o mesmo. A Onda Pro mudou isso. Produtos únicos, margem real e condições que ninguém mais oferece.",
    by: "Fernanda Lima, Papel Premium - Recife, PE",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gradient-to-br from-[#6c256f] to-[#009bac] text-white border-[#6c256f]"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-[#009bac]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(108, 37, 111, 0.3)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-[#6c256f]" : "bg-gray-200"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 object-cover object-top rounded-md"
        style={{
          boxShadow: isCenter
            ? "3px 3px 0px rgba(255, 255, 255, 0.3)"
            : "3px 3px 0px rgba(0, 0, 0, 0.1)"
        }}
      />
      <h3 className={cn(
        "text-sm sm:text-base md:text-lg font-semibold leading-snug mb-2",
        isCenter ? "text-white" : "text-gray-900"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-xs sm:text-sm italic font-medium",
        isCenter ? "text-white/90" : "text-gray-600"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-[#f6f6f6] to-white"
      style={{ height: 600 }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#8c4091]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-[#4dbdc6]/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-2xl transition-all duration-300",
            "bg-white border-2 border-[#6c256f] text-[#6c256f] hover:bg-gradient-to-br hover:from-[#6c256f] hover:to-[#8c4091] hover:text-white shadow-lg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009bac] focus-visible:ring-offset-2"
          )}
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-2xl transition-all duration-300",
            "bg-white border-2 border-[#009bac] text-[#009bac] hover:bg-gradient-to-br hover:from-[#009bac] hover:to-[#4dbdc6] hover:text-white shadow-lg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c256f] focus-visible:ring-offset-2"
          )}
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
