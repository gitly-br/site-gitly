

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
                <h1 className="font-title text-6xl md:text-4xl">Vamos falar sobre tomada de<br />decisão impulsionadas por IA?</h1>
                <p className="font-text text-lg mt-5 px-9 md:px-60 mb-10">
                Na Gitly, impulsionamos o futuro das decisões empresariais com soluções de inteligência artificial avançadas. Nossa tecnologia não apenas simplifica complexidades, mas antecipa desafios, garantindo que você esteja sempre à frente. Com a Gitly, cada decisão é uma oportunidade para inovar e liderar no seu mercado.<br></br>
                Descubra o poder da IA na transformação dos seus negócios. Entre em contato hoje e comece a moldar o futuro.
                </p>
                <button className="border border-white rounded-br-lg w-48 h-12 text-white font-text">Inicie seu Projeto</button>
            </div>
        </div>
    );
}

export default Hero;
