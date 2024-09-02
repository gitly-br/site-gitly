import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";

const Articles = () => {
  const cards = [
    {
      id: 1,
      image: "/article1.png",
      alt: "First",
      title: "No Grand Plaza Mall, GPS leva clientes às lojas com Gitly através de um aplicativo",
      link: "https://valor.globo.com/empresas/noticia/2023/03/06/no-grand-plaza-shopping-gps-leva-clientes-as-lojas.ghtml"
    },
    {
      id: 2,
      image: "/article2.png",
      alt: "Second",
      title: "Plataforma de Líderes de Inovação da Royal Academy of Engineering na Inglaterrain England",
      link: "https://www.youtube.com/watch?v=GBpodBzdumE"
    },
    {
      id: 3,
      image: "/article3.png",
      alt: "Third",
      title: "Comitê de Desenvolvimento Industrial do Grande ABC e a seleção de startups",
      link: "https://valor.globo.com/empresas/noticia/2023/03/06/para-quimica-e-petroquimica-drones-e-energia-limpa.ghtml"
    },
    // Adicione mais cards se necessário
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-24 lg:px-48 py-10 md:py-20 lg:py-40 bg-black">
      <div className="text-white flex flex-col">
        <h1 className="text-3xl font-bold text-center font-title">Artigos</h1>
        <p className="text-center py-3 px-10 font-text mx-auto w-11/12 sm:w-3/4 md:w-1/2">
          Descubra como a Gitly é percebida e discutida em diversos veículos de comunicação com nossos artigos destacados na mídia. Estes textos exploram o impacto das nossas inovações em inteligência artificial e ciência de dados e destacam como estamos moldando o futuro de várias indústrias.
        </p>
      </div>
      <div>
        <Slider {...sliderSettings} className="flex p-5 overflow-x-hidden">
          {cards.map((card) => (
            <div key={card.id} className="p-2">
              <div className="flex flex-col items-center text-left text-[1.3em] text-wrap">
                <Image src={card.image} alt={card.alt} width={300} height={300} />
                <div style={{ maxWidth: "300px" }} className="bg-[#202020] pt-2 px-3 text-left flex flex-col rounded-b-2xl">
                  <h1 className="text-white text-left font-text">{card.title}</h1>
                  <button 
                    className="my-5 text-[#3AA06B] text-left underline font-bold"
                    onClick={() => openLink(card.link)}
                  >
                    Ler &gt;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Articles;
