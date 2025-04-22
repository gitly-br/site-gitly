import React from 'react';
import Image from "next/image";
import finep from "../assets/finep.svg";
import zapt from "../assets/zapt.svg";
import pq_tech_SA from "../assets/Parceria_1_branco.png";
import pq_tech_Paraiba from "../assets/Parceria_2.png";
import viral from "../assets/Parceria_3_branco.png";

const Partners = () => {
  return (
    <div className="mx-auto py-10 px-14 text-center" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
      <p className="text-3xl mb-8 font-title">Parcerias das quais nos orgulhamos</p>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-10 items-center">
        <a href="https://zapt.tech/en/" target="_blank" rel="noopener noreferrer">
          <Image src={zapt} alt="Partner 1" width={80} height={150} className="mb-10" />
        </a>
        <a href="http://www.finep.gov.br/" target="_blank" rel="noopener noreferrer">
          <Image src={finep} alt="Partner 2" width={150} height={150} className="mb-10" />
        </a>
        <a href="https://www3.santoandre.sp.gov.br/parquetecnologico/" target="_blank" rel="noopener noreferrer">
          <Image src={pq_tech_SA} alt="Partner 3" width={150} height={150} className="mb-10" />
        </a>
        <a href="https://www.paqtc.org.br/itcg.php" target="_blank" rel="noopener noreferrer">
          <Image src={pq_tech_Paraiba} alt="Partner 4" width={150} height={150} className="mb-10" />
        </a>
        <a href="https://www.viralconteudo.com.br/" target="_blank" rel="noopener noreferrer">
          <Image src={viral} alt="Partner 4" width={150} height={150} className="mb-10" />
        </a>
      </div>
    </div>
  );
};

export default Partners;
