import Image from 'next/image'
import computador from '../assets/computador.svg'

function CallContact() {
    return (
        <div className="relative flex items-center justify-between h-screen bg-gradient-to-r from-[#021b09] to-black">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between w-full px-8 md:px-16 lg:px-32">
                <div className="w-full md:w-1/2 flex flex-col items-start text-white space-y-6">
                    <h1 className="text-3xl md:text-4xl font-semibold">Fale com um de nossos especialistas e inicie seu projeto hoje!</h1>
                    <p className="text-base md:text-lg">
                        Na Gitly, estamos prontos para ajudar sua empresa a transformar dados em decisões inteligentes. Se você deseja mais informações sobre nossos serviços, precisa de ajuda para começar um projeto ou simplesmente quer explorar possibilidades de parceria, entre em contato conosco. Nossa equipe de especialistas está mais do que feliz em atendê-lo e fornecer todas as informações que você precisa.
                    </p>
                    <button className="bg-green rounded-br-lg w-48 h-12 text-white">
                    Inicie seu Projeto
                    </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
                    <Image src={computador} alt="Computador" width={500} height={500} className="object-contain" />
                </div>
            </div>
        </div>
    )
}

export default CallContact
