import ButtonTransparentGet from "../button/buttonTransparentGet"


function Hero() {
    return (
        <div class = "bg-black text-center justify-center items-center sm:text-center h-screen">

            <h1 class = 'font-title text-[24px] color-white text-white sm:font-title sm:h-[200px] sm:text-[60px]'>Let’s talk about AI-<br></br>Driven decision Making?</h1>

            <p class = 'font-text text-[18px] text-white py-10 sm:text-[20px]' >
            A wonderful serenity has taken possession of my entire soul, like these <br></br>sweet mornings of spring which I enjoy with my whole heart. I am alone,<br></br> and feel the charm of existence in this spot, which was created for the bliss<br></br> of souls like mine.
            </p>
            <ButtonTransparentGet class = 'items-center'/>
        </div>
    )
}

export default Hero
