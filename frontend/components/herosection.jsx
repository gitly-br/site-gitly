import React from 'react';
import Image from "next/image";
import premiopt from "../assets/premiopt.svg";

const openLink = (url) => {
  window.open(url, "_blank");
};

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center px-4 py-28 flex flex-col items-center sm:flex-row sm:justify-between bg-black w-full overflow-hidden" style={{ backgroundImage: 'url(/background.svg)' }}>
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mb-6 sm:mb-0">
        <Image src={premiopt} width={450} height={360} alt="premiopt" className="w-auto h-auto max-w-full" />
      </div>
      <div className="text-center sm:text-left sm:w-1/2 sm:pl-8 text-white font-montserrat p-28 ml-0 sm:ml-14">  
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-title">Uma Equipe Dedicada ao Crescimento da Sua Empresa</h2>
        <p className="text-base text-gray-300 mb-8 font-text">
          Nossa equipe é especializada em impulsionar o crescimento empresarial com soluções inovadoras e suporte personalizado, garantindo resultados
          eficazes e sustentáveis para sua empresa.
        </p>
        <button className="btn-transparente" onClick={() => openLink("https://www.linkedin.com/company/gitly/")}>Ler Mais</button>
      </div>
    </div>
  );
};

export default HeroSection;
