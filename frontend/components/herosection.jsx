import React from 'react';
import Image from "next/image";
import premiopt from "../assets/premiopt.svg";

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center p-8 flex flex-col items-center justify-center sm:flex-row sm:justify-between bg-black" style={{ backgroundImage: 'url(/background.svg)', color: 'white' }}>
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
        <Image src={premiopt} alt="premiopt" className="mb-5 md:mb-0" style={{ width: '80%', height: 'auto' }} />
      </div>
      <div className="text-center sm:text-left sm:w-1/2 sm:pl-8">
        <h2 className="text-5xl font-bold mb-6">A dedicated team to grow your company</h2>
        <p className="text-lg text-gray-300 mb-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div className="relative" style={{ width: '12.75rem', height: '3.375rem' }}>
          <button className="relative text-white py-2 px-4 bg-green-600 w-full h-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)' }}>
            Learn More
          </button>
          <div className="absolute inset-0 border border-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)', pointerEvents: 'none' }}></div>
          <button className='border rounded-br-lg'style={{ width: '12.75rem', height: '3.375rem' }}>Teste aqui</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
