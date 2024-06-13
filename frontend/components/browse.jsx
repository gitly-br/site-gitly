import Image from "next/image";
import Card from '../assets/card.svg';
import Cards from '../assets/cards.svg';
import Cardsresponsivo from '../assets/cardsResponsivo.svg';
import Cards2responsivo from '../assets/cards2Responsivo.svg';
import Cards3responsivo from '../assets/cards3Responsivo.svg';
import Cards4responsivo from '../assets/cards4Responsivo.svg';

import Cards2 from '../assets/cards2.svg';
import Cards3 from '../assets/cards3.svg';
import Cards4 from '../assets/cards4.svg';
import Grupo3 from '../assets/grupo3.svg';
import Grupo2 from '../assets/grupo2.svg';
import Grupo1 from '../assets/grupo1.svg';
import Grupo4 from '../assets/grupo4.svg';
import Grupo5 from '../assets/grupo5.svg';
import Grupo2hover from '../assets/grupo2hover.svg';
import Grupo3hover from '../assets/grupo3hover.svg';
import Grupo4hover from '../assets/grupo4hover.svg';
import Grupo5hover from '../assets/grupo5hover.svg';
import Grupo6hover from '../assets/grupo6hover.svg';
import React, { useState } from "react";
import Ballleft from '../assets/ballleft.svg';
import Ballright from '../assets/ballright.svg';

const Browse = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [clickedButton, setClickedButton] = useState(1); 

    return (
        <div className="relative flex flex-col items-center justify-center p-10 sm:p-16 sm:grid sm:grid-cols-3 sm:gap-20 bg-white text-white" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-no-repeat bg-left">
                    <Image src={Ballleft} alt="ballleft" />
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-right">
                    <Image src={Ballright} alt="ballright" />
                </div>
            </div>

            <div className="sm:col-span-1 mb-20 sm:mb-0 relative z-20">
                <Image src={Card} alt="Imagem" className='w-full h-full' />
            </div>

            <div className="sm:col-span-2 bg-green-200 relative z-20">
                <h1 className='text-3xl mb-4 font-bold'>Browse our set of services</h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper<br /> dalar elementum tempus hac tellus libero accumsan. </p>

                <div className='flex space-x-4 mb-6'>
                    <button
                        onMouseEnter={() => setHoveredButton(1)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() => setClickedButton(1)}
                    >
                        <Image
                            src={hoveredButton === 1 || clickedButton === 1 ? Grupo3hover : Grupo1}
                            alt="Button Image"
                            className='w-32 h-32 sm:w-16 sm:h-16'
                        />
                    </button>
                    <button
                        onMouseEnter={() => setHoveredButton(2)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() => setClickedButton(2)}
                    >
                        <Image
                            src={hoveredButton === 2 || clickedButton === 2 ? Grupo2hover : Grupo2}
                            alt="Button Image"
                            className='w-32 h-32 sm:w-16 sm:h-16'
                        />
                    </button>
                    <button
                        onMouseEnter={() => setHoveredButton(3)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() => setClickedButton(3)}
                    >
                        <Image
                            src={hoveredButton === 3 || clickedButton === 3 ? Grupo4hover : Grupo3}
                            alt="Button Image"
                            className='w-32 h-32 sm:w-16 sm:h-16'
                        />
                    </button>
                    <button
                        onMouseEnter={() => setHoveredButton(4)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() => setClickedButton(4)}
                    >
                        <Image
                            src={hoveredButton === 4 || clickedButton === 4 ? Grupo5hover : Grupo4}
                            alt="Button Image"
                            className='w-32 h-32 sm:w-16 sm:h-16'
                        />
                    </button>
                    <button
                        onMouseEnter={() => setHoveredButton(5)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() => setClickedButton(5)}
                    >
                        <Image
                            src={hoveredButton === 5 || clickedButton === 5 ? Grupo6hover : Grupo5}
                            alt="Button Image"
                            className='w-32 h-32 sm:w-16 sm:h-16'
                        />
                    </button>
                </div>
                <div className="mb-10 sm:mb-0 flex justify-center sm:block">
                    {clickedButton === 1 && <Image src={Cards} alt="Imagem" className="hidden sm:block" />}
                    {clickedButton === 1 && <Image src={Cardsresponsivo} alt="Imagem" className="sm:hidden block" />}
                    {clickedButton === 2 && <Image src={Cards2} alt="Imagem" className="hidden sm:block" />}
                    {clickedButton === 2 && <Image src={Cards2responsivo} alt="Imagem" className="sm:hidden block" />}
                    {clickedButton === 3 && <Image src={Cards3} alt="Imagem" className="hidden sm:block" />}
                    {clickedButton === 3 && <Image src={Cards3responsivo} alt="Imagem" className="sm:hidden block" />}
                    {clickedButton === 4 && <Image src={Cards4} alt="Imagem" className="hidden sm:block" />}
                    {clickedButton === 4 && <Image src={Cards4responsivo} alt="Imagem" className="sm:hidden block" />}
                    {clickedButton === 5 && <Image src={Cards4} alt="Imagem" className="hidden sm:block" />}
                    {clickedButton === 5 && <Image src={Cards4responsivo} alt="Imagem" className="sm:hidden block" />}
                </div>
            </div>
        </div>
    );
};

export default Browse;
