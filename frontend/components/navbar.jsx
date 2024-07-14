import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.svg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-80 p-4 fixed w-full z-50 font-text">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <Link href="/">
            
              <Image src={logo} alt="Logo Gitly" width={50} height={50} />
            
          </Link>


        </div>
        <div className="md:flex hidden flex-1 justify-around text-white font-light">
          <Link href="/">Home</Link>
          <Link href="/ourpurpose">Nosso Propósito</Link>
          <Link href="/partners">Nosso Processo</Link>
          <Link href="/media">Mídia</Link>
          <Link href="/contactus">Contato</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="bg-green rounded-br-lg w-48 h-12 text-white">
            Inicie seu Projeto
          </button>
        </div>
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center md:hidden bg-black bg-opacity-80">
          <Link href="/"><p className="text-white py-2">Home</p></Link>
          <Link href="/ourpurpose"><p className="text-white py-2">Our purpose</p></Link>
          <Link href="/partners"><p className="text-white py-2">Partners</p></Link>
          <Link href="/media"><p className="text-white py-2">Media</p></Link>
          <Link href="/contactus"><p className="text-white py-2">Contact us</p></Link>
            <button className="bg-green-500 text-white p-2 rounded my-2">
              Start your project
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
