import React from "react";
import Image from "next/image";
import iphone from "../assets/iphone.svg";
import original from "../assets/original.svg";

const HeroPartners = () => {
    return (
        <div className = "bg-black flex flex-col text-center justify-center items-center sm:text-center py-40">
            <p className = 'uppercase font-text md:font-semibold text-white px-5 md:px-60'>
            Discover Our Proud Creations
            </p>
            <h1 className = 'font-title text-[6svw] md:text-[3svw] text-white mb-10'>Take a Glimpse into Our<br></br>World</h1>
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-10 items-center w-3/5 sm:w-2/5 pr-3 space-y-5 md:space-y-0">
                <Image src={iphone} alt="Imagem" className = 'w-full object-cover h-full'/>
                <Image src={original} alt="Imagem" className = 'w-full object-cover h-full'/>
            </div>
        </div>
    );
};

export default HeroPartners;