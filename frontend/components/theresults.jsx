import Image from "next/image";
import products from "../assets/products.svg";
import Container1 from '../assets/container1.svg'
import Container2 from '../assets/container2.svg'
import Container3 from '../assets/container3.svg'
import Container4 from '../assets/container4.svg'
import Container5 from '../assets/container5.svg'
import Container6 from '../assets/container6.svg'
import ComponenteF from './componente-F';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../public/arrow-left.svg";
import rightArrow from "../public/arrow-right.svg";
import React, { useState } from "react";


const Theresults = () => {
  return (
    <div className='p-5 sm:p-10 flex flex-col items-center justify-center bg-black text-white'>
      <ComponenteF></ComponenteF>

      <div className='text-center'>
        <h1 className='mb-4 sm:mb-0 text-2xl sm:text-3xl font-bold'>
          The results in numbers
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
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
