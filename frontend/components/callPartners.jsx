import Image from 'next/image'
import ipadImage from '../assets/ipad.svg'
import ButtonGreenGet from "./button/buttonGreenGet";


function CallPartners() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
            <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                <Image src={ipadImage} alt="iPad" className="w-full h-auto" />
            </div>
            <div className="flex flex-col text-left md:w-1/2 p-16">
                <h2 className="text-3xl font-title mb-4 font-title pl-4 pr-6">
                Fale com Nossos Especialistas e Inicie Seu Projeto Hoje
                </h2>
                <p className="mb-8 pl-4 font-text">
                    Entre em contato agora mesmo e dê o primeiro passo para transformar sua visão em realidade. Nossos especialistas estão prontos para ajudá-lo a desenvolver soluções personalizadas que atendam exatamente às suas necessidades.
                </p>
                <ButtonGreenGet />
            </div>
        </div>
    )
}

export default CallPartners
