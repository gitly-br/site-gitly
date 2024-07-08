import React from "react";
import ButtonGreenGet from "./button/buttonGreenGet";

const CallHome = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 sm:p-16 sm:grid sm:grid-cols-3 sm:gap-20 bg-[#121C16] text-white" style={{ backgroundImage: 'url(/backgroundMidia.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="mb-20 sm:mb-0 sm:col-span-1 flex flex-col items-center sm:items-start">
        <h1 className="text-3xl mb-10 font-bold text-center sm:text-left font-title">
          Fale com um de nossos especialistas e inicie seu projeto hoje!
        </h1>
          <button className="border border-white rounded-br-lg px-4 py-2 font-text bg-gray-800 text-white hover:bg-gray-700">
              Get a free quote
          </button>      
        </div>

      <div className="sm:col-span-2 w-full flex justify-center sm:block">
        <video autoPlay loop muted className="w-full h-full">
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1116531192233797349/TEAM/d681/f700/-c0b8-4f2a-b956-829b55b2e520?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c2AuKIZE2djV5N991I6TgdgzDWci6S9osOoCRP8pmYnyg16fMWlhnnYbXLn-eq13umjQsemcdFNfb7YG~5pbqdGOb2RMsSv2FlYCcaH7YbySp9NQ5-21t0Bqt5UXJInri-UNJjrXOp3iigux2A3vxMnI9FRRgiI5-U3vrgNqwjkaJI4kz9h5WB6PSHuY7khvXW~e7XLF3jysZqgawga~3RWlEBRcNHB09Tg0yKBbOfYjYWn56lv2KGp5FX9N5PmutZmrTSRyRINQLhica7DuIOhMkKuDUwtp22Q4Wo8AYh3atPGHk98pipngugAkIFxqnG0ToOZ32ch-a55M7N-k7A__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CallHome;
