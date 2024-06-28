import React from 'react';
import Image from "next/image";
import prize1 from "../assets/prize1.svg";
import prize2 from "../assets/prize2.svg";
import prize3 from "../assets/prize3.svg";
import prize4 from "../assets/prize4.svg";

const Prizes = () => {
  return (
    <div className="bg-black mx-auto flex flex-col py-10 px-14 md:flex-row items-center justify-between w-full">
      <div className="w-full md:w-1/4 flex flex-col md:items-left mb-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Prêmios dos quais nos orgulhamos</h2>
        <p className="text-lg mb-8">Confira os prêmios que reconhecem a liderança e inovação da Gitly em inteligência artificial e ciência de dados. Estes prêmios destacam nosso impacto e excelência no setor tecnológico.</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 items-center w-full md:w-3/4">
        <Image src={prize1} alt="prize1" width={200} height={200} className="mb-4" />
        <Image src={prize2} alt="prize2" width={200} height={200} className="mb-4" />
        <Image src={prize3} alt="prize3" width={200} height={200} className="mb-4" />
        <Image src={prize4} alt="prize4" width={200} height={200} className="mb-4" />
      </div>
    </div>
  );
};

export default Prizes;