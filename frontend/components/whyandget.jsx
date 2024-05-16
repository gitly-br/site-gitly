import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import leftArrow from "../public/arrow-left.svg";
import rightArrow from "../public/arrow-right.svg";
import React, { useState } from "react";
import trofeu from '../assets/trofeu.svg'
import galeria from '../assets/galeria.png'
import fundoRoxo from '../assets/fundoRoxo.png'
import ButtonGreenGet from "./button/buttonGreenGet";

const Whyandget = () => {
  return (
    <div>
      <div className="px-10 py-24 justify-center sm:grid grid-cols-2 gap-10 sm:p-24 text-white bg-black">
        <div>
          <div>
            <h1 className="text-center sm:text-left text-5xl sm:text-3xl font-bold ">
              Why We Do What We Do
            </h1>
            <p className= 'mt-5 sm:text-lg'>
            By creating a visual guide along the way, the designer or developer <br></br>can get input from the other people involved in the website such as <br></br>the customer, their manager, and other members of the team. 
            </p>
          </div>
          <div className="grid grid-cols-2 sm:gap-5 sm:mt-16">
            <div className="">
              <Image src={trofeu} alt="Trofeu"/>
              <h2 className="mt-5 sm:text-2xl font-bold">
                Reason One
              </h2>
              <p className= 'mt-5 sm:text-lg'>
              Web design partially overlaps <br></br>web engineering in the broader<br></br> scope of web development
              </p>
            </div>
            <div className="">
              <Image src={trofeu} alt="Trofeu"/>
              <h2 className="mt-5 sm:text-2xl font-bold">
                Reason Two
              </h2>
              <p className= 'mt-5 sm:text-lg'>
                Paper prototypes should be <br></br>considered when the following <br></br>is true
                </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={galeria} alt="Galeria"/>
        </div>
      </div>

      <div className="relative text-white">
        <Image src={fundoRoxo} alt="Fundo Roxo" className="h-full w-full"/>
        <div className="">
          <div className="absolute inset-0 items-center flex justify-center">
            <h1 className="sm:text-3xl font-bold">
            Get a free quote and start your project today
            </h1>
            <div className="mt-20 ml-5">
              <ButtonGreenGet></ButtonGreenGet>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
};

export default Whyandget;
