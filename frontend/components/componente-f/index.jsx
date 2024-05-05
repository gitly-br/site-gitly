import React, { useState, useEffect } from "react";
import { Card } from "./Card";

const Carousel = ({ partners }) => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(Math.floor(partners.length / 2));
  const numPartners = partners.length;
  const currentPartner = partners[currentPartnerIndex];

  const goToPartner = (index) => {
    setCurrentPartnerIndex(index);
  };

  const goToNextPartner = () => {
    if (currentPartnerIndex < numPartners - 1) {
      setCurrentPartnerIndex(currentPartnerIndex + 1);
    }
  };

  const goToPrevPartner = () => {
    if (currentPartnerIndex > 0) {
      setCurrentPartnerIndex(currentPartnerIndex - 1);
    }
  };

  useEffect(() => {
    setCurrentPartnerIndex(Math.floor(partners.length / 2));
  }, [partners]);

  return (
    <div className="text-white bg-black poppins-font truncate font-thin">
      <div className="flex justify-center">
        <h1 className="text-[3em]">Our customers</h1>
      </div>
      <div className="relative">
        <button
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none z-10 ${currentPartnerIndex === 0 && 'pointer-events-none'}`}
          onClick={goToPrevPartner}
          disabled={currentPartnerIndex === 0}
          style={{ marginLeft: '10px' }}
        >
          <img src="/arrow-left.svg" alt="Previous" />
        </button>
        <div className="flex p-5 overflow-x-hidden">
          {partners.map((partner, index) => (
            <div key={index} style={{ minWidth: '300px', transform: `translateX(-${currentPartnerIndex * 300}px)` }}>
              <Card
                partner={partner}
                isSelected={index === currentPartnerIndex}
                onClick={() => goToPartner(index)}
              />
            </div>
          ))}
        </div>
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none z-10 ${currentPartnerIndex === numPartners - 1 && 'pointer-events-none'}`}
          onClick={goToNextPartner}
          disabled={currentPartnerIndex === numPartners - 1}
          style={{ marginRight: '10px' }}
        >
          <img src="/arrow-right.svg" alt="Next" />
        </button>
      </div>
      <div>
        <div className="flex justify-center text-wrap lg:px-40 px-10 text-[1.5em]">
          <p>{currentPartner.description}</p>
        </div>
        <div className="flex justify-center pt-10 text-[1.6em] text-[#3AA06B]">
          <a href={currentPartner.link} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
