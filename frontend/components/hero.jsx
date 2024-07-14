import React from "react";
import Image from "next/image";
import Backgroundanima from '../public/backgroundanima.png';

function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center text-white h-screen">
      <div className="hidden md:block absolute inset-0">
        <iframe
          src="https://my.spline.design/interactivegridexperiment-e15763ad41110005c12c2616f064ee04/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute inset-0 z-0"
        ></iframe>
      </div>
      <div className="block md:hidden absolute inset-0">
        <Image
          src={Backgroundanima}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* Camada de sobreposição preta */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 p-4 md:p-0">
        <h1 className="font-title text-2xl md:text-5xl mb-5 md:mb-10">
          Vamos falar sobre tomada de<br />decisão impulsionadas por IA?
        </h1>
        <p className="font-text text-lg mb-10 px-4 md:px-60">
          Na Gitly, impulsionamos o futuro das decisões empresariais com soluções de inteligência artificial avançadas. Nossa tecnologia não apenas simplifica complexidades, mas antecipa desafios, garantindo que você esteja sempre à frente. Com a Gitly, cada decisão é uma oportunidade para inovar e liderar no seu mercado.<br></br>
          Descubra o poder da IA na transformação dos seus negócios. Entre em contato hoje e comece a moldar o futuro.
        </p>
        <button className="border border-white rounded-br-lg w-48 h-12 text-white font-text">
          Inicie seu Projeto
        </button>
      </div>
    </div>
  );
}

export default Hero;
