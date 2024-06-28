import videoHero from '../assets/videoHero.svg'

function HeroMedia() {
    return (
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${videoHero.src})` }}>
            <div className="p-8 text-center w-11/12 sm:w-3/4 md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 font-title">
                Uma Equipe Dedicada ao Crescimento da Sua Empresa
                </h1>
                <p className="text-base md:text-lg text-white mb-4 font-text">
                Na Gitly, combinamos expertise técnica e visão estratégica para impulsionar o crescimento da sua empresa. Nossa equipe de especialistas em dados e IA está pronta para desenvolver soluções personalizadas que superam suas expectativas e garantem resultados excepcionais.
                </p>
                <p className="text-base md:text-lg text-white mb-8 font-text">
                • Expertise especializada e comprovada • Soluções sob medida para seus desafios • Compromisso absoluto com a excelência • Vamos transformar seus desafios em oportunidades juntos.                    </p>
                <button className="border border-white rounded-br-lg w-48 h-12 text-white font-text">Saiba mais</button>
            </div>
        </div>
    )
}

export default HeroMedia
