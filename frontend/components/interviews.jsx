import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CBN from "../public/cbn.svg";
import Inter from "../public/interviews.svg";

const Interviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="py-10 px-32 text-center flex flex-col bg-gradient-to-r from-[#021b09] to-black text-white paizao">
      <div>
        <h1 className='text-[3em] font-semibold mb-5'>Our latest interviews</h1>
        <p className='text-lg md:text-xl lg:text-2xl text-center mb-5'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
        </p>
      </div>
      <div className='flex gap-10 justify-center flex-wrap md:flex-nowrap pai'>
        <Slider {...settings} className="w-full">
          <div className='card flex filho bg-[#202020] flex-col'>
            <div className='flex justify-center image pt-10'>
              <Image src={CBN} alt="Interviews" />
            </div>
            <div className='flex flex-col text-wrap px-32 py-20 text-center'>
              <h1 className='font-semibold text-xl mb-3'>CBN São Paulo</h1>
              <p>
                How Artificial intelligence can warn about rain, floods and the penetration of barriers in risky areas of cities.
              </p>
            </div>
          </div>
          <div className='card flex filho bg-[#202020] flex-col'>
            <div className='flex justify-center image pt-10'>
              <Image src={Inter} alt="CBN" />
            </div>
            <div className='flex flex-col text-wrap text-center px-32 py-20'>
              <h1 className='font-semibold text-xl mb-3'>Valor Econômico | Globo</h1>
              <p>
                Artificial Intelligence developed by Gitly will alert about rain, floods and flooding in the city of Santo André/SP.
              </p>
            </div>
          </div>
          <div className='card flex filho bg-[#202020] flex-col'>
            <div className='flex justify-center image pt-10'>
              <Image src={CBN} alt="CBN" />
            </div>
            <div className='flex flex-col text-wrap text-center px-32 py-20'>
              <h1 className='font-semibold text-xl mb-3'>CBN São Paulo</h1>
              <p>
                How Artificial intelligence can warn about rain, floods and the penetration of barriers in risky areas of cities.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <style jsx>{`
        .card {
          border-radius: 1rem; /* Adiciona bordas arredondadas */
          overflow: hidden; /* Garante que o conteúdo não vaze */
          margin-right: 20px; /* Espaçamento entre os cards */
          width: calc(33.33% - 20px); /* Define o tamanho dos cards com margem direita */
          flex: 0 0 auto; /* Impede que os cards se expandam */
        }
        .slick-slide {
          outline: none; /* Remove a borda ao focar nos slides */
        }
        @media (max-width: 1618px) {
          .pai {
            flex-direction: column !important;
            align-items: center !important;
          }
          .paizao {
            justify-content: center;
            align-items: center;
          }
        }
        @media (max-width: 1068px) {
          .filho {
            flex-direction: column !important;
            align-items: center !important;
          }
          .paizao {
            padding: 0 20px;
          }
          .image {
            margin-top: 20px;
          }
        }
        @media (max-width: 576px) {
          .textoimage {
            margin-top: 130px;
            margin-left: 0px;
            margin-right: 0px;
          }
          .card {
            width: calc(100% - 20px); /* Tamanho total dos cards sem margem */
            margin-right: 0; /* Remove a margem direita */
            margin-bottom: 20px; /* Adiciona espaço inferior entre os cards */
          }
        }
      `}</style>
    </div>
  );
};

export default Interviews;
