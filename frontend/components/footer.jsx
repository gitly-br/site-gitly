import { useState } from 'react';
import facebook from "../public/Facebook.svg";
import instagram from "../public/Instagram.svg";
import linkedin from "../public/linkedin.svg";
import Image from "next/image";
import Link from 'next/link';
import logo from "../assets/logo.svg";

export default function Footer() {
  const [sidebar, setSidebar] = useState(false);

  const handleLinkClick = () => {
    setSidebar(false);
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-[#001D09] text-white px-14 mb-0 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mb-4 pt-10">
        <div className="w-full md:w-1/5 flex flex-col items-left mb-8">
          <Link href="/">
              <Image src={logo} alt="Logo Gitly" width={50} height={50} />
          </Link>
          <p className="text-sm font-text">Vamos Falar sobre Tomada de Decisão Impulsionada por IA?</p>
        </div>

        <div className="w-full md:w-3/5 mb-4 md:text-center">
          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 items-center">
            <a href="/" onClick={handleLinkClick} className="mx-2 mb-2 md:mb-0 font-text">Home</a>
            <a href="/ourPurpose" onClick={handleLinkClick} className="mx-2 mb-2 md:mb-0 font-text">Nosso Propósito</a>
            <a href="/Partners" onClick={handleLinkClick} className="mx-2 mb-2 md:mb-0 font-text">Nosso Processo</a>
            <a href="/Media" onClick={handleLinkClick} className="mx-2 mb-2 md:mb-0 font-text">Mídia</a>
            <a href="/Contact" onClick={handleLinkClick} className="mx-2 mb-2 md:mb-0 font-text">Contato</a>
          </div>
        </div>

        <div className="w-full md:w-1/5 flex md:justify-end mb-4 justify-center">
          <button className="mr-4" onClick={() => openLink("https://www.instagram.com/gitly_company/")}>
            <Image src={instagram} alt="Instagram" width={30} height={30} />
          </button>
          <button className="mr-4" onClick={() => openLink("https://www.linkedin.com/company/gitly/")}>
            <Image src={linkedin} alt="Linkedin" width={30} height={30} />
          </button>
          <button className="mr-4" onClick={() => openLink("https://www.facebook.com/profile.php?id=100064740228253")}>
            <Image src={facebook} alt="Facebook" width={30} height={30} />
          </button>
        </div>
      </div>

      <hr className="w-full border-t border-gray-600 mb-4" />

      <div className="text-center">
        <p className="text-xs mb-4 font-text">Copyright © 2023 Gitly | Direitos Reservados</p>
        <p className="text-xs font-text">Gitly Soluções em Tecnologia da Informação Ltda.</p>
        <p className="text-xs pb-8 font-text">CNPJ: 17.425.516/0001-80</p>
      </div>
    </footer>
  );
};
