import ButtonTransparentGet from "../button/buttonTransparentGet"
import Image from "next/image";
import primaryButton from '../../assets/mouse.svg'; 



function Hero() {
    return (
        <div class = "bg-black flex flex-col text-center justify-center items-center sm:text-center py-20">
            <h1 class = 'mt-5 font-title text-[6svw] md:text-[4svw]  text-white '>Let’s talk about AI-<br></br>Driven decision Making?</h1>

            <p class = 'font-text text-lg mt-5 text-white px-9 md:px-60 mb-10' >
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
            </p>
            <ButtonTransparentGet class = 'items-center'/>
            <Image src={primaryButton} alt="Mouse" className = 'items-center md:mt-28 hidden md:block'/>

        </div>
    )
}

export default Hero
