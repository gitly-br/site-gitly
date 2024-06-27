import React from "react";
import ButtonGreenGet from "./button/buttonGreenGet";

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
        <video autoPlay loop muted className="w-full h-full">
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1116531192233797349/TEAM/d681/f700/-c0b8-4f2a-b956-829b55b2e520?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c2AuKIZE2djV5N991I6TgdgzDWci6S9osOoCRP8pmYnyg16fMWlhnnYbXLn-eq13umjQsemcdFNfb7YG~5pbqdGOb2RMsSv2FlYCcaH7YbySp9NQ5-21t0Bqt5UXJInri-UNJjrXOp3iigux2A3vxMnI9FRRgiI5-U3vrgNqwjkaJI4kz9h5WB6PSHuY7khvXW~e7XLF3jysZqgawga~3RWlEBRcNHB09Tg0yKBbOfYjYWn56lv2KGp5FX9N5PmutZmrTSRyRINQLhica7DuIOhMkKuDUwtp22Q4Wo8AYh3atPGHk98pipngugAkIFxqnG0ToOZ32ch-a55M7N-k7A__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default talktoone;
