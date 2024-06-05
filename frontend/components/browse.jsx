import Image from "next/image";
import Card from '../assets/card.svg'
import Cards from '../assets/cards.svg'
import Cardsresponsivo from '../assets/cardsResponsivo.svg'
import Grupo3 from '../assets/grupo3.svg'
import Grupo2 from '../assets/grupo2.svg'
import Grupo4 from '../assets/grupo4.svg'
import Grupo5 from '../assets/grupo5.svg'
import Grupo3hover from '../assets/grupo3hover.svg'
import React, { useState } from "react";



const Browse = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div class="flex flex-col items-center justify-center p-10 sm:p-16 sm:grid sm:grid-cols-3 sm:gap-20 bg-black text-white">
      <div className="sm:col-span-1 mb-20 sm:mb-0">
        <Image src={Card} alt="Imagem" className = 'w-full h-full'/>
      </div>

      <div className="sm:col-span-2 bg-green-200">
        <h1 className='text-3xl mb-4 font-bold'>Browse our set of services</h1>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper<br></br> dalar elementum tempus hac tellus libero accumsan. </p>

        <div className='flex space-x-4 mb-6'>
            <button
                onMouseEnter={() => setHoveredButton(1)}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <Image 
                src={hoveredButton === 1 ? Grupo3hover : Grupo4} 
                alt="Button Image" 
                className='w-32 h-32 sm:w-16 sm:h-16' 
                />
            </button>
            <button
                onMouseEnter={() => setHoveredButton(2)}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <Image 
                src={hoveredButton === 2 ? Grupo3hover : Grupo2} 
                alt="Button Image" 
                className='w-32 h-32 sm:w-16 sm:h-16' 
                />
            </button>
            <button
                onMouseEnter={() => setHoveredButton(3)}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <Image 
                src={hoveredButton === 3 ? Grupo3hover : Grupo3} 
                alt="Button Image" 
                className='w-32 h-32 sm:w-16 sm:h-16' 
                />
            </button>
            <button
                onMouseEnter={() => setHoveredButton(4)}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <Image 
                src={hoveredButton === 4 ? Grupo3hover : Grupo4} 
                alt="Button Image" 
                className='w-32 h-32 sm:w-16 sm:h-16' 
                />
            </button>
            <button
                onMouseEnter={() => setHoveredButton(5)}
                onMouseLeave={() => setHoveredButton(null)}
            >
                <Image 
                src={hoveredButton === 5 ? Grupo3hover : Grupo5} 
                alt="Button Image" 
                className='w-32 h-32 sm:w-16 sm:h-16' 
                />
            </button>
        </div>
        <div className="mb-10 sm:mb-0 flex justify-center sm:block">
            <Image src={Cards} alt="Imagem" className="hidden sm:block" />
            <Image src={Cardsresponsivo} alt="Imagem" className="sm:hidden block" />
        </div>



      </div>
    </div>
  );
};

export default Browse;
