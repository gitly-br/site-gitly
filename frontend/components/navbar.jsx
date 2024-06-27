import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.svg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-80 p-4 fixed w-full z-50">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <Link href="/">
            
              <Image src={logo} alt="Logo Gitly" width={50} height={50} />
            
          </Link>


        </div>
        <div className="md:flex hidden flex-1 justify-around text-white font-light">
          <Link href="/">Home</Link>
          <Link href="/ourpurpose">Our purpose</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/media">Media</Link>
          <Link href="/contactus">Contact us</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="bg-green-500 text-white p-2 rounded md:block hidden">
            Start your project
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
