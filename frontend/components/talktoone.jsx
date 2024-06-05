import Image from "next/image";
import Video from '../assets/video.svg';
import React from "react";
import ButtonGreenGet from "./button/buttonGreenGet";
import Background from '../assets/background.svg';

const talktoone = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 sm:p-16 sm:grid sm:grid-cols-3 sm:gap-20 bg-[#121C16] text-white">
      <div className="mb-20 sm:mb-0 sm:col-span-1 flex flex-col items-center sm:items-start">
        <h1 className="text-3xl mb-10 font-bold text-center sm:text-left">
          Talk to one of our specialists and start your project today
        </h1>
        <ButtonGreenGet />
      </div>

      <div className="sm:col-span-2 w-full flex justify-center sm:block">
        <Image src={Video} alt="Video" className="w-full h-full" />
      </div>
    </div>
  );
};

export default talktoone;
