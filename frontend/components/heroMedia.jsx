import videoHero from '../assets/videoHero.svg'
import Link from 'next/link'

function HeroMedia() {
    return (
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${videoHero.src})` }}>
            <div className="p-8 text-center w-11/12 sm:w-3/4 md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 font-title">
                Uma Equipe Dedicada ao Crescimento da Sua Empresa
                </h1>
                <p className="text-base md:text-lg text-white mb-4 font-text">
                Na Gitly, combinamos expertise técnica e visão estratégica para impulsionar o crescimento da sua empresa. Nossa equipe de especialistas em dados e IA está pronta para desenvolver soluções personalizadas que superam suas expectativas e garantem resultados excepcionais.​
                </p>
                <button className="btn-transparente">
                    <Link href="/partners">Saiba Mais</Link>
                </button>
            </div>
        </div>
    )
}

export default HeroMedia
