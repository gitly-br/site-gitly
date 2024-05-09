import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import leftArrow from "../public/arrow-left.svg";
import rightArrow from "../public/arrow-right.svg";
import React, { useState } from "react";

// const partners = [
//   { name: "Twich", logo: "/Twitch.svg", description: "Twitch is a live streaming platform for gamers and other lifestyle casters. The platform is owned by Amazon and has more than 15 million daily active users.", link: "https://www.twitch.tv/" },
//   { name: "Facebook", logo: "/Facebook-vector.svg", description: "Facebook is a social media platform that allows users to connect with friends and family, share photos and videos, and send messages.", link: "https://www.facebook.com/" },
//   { name: "Grand-Plaza", logo: "/Grand-Plaza.svg", description: "Grand Plaza is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti in saepe quod quaerat eum laudantium excepturi ut quidem aliquid! Ad, corporis obcaecati illo recusandae necessitatibus facilis tenetur veritatis magni reprehenderit.", link: "https://www.facebook.com/" },
//   { name: "Youtube", logo: "/YouTube.svg", description: "YouTube is a video sharing platform that allows users to watch, like, share, comment, and upload their own videos. The platform is owned by Google and has more than 2 billion monthly active users.", link: "https://www.youtube.com/" },
//   { name: "Suzano", logo: "/Suzano.svg", description: "Suzano is a global company focused on developing sustainable solutions from renewable sources. The company is the world's largest producer of eucalyptus pulp and one of the largest paper producers in Latin America.", link: "https://www.suzano.com.br/"},
// ]; --> Esse array deve ser colocado na page que recebe o import do componente dessa maneira <ComponenteF partners={partners} />


const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
    className={className} 
    style={{ ...style, display: "block", paddingLeft: "60px"  , height: "20%", width: "20%"}} 
    onClick={onClick}>
      <Image src={rightArrow} alt="Next" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
    className={className} 
    style={{ ...style, display: "block" , paddingRight: "100px", height: "20%", width: "20%"}} 
    onClick={onClick}>
      <Image src={leftArrow} alt="Previous" />
    </div>
  );
};

const ComponenteF = ({ partners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="text-white bg-black poppins-font truncate font-thin px-5 lg:px-20 xl:px-64" style={{ background: `linear-gradient(to right, #021b09, black)` }} data-carousel="slide">
      <div className="flex justify-center">
        <h1 className="text-[3em] font-semibold">Our customers</h1>
      </div>
      <Slider
        className="flex p-5 overflow-x-hidden"
        slidesToShow={3}
        slidesToScroll={1}
        infinite={true}
        autoplay={true}
        autoplaySpeed={3000}
        initialSlide={currentSlide}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        arrows={false}
        
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        afterChange={goToSlide}
      >
        {partners.map((partner, index) => (
          <div key={index} className="w-[300px]">
            <div key={index} className={`w-[300px] transition-transform transform mx-5 ${index === currentSlide ? 'selected' : ''}`} onClick={() => goToSlide(index)}>
            <div className={`w-80 h-fit py-4 flex-col justify-items-center gap-3 pr-20 flex justify-center items-center ${index === currentSlide ? 'selected-container' : ''}`}>
                <div className="w-full h-[200px] relative flex justify-center items-center">
                <Image
                    src={partner.logo}
                    alt={`Logo do ${partner.name}`}
                    width={index === currentSlide ? 350 : 200}
                    height={index === currentSlide ? 350 : 200}
                    objectFit="cover"
                />
                </div>
            </div>
            </div>
          </div>
        ))}
      </Slider>
      <div>
        <div className="flex justify-center text-wrap text-white lg:px-40 px-10 text-[1.5em]">
          <p>{partners[currentSlide].description}</p>
        </div>
        <div className="flex justify-center pt-10 text-[1.6em] font-semibold text-[#3AA06B]">
          <a href={partners[currentSlide].link} target="_blank" rel="noopener noreferrer" style={{ color: "#3AA06B", textDecoration: "underline", fontWeight: "bold" }}>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default ComponenteF;
