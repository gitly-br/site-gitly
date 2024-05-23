import React from 'react';
import Image from "next/image";
import finep from "../assets/finep.svg";
import zapt from "../assets/zapt.svg";

const Partners = () => {
  return (
    <div className="container mx-auto py-10 px-14 text-center" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
      <p className="text-xl mb-8">We are proud to be partners of</p>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-10 items-center">
        <Image src={zapt} alt="Partner 1" width={80} height={150} className="mb-10" />
        <Image src={finep} alt="Partner 2" width={150} height={150} className="mb-10" />
        <Image src={finep} alt="Partner 3" width={150} height={150} className="mb-10" />
        <Image src={finep} alt="Partner 10" width={150} height={150} className="mb-10" />
      </div>
    </div>
  );
};

export default Partners;
