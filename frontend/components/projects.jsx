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
      dots: false, // Removido para não mostrar os pontos de navegação
      infinite: true,
      speed: 500,
      slidesToShow: 1.4,
      slidesToScroll: 1,
      swipeToSlide: true, // Adicionado para permitir a troca de slide deslizando o dedo
      touchMove: true, // Adicionado para habilitar o movimento de toque
      arrows: false, // Removido para ocultar as setas de navegação
    };
    return (
      <div className="bg-[#001D09] text-white container mx-auto py-10 px-14 justify-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`Project ${index + 1}`} width={200} height={150} />
            </div>
          ))}
        </Slider>
        <button className="text-[16px] bg-[#11562F] py-3 mx-auto mt-8 block">Ver todos os projetos</button>
      </div>
    );
  }
  return (
    <div className="bg-[#001D09] text-white container mx-auto py-10 px-14 justify-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p className="text-lg mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
      <div className="flex justify-center items-center space-x-4">
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Project ${index + 1}`} width={200} height={150} />
        ))}
      </div>
      <button className="text-[16px] bg-[#11562F] py-3 mx-auto mt-8 block">Ver todos os projetos</button>
    </div>
  );
};
export default Projects;