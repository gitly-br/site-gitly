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
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1116531192233797349/TEAM/d681/f700/-c0b8-4f2a-b956-829b55b2e520?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llxbZbNiVx05pMFFrEhioNYlhx2j4BEjwqA75zCQrbanvhfaJyNkbKP0hhJzc9ryP68urE74UzX3Rp-RNnKw4gmvTWhZYyztJOsPtm9P0HjgIMf2-rJPNsF7Vh8TIIPX4cMIM5aaeNW2GE8sARzp9~7aS0OxJCXo7SsQgIhGFMq4l1Ao~ioLXvOXUYtdMLGGMcDkRHQxPyjR2wBvNi7d4W8jbVl~S5BB5m4d7IYBG3YfAZJxM3WKr-kdTCgcUyHtsvVMhlXCG1vh84Oztyg8-Qb3vergUKSzN6doK-qQuT-x9gl2SbSuPM8o8dPWY1qBqP85Ob1TJg-3jZyzjFwygA__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default talktoone;
