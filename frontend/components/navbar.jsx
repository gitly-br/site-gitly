import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-80 p-4 fixed w-full z-50 font-text">
      <div className="flex justify-between items-center">
        <div className="flex-1 ml-4">
          <Link href="/">
            <Image src={logo} alt="Logo Gitly" width={70} height={70} />
          </Link>
        </div>
        <div className="md:flex hidden flex-1 justify-around text-white font-light">
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/ourpurpose" className="mr-4">Propósito</Link>
          <Link href="/partners" className="mr-4">Processo</Link>
          <Link href="/media" className="mr-4">Mídia</Link>
          <Link href="/contactus" className="mr-4">Contato</Link>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <Link href="/contactus">
            <button className="btn-verde">
              Inicie seu Projeto
            </button>
          </Link>
        </div>
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center md:hidden bg-black bg-opacity-80">
          <Link href="/"><p className="text-white py-2">Home</p></Link>
          <Link href="/ourpurpose"><p className="text-white py-2">Nosso Propósito</p></Link>
          <Link href="/partners"><p className="text-white py-2">Nosso Processo</p></Link>
          <Link href="/media"><p className="text-white py-2">Mídia</p></Link>
          <Link href="/contactus"><p className="text-white py-2">Contato</p></Link>
          <Link href="/contactus">
            <button className="btn-verde mt-4">
              Inicie seu Projeto
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
