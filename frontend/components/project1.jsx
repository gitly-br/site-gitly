import Image from 'next/image'
import processImage from '../assets/process.svg'

function Project1() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-16" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
            <div className="flex flex-col md:w-1/2 pr-16">
                <p className="text-sm text-gray-500 uppercase mb-2 font-title">Nosso Processo</p>
                <h2 className="text-3xl font-semibold mb-4 font-title">
                    Desbloqueando Excelência: Navegue pelo Nosso Método
                </h2>
                <p className="mb-4 font-text">
                Ao desenvolver nossas soluções, criamos um guia visual que permite a interação constante com nossos clientes e suas equipes. Este processo colaborativo assegura que cada passo esteja alinhado às expectativas do cliente, desde a concepção até a realização final do projeto. O guia visual oferece uma prévia clara do resultado final, garantindo que todos os envolvidos compartilhem a mesma visão e contribuam efetivamente para o sucesso do projeto.                    
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image src={processImage} alt="Process" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default Project1
