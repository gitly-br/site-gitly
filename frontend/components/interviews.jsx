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
    <div className="py-10 lg:px-36 xl:px-80 md:px-0 text-center flex flex-col bg-black text-white paizao">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <h1 className='text-[3em] font-semibold mb-5'>Our latest interviews</h1>
        <p className='text-lg md:text-xl lg:text-2xl text-center mb-5'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
        </p>
      </div>
      <Slider {...settings} className='mt-8'>
        <div className="px-2"> {/* Reduzindo a margem horizontal */}
          <div className="bg-[#202020] rounded-lg flex flex-col items-center p-4 card"> {/* Adicionando a classe card */}
            <div className='w-full flex justify-center mb-3'>
              <Image src={CBN} alt="Interviews" />
            </div>
            <h1 className='font-semibold text-xl mb-3'>CBN São Paulo</h1>
            <p className='mb-3'>
              How Artificial intelligence can warn about rain, floods and the penetration of barriers in risky areas of cities.
            </p>
            <button className="action-button">Watch</button>
          </div>
        </div>
        <div className="px-2"> {/* Reduzindo a margem horizontal */}
          <div className="bg-[#202020] rounded-lg flex flex-col items-center p-4 card"> {/* Adicionando a classe card */}
            <div className='w-full flex justify-center mb-3'>
              <Image src={Inter} alt="CBN" />
            </div>
            <h1 className='font-semibold text-xl mb-3'>Valor Econômico | Globo</h1>
            <p className='mb-3'>
              Artificial Intelligence developed by Gitly will alert about rain, floods and flooding in the city of Santo André/SP.
            </p>
            <button className="action-button">Read</button>
          </div>
        </div>
        <div className="px-2"> {/* Reduzindo a margem horizontal */}
          <div className="bg-[#202020] rounded-lg flex flex-col items-center p-4 card"> {/* Adicionando a classe card */}
            <div className='w-full flex justify-center mb-3'>
              <Image src={CBN} alt="CBN" />
            </div>
            <h1 className='font-semibold text-xl mb-3'>CBN São Paulo</h1>
            <p className='mb-3'>
              How Artificial intelligence can warn about rain, floods and the penetration of barriers in risky areas of cities.
            </p>
            <button className="action-button">Watch</button>
          </div>
        </div>
      </Slider>
      <style jsx>{`
        .card {
          max-width: 300px; /* Reduzindo a largura máxima dos cards */
          margin: 0 auto; /* Centralizando os cards */
        }
        .slick-slide > div {
          margin: 0 10px; /* Adiciona margem horizontal entre os slides */
        }
        .slick-list {
          margin: 0 -10px; /* Ajusta a margem negativa para compensar a margem dos cards */
        }
        .image-container {
          display: flex;
          justify-content: center;
          padding-top: 10px;
        }
        .text-container {
          padding: 20px;
          text-align: center;
          flex-grow: 1;
        }
        .action-button {
          margin-top: auto;
          background-color: #1DB954;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .action-button:hover {
          background-color: #1AA34A;
        }
        .slick-slide {
          outline: none; /* Remove a borda ao focar nos slides */
        }
        @media (max-width: 576px) {
          .card {
            width: calc(100% - 20px); /* Tamanho total dos cards com margem */
            margin: 0 auto 20px; /* Centraliza os cards e adiciona espaço inferior */
          }
        }
      `}</style>
    </div>
  );
};

export default Interviews;
