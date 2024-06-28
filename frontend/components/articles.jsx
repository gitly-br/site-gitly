// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import leftArrow from "../public/arrow-left.svg";
// import rightArrow from "../public/arrow-right.svg";

// const Articles = () => {
//     return (
//         <div class = "flex flex-col justify-center items-center sm:text-center py-20 bg-black">
//             <h1 className="text-center font-bold text-white text-3xl mb-4">
//             Artigos
//             </h1>
//             <p className="text-center text-white text-lg mb-8">
//             Descubra como a Gitly é percebida e discutida em diversos veículos de comunicação com nossos artigos destacados na mídia. Estes textos exploram o impacto das nossas inovações em inteligência artificial e ciência de dados e destacam como estamos moldando o futuro de várias indústrias.
//             </p>
//         </div>

//     );
// };

// export default Articles;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";

const Articles = () => {
    return (
        <div className="px-4 md:px-24 lg:px-48 py-10 md:py-20 lg:py-40 bg-black">
            <div className="text-white flex flex-col">
                <h1 className="text-3xl font-bold text-center">
                    Artigos
                </h1>
                <p className="text-lg md:text-xl text-center py-3 px-20">
                    Descubra como a Gitly é percebida e discutida em diversos veículos de comunicação com nossos artigos destacados na mídia. Estes textos exploram o impacto das nossas inovações em inteligência artificial e ciência de dados e destacam como estamos moldando o futuro de várias indústrias.
                </p>
            </div>
            <div>
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
                            <Image src="/article1.png" alt="First" width={300} height={300} />
                            <div style={{ maxWidth: "300px" }} className="bg-[#001D09] py-14 px-2 text-center flex justify-center rounded-b-2xl">
                                <h1 className="text-white">At Grand Plaza Mall, GPS take clients to stores with Gitly</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                            <Image src="/article2.png" alt="Second" width={300} height={300} />
                            <div style={{ maxWidth: "300px" }} className="bg-[#001D09] py-10 px-3 text-center flex justify-center rounded-b-2xl">
                                <h1 className="text-white text-center">Innovation Leaders platform of the Royal Academy of Engineering in England</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center font-semibold text-[1.3em] text-wrap">
                            <Image src="/article3.png" alt="Third" width={300} height={300} />
                            <div style={{ maxWidth: "300px" }} className="bg-[#001D09] py-10 px-3 text-center flex justify-center rounded-b-2xl">
                                <h1 className="text-white text-center">Greater ABC Industrial Development Committee and the selection of startups</h1>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
                {/* <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button> */}
            </div>
        </div>
    );
};

export default Articles;
