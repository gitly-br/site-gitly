import React from 'react';
import Image from "next/image";
import premiopt from "../assets/premiopt.svg";

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center px-14 py-28 flex flex-col items-center sm:flex-row sm:justify-between bg-black" style={{ backgroundImage: 'url(/background.svg)' }}>
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mb-6 sm:mb-0">
        <Image src={premiopt} alt="premiopt" className="w-['5rem'] h-auto" />
      </div>
      <div className="text-center sm:text-left sm:w-1/2 sm:pl-8 text-white font-montserrat p-28 ml-14">  
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">A dedicated team to grow your company</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button className="border border-white rounded-br-lg w-48 h-12">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
