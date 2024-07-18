import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import leftArrow from "../public/arrow-left.svg";
import rightArrow from "../public/arrow-right.svg";
import React, { useState } from "react";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{ ...style, display: "block", paddingLeft: "60px", height: "20%", width: "20%" }} 
      onClick={onClick}
    >
      <Image src={rightArrow} alt="Next" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{ ...style, display: "block", paddingRight: "100px", height: "20%", width: "20%" }} 
      onClick={onClick}
    >
      <Image src={leftArrow} alt="Previous" />
    </div>
  );
};

const OurCustomers = ({ partners }) => {
  const [currentSlide, setCurrentSlide] = useState(Math.floor(partners.length / 2)); // Slide do meio é o inicial

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleLogoClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="text-white bg-black poppins-font truncate font-thin px-5 lg:px-20 xl:px-64" style={{ background: `linear-gradient(to right, #021b09, black)` }} data-carousel="slide">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold mb-2 mt-10 font-title text-3xl sm:text-3xl">Nossos Clientes</h1>
        <div className="w-full flex justify-center items-center">
          <Slider
            className="flex overflow-x-hidden"
            slidesToShow={5}
            slidesToScroll={1}
            infinite={true}
            autoplay={true}
            autoplaySpeed={3000}
            initialSlide={currentSlide}
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
            centerMode={true}
            arrows={false}
            centerPadding="0px"
            responsive={[
              {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  centerPadding: "0px",
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  centerPadding: "0px",
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  centerPadding: "0px",
                },
              },
            ]}
            afterChange={goToSlide}
          >
            {partners.map((partner, index) => (
              <div key={index} className="w-full px-2">
                <div 
                  key={index} 
                  className={`transition-transform transform ${index === currentSlide ? 'selected' : ''}`} 
                  onClick={() => handleLogoClick(partner.link)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={`flex-col justify-items-center gap-3 flex justify-center items-center ${index === currentSlide ? 'selected-container' : ''}`}>
                    <div className="relative flex justify-center items-center" style={{ width: 150, height: 150 }}>
                      <Image
                        src={partner.logo}
                        alt={`Logo do ${partner.name}`}
                        width={150}
                        height={150}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div>
        <div className="flex justify-center text-wrap text-white lg:px-40 px-10">
          <p className="font-text text-center">{partners[currentSlide].description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
