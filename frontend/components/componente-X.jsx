import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";

const ComponenteX = () => {
    return (
        <div className="px-4 md:px-24 lg:px-48 py-10 md:py-20 lg:py-40" style={{ background: `linear-gradient(to right, #021b09, black)` }}>
            <div className="text-white flex flex-col">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">What's Happening at Gitly</h1>
                <p className="text-lg md:text-xl lg:text-2xl text-center">Check out our last events attended, prizes conferences and more:</p>
            </div>
            <div>
                <Slider
                    className="flex p-5 overflow-x-hidden"
                    slidesToShow={3}
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
                    <div>
                        <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                            <Image src="./cx1.svg" alt="First" width={300} height={300} />
                            <div style={{ maxWidth: "300px" }} className="bg-[#001D09] py-14 text-center flex justify-center rounded-b-2xl">
                                <h1 className="text-white text-center">Prêmio Excelência na Inovação</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                            <Image src="/cx2.svg" alt="Second" width={300} height={300} />
                            <div style={{ maxWidth: "300px" }} className="bg-[#001D09] py-10 text-center flex justify-center rounded-b-2xl">
                                <h1 className="text-white text-center">Futuro Expo 2023 | Dictomia e IA: O que IA não pode fazer por você</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                            <Image src="/cx3.svg" alt="Third" width={300} height={300} />
                            <div style={{ maxWidth: "300px" }} className="bg-[#001D09] py-14 text-center flex justify-center rounded-b-2xl">
                                <h1 className="text-white text-center">IPT Open Experience| Marketing for Startups</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                            <Image src="/cx4.svg" alt="Fourth" width={300} height={300} />
                            <div style={{ maxWidth: "300px" }} className="bg-[#001D09] py-10 text-center flex justify-center rounded-b-2xl">
                                <h1 className="text-white text-center">Projeto Além | Ambev & BioSmart Nanotechnology LTDA</h1>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ComponenteX;
