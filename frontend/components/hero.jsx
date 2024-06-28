

function Hero() {
    return (
        <div className="relative flex flex-col justify-center items-center text-white py-24 h-screen">
            <iframe
                src="https://my.spline.design/interactivegridexperiment-e15763ad41110005c12c2616f064ee04/"
                frameBorder="0"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            ></iframe>
            <div className="absolute inset-0 bg-black opacity-60"></div> {/* Camada de sobreposição preta */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <h1 className="font-title text-6xl md:text-4xl">Let’s talk about AI-<br />Driven decision Making?</h1>
                <p className="font-text text-lg mt-5 px-9 md:px-60 mb-10">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                </p>
                <button className="border border-white rounded-br-lg w-48 h-12 text-white">Get Started</button>
            </div>
        </div>
    );
}

export default Hero;
