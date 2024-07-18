import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";

const Midia = () => {
    return (
        <div className="px-4 md:px-24 lg:px-48 py-10 md:py-20 lg:py-40" style={{ background: `linear-gradient(to right, #021b09, black)` }}>
            <div className="text-white flex flex-col">
                <h1 className="text-3xl text-center font-title mb-5">Novidades na Gitly</h1>
                <p className="text-center font-text mb-5">Descubra as últimas atualizações da Gitly, incluindo eventos, premiações e conferências. Estamos sempre avançando e inovando!</p>
            </div>
            <div>
                <Slider
                    className="flex overflow-hidden"
                    slidesToShow={4}
                    slidesToScroll={1}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={3000}
                    arrows={false}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                >
                    <div className="p-4">
                        <a href="URL_PARCEIRO_1" target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                                <Image src="./cx1.svg" alt="First" width={300} height={300} />
                                <div className="bg-[#001D09] py-4 px-2 text-center flex justify-center rounded-b-2xl">
                                    <h1 className="text-white text-left font-text">Prêmio Excelência na Inovação</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="p-4">
                        <a href="URL_PARCEIRO_2" target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                                <Image src="/cx2.svg" alt="Second" width={300} height={300} />
                                <div className="bg-[#001D09] py-4 px-2 text-center flex justify-center rounded-b-2xl">
                                    <h1 className="text-white text-left font-text">Futuro Expo 2023 | Dictomia e IA: O que IA não pode fazer por você</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="p-4">
                        <a href="URL_PARCEIRO_3" target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                                <Image src="/cx3.svg" alt="Third" width={300} height={300} />
                                <div className="bg-[#001D09] py-4 px-2 text-center flex justify-center rounded-b-2xl">
                                    <h1 className="text-white text-left font-text">IPT Open Experience | Marketing for Startups</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="p-4">
                        <a href="URL_PARCEIRO_4" target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                                <Image src="/cx4.svg" alt="Fourth" width={300} height={300} />
                                <div className="bg-[#001D09] py-4 px-2 text-center flex justify-center rounded-b-2xl">
                                    <h1 className="text-white text-left font-text">Projeto Além | Ambev & BioSmart Nanotechnology LTDA</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                </Slider>
            </div>
            <div className="flex justify-center items-center h-full mt-4">
                <button className="border border-white rounded-br-lg px-4 py-2 font-text bg-green-500 text-white hover:bg-gray-700">
                    Ver mais
                </button>
            </div>

            
        </div>
    );
};

export default Midia;
