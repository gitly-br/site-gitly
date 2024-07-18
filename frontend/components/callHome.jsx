import React from "react";
import Image from "next/image";
import Backgroundcta from '../public/backgroundcta.png';
import Link from 'next/link';

const CallHome = () => {
  return (
    <div className="relative w-full h-[605px] sm:h-[600px] overflow-hidden">
      <Image
        src={Backgroundcta}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center p-10 sm:p-16 sm:grid sm:grid-cols-3 sm:gap-20 bg-opacity-50 text-white">
        <div className="mb-20 sm:mb-0 sm:col-span-1 flex flex-col items-center sm:items-start">
          <h1 className="text-3xl mb-10 font-bold text-center sm:text-left font-title">
            Fale com um de nossos especialistas e inicie seu projeto hoje!
          </h1>
          <Link href="/contactus">
            <button className="btn-verde">
              Fale Conosco
            </button>
          </Link>
        </div>

        <div className="sm:col-span-2 w-full flex justify-center sm:block">
          <video autoPlay loop muted className="w-full h-full">
            <source src="/animacao.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .relative {
            height: 600px; /* Aumenta a altura em telas pequenas */
          }
        }
      `}</style>
    </div>
  );
};

export default CallHome;
