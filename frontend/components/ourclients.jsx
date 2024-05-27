import Image from "next/image";
import Pessoa from '../assets/pessoa.png'
import React from "react";
import Slider from "react-slick";

export function Ourclients() {

    return (
        <div class = 'py-12 px-8 bg-black'>
            <div>
                <h1 class = 'text-4xl text-white'>What our clients say</h1>
                <p class = 'mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper<br></br> dalar elementum tempus hac tellus libero accumsan. </p>
            </div>
                <div class = 'grid gap-4 grid-cols-1 md:grid-cols-3' >
                    <div className="bg-[#001D09] rounded-lg flex flex-row items-center mt-8">
                        <div className="w-3/5 sm:w-2/5 pr-3">
                            <Image src={Pessoa} alt="Imagem" className = 'w-full object-cover h-full'/>
                        </div>
                        <div className="w-4/5 sm:w-4/5 p-2">
                            <p className = 'text-[3svw] sm:text-[2svw] md:text-[1svw] text-white font-Montserrat'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p class = 'text-[#146237] text-[3svw] sm:text-[2svw] md:text-[1svw] mt-5'>
                                <b>Emily Blunt</b>
                            </p>
                            <p className = 'mt-1 text-[3svw] sm:text-[2svw] md:text-[1svw] text-white'>
                                CEO at <u>Krasinski</u>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#001D09] rounded-lg flex flex-row items-center mt-8">
                        <div className="w-3/5 sm:w-2/5 pr-3">
                            <Image src={Pessoa} alt="Imagem" className = 'w-full object-cover h-full'/>
                        </div>
                        <div className="w-4/5 sm:w-4/5 p-2">
                            <p className = 'text-[3svw] sm:text-[2svw] md:text-[1svw] text-white font-Montserrat'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p class = 'text-[#146237] text-[3svw] sm:text-[2svw] md:text-[1svw] mt-5'>
                                <b>Emily Blunt</b>
                            </p>
                            <p className = 'mt-1 text-[3svw] sm:text-[2svw] md:text-[1svw] text-white'>
                                CEO at <u>Krasinski</u>
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#001D09] rounded-lg flex flex-row items-center mt-8">
                        <div className="w-3/5 sm:w-2/5 pr-3">
                            <Image src={Pessoa} alt="Imagem" className = 'w-full object-cover h-full'/>
                        </div>
                        <div className="w-4/5 sm:w-4/5 p-2">
                            <p className = 'text-[3svw] sm:text-[2svw] md:text-[1svw] text-white font-Montserrat'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p class = 'text-[#146237] text-[3svw] sm:text-[2svw] md:text-[1svw] mt-5'>
                                <b>Emily Blunt</b>
                            </p>
                            <p className = 'mt-1 text-[3svw] sm:text-[2svw] md:text-[1svw] text-white'>
                                CEO at <u>Krasinski</u>
                            </p>
                        </div>
                    </div>
                    </div>
        </div>
    )
}

export default Ourclients
