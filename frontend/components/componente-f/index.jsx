import React, { useState, useEffect } from "react";
import { Card } from "./Card";

const Carousel = ({ partners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = partners.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (totalSlides * 2));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const partners2 = [
    partners[partners.length - 1],
    ...partners,
    partners[0],
    partners[1],
    partners[2]
  ];

  // Determina se o carrossel atingiu o último elemento da lista original
  const isLastOriginalSlide = currentSlide === totalSlides - 1;

  // Controla a aplicação da classe de transição
  const transitionClass = isLastOriginalSlide ? "transition-transform duration-300 ease-in-out" : "";

  // Retorna ao início da lista original quando o último slide é atingido
  useEffect(() => {
    if (isLastOriginalSlide) {
      setTimeout(() => {
        setCurrentSlide(0);
      }, 3000); // Espera um curto período de tempo antes de retornar ao início
    }
  }, [isLastOriginalSlide]);

  return (
    <div
      className="text-white bg-black poppins-font truncate font-thin px-5 lg:px-20 xl:px-64"
      style={{
        background: `linear-gradient(to right, #021b09, black)`
      }}
      data-carousel="slide"
    >
      <div className="flex justify-center">
        <h1 className="text-[3em] font-semibold">Our customers</h1>
      </div>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none z-10"
          onClick={() =>
            setCurrentSlide(
              (currentSlide - 1 + (totalSlides * 2)) % (totalSlides * 2)
            )
          }
          style={{ marginLeft: "10px" }}
        >
          <img src="/arrow-left.svg" alt="Previous" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none z-10"
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % (totalSlides * 2))
          }
          style={{ marginRight: "10px" }}
        >
          <img src="/arrow-right.svg" alt="Next" />
        </button>
        <div className="flex p-5 overflow-x-hidden">
          {partners2.map((partner, index) => (
            <div
              key={index}
              className={transitionClass}
              style={{
                transform: `translateX(-${currentSlide * 300}px)`,
                minWidth: "300px"
              }}
            >
              <Card
                partner={partner}
                isSelected={index === currentSlide}
                onClick={() => goToSlide(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center text-wrap text-white lg:px-40 px-10 text-[1.5em]">
          <p>{partners2[currentSlide].description}</p>
        </div>
        <div className="flex justify-center pt-10 text-[1.6em] font-semibold text-[#3AA06B]">
          <a
            href={partners2[currentSlide].link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#3AA06B",
              textDecoration: "underline",
              fontWeight: "bold"
            }}
          >
            Read more
          </a>
          <img
            src="/arrow-right-2.svg"
            alt="Previous"
            className="pl-3"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
