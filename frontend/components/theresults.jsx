import React from 'react';
import Image from "next/image";
import Container1 from '../assets/GrandPlaza.svg'
import Container6 from '../assets/container6.svg'



const Theresults = () => {
  
  return (
    <div className='p-5 sm:p-10 flex flex-col items-center justify-center  text-white'>
      <div className='text-center'>
        <h1 className='mb-4 text-2xl sm:text-3xl font-title'>
        Os Resultados em Números
        </h1>
        <p className='mb-4 font-text'>
        Descubra como nossas soluções transformadoras estão impulsionando o sucesso através de dados concretos e resultados mensuráveis.
        </p>
      </div>

      <div class="sm:grid sm:grid-cols-2 sm:gap-10 mt-10 ">
        <div>
        <Image src={Container1} alt="premiopt" width={400} height={500} className=''/>
        </div>
      <div>
      <div className='mt-10 sm:mt-0'>
          <Image src={Container6} alt="premiopt" width={400} height={500} />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Theresults;
