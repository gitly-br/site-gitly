import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Pessoa from '../assets/pessoa.png';

export function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Remove as setas de navegação
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: false // Remove as setas de navegação
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true,
                    arrows: false // Remove as setas de navegação
                }
            }
        ]
    };

    return (
        <div className='py-12 px-8 bg-white' style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
            <div>
                <h1 className='text-4xl text-white font-semibold'>What our clients say</h1>
                <p className='mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper<br /> dalar elementum tempus hac tellus libero accumsan.</p>
            </div>
            <Slider {...settings} className='mt-8'>
                <div className="px-4">
                    <div className="bg-[#001D09] rounded-lg flex flex-row items-center p-4">
                        <div className="w-3/5 sm:w-2/5 pr-3">
                            <Image src={Pessoa} alt="Imagem" className='w-full object-cover h-full' />
                        </div>
                        <div className="w-4/5 sm:w-4/5 p-2">
                            <p className='text-sm sm:text-base md:text-lg text-white font-Montserrat'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p className='text-[#146237] text-sm sm:text-base md:text-lg mt-5'>
                                <b>Emily Blunt</b>
                            </p>
                            <p className='mt-1 text-sm sm:text-base md:text-lg text-white'>
                                CEO at <u>Krasinski</u>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="bg-[#001D09] rounded-lg flex flex-row items-center p-4">
                        <div className="w-3/5 sm:w-2/5 pr-3">
                            <Image src={Pessoa} alt="Imagem" className='w-full object-cover h-full' />
                        </div>
                        <div className="w-4/5 sm:w-4/5 p-2">
                            <p className='text-sm sm:text-base md:text-lg text-white font-Montserrat'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p className='text-[#146237] text-sm sm:text-base md:text-lg mt-5'>
                                <b>Emily Blunt</b>
                            </p>
                            <p className='mt-1 text-sm sm:text-base md:text-lg text-white'>
                                CEO at <u>Krasinski</u>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="bg-[#001D09] rounded-lg flex flex-row items-center p-4">
                        <div className="w-3/5 sm:w-2/5 pr-3">
                            <Image src={Pessoa} alt="Imagem" className='w-full object-cover h-full' />
                        </div>
                        <div className="w-4/5 sm:w-4/5 p-2">
                            <p className='text-sm sm:text-base md:text-lg text-white font-Montserrat'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p className='text-[#146237] text-sm sm:text-base md:text-lg mt-5'>
                                <b>Emily Blunt</b>
                            </p>
                            <p className='mt-1 text-sm sm:text-base md:text-lg text-white'>
                                CEO at <u>Krasinski</u>
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
            <style jsx global>{`
                .slick-dots {
                    bottom: -30px !important; /* Ajuste a posição vertical dos dots, se necessário */
                    left: 0; /* Alinhamento à esquerda */
                    text-align: left; /* Alinhamento à esquerda */
                    width: auto; /* Ajusta a largura para caber os dots à esquerda */
                }

                .slick-dots li {
                    margin: 0; /* Remove margem para alinhar os dots corretamente */
                }

                .slick-dots li button:before {
                    color: white !important; /* Cor dos dots */
                    opacity: 0.75 !important; /* Opacidade dos dots */
                }

                .slick-dots li.slick-active button:before {
                    color: white !important; /* Cor dos dots ativos */
                    opacity: 1 !important; /* Opacidade dos dots ativos */
                }
            `}</style>
        </div>
    );
}

export default Testimonial;
