import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1 from "../assets/project1.svg";
import project2 from "../assets/project2.svg";
import project3 from "../assets/project3.svg";
import project4 from "../assets/project4.svg";

const Projects = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [project1, project2, project3, project4];

  if (isSmallScreen) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1.4,
      slidesToScroll: 1,
      swipeToSlide: true,
      touchMove: true,
      arrows: false,
    };
    return (
      <div className="container mx-auto py-10 px-14 text-center" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
        <h2 className="text-3xl font-bold mb-4">Nossos projetos</h2>
        <p className="text-lg mb-8">Exploramos a fronteira da tecnologia através de nossos projetos, implementando soluções avançadas de inteligência artificial e análise de dados que revolucionam processos e decisões empresariais em diversas indústrias.</p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`Project ${index + 1}`} width={200} height={150} />
            </div>
          ))}
        </Slider>
        <button className="bg-green rounded-br-lg w-48 h-12 text-white py-3 mx-auto mt-8 block">Ver todos os projetos</button>
      </div>
    );
  } else {
    return (
      <div className="bg-[#001D09] text-white container mx-auto py-10 px-14 text-center" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
        <h2 className="text-3xl font-bold mb-4">Nossos projetos</h2>
        <p className="text-lg mb-8">Exploramos a fronteira da tecnologia através de nossos projetos, implementando soluções avançadas de inteligência artificial e análise de dados que revolucionam processos e decisões empresariais em diversas indústrias.</p>
        <div className="flex justify-center items-center space-x-4">
          {images.map((image, index) => (
            <Image key={index} src={image} alt={`Project ${index + 1}`} width={200} height={150} />
          ))}
        </div>
        <button className="bg-green rounded-br-lg w-48 h-12 text-white py-3 mx-auto mt-8 block">Ver todos os projetos</button>
      </div>
    );
  }
};

export default Projects;
