import React from 'react';
import Image from "next/image";
import prize1 from "../assets/prize1.svg";
import prize2 from "../assets/prize2.svg";
import prize3 from "../assets/prize3.svg";
import prize4 from "../assets/prize4.svg";

const Prizes = () => {
  const prizes = [
    {
      id: 1,
      image: prize1,
      alt: "Prize 1",
      link: "https://www.linkedin.com/company/gitly/posts/"
    },
    {
      id: 2,
      image: prize2,
      alt: "Prize 2",
      link: "https://www.linkedin.com/company/gitly/posts/"
    },
    {
      id: 3,
      image: prize3,
      alt: "Prize 3",
      link: "https://www.linkedin.com/company/gitly/posts/"
    },
    {
      id: 4,
      image: prize4,
      alt: "Prize 4",
      link: "https://www.linkedin.com/company/gitly/posts/"
    },
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-black mx-auto flex flex-col py-10 px-14 md:flex-row items-top justify-between w-full">
      <div className="w-full md:w-1/4 flex flex-col md:items-left mb-8 text-white">
        <h2 className="text-3xl font-bold mb-4 font-title">Prêmios dos quais nos orgulhamos</h2>
        <p className="text-lg mb-8 font-text">Confira os prêmios que reconhecem a liderança e inovação da Gitly em inteligência artificial e ciência de dados. Estes prêmios destacam nosso impacto e excelência no setor tecnológico.</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 items-center w-full md:w-3/4">
        {prizes.map((prize) => (
          <div key={prize.id} className="mb-4">
            <a href={prize.link} target="_blank" rel="noopener noreferrer">
              <Image src={prize.image} alt={prize.alt} width={260} height={260} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;
