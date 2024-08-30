import React from "react";
import Image from "next/image";
import Backgroundanima from '../public/backgroundanima.png';
import Banner from '../assets/banner.png';
import Link from 'next/link';

function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center text-white min-h-screen">
      {/* Imagem de fundo para telas grandes */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={Banner}
          alt="Background"
          layout="fill" // Preencher toda a tela
          objectFit="cover" // Garantir que a imagem cubra o espaço sem distorções
          quality={100}
          className="absolute inset-0"
        />
      </div>

      {/* Imagem de fundo para telas pequenas */}
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src={Backgroundanima}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
      </div>

      {/* Camada de sobreposição preta */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Conteúdo central */}
      <div className="relative z-20 p-4 md:p-0 text-center flex flex-col justify-center items-center h-full">
        <h1 className="font-title text-3xl md:text-5xl mb-5 md:mb-10 leading-tight">
          Vamos falar sobre tomada de<br />decisão impulsionadas por IA?
        </h1>
        <p className="font-text text-lg mb-10 px-4 md:px-60">
        Descubra o poder da IA na transformação dos seus negócios. Entre em contato hoje e comece a moldar o futuro!
        </p>
        <Link href="/contactus">
            <button className="btn-transparente">
              Inicie seu Projeto
            </button>
          </Link>
      </div>
    </div>
  );
}

export default Hero;
