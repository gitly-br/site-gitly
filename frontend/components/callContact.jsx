import Image from 'next/image';
import Computer from '../assets/computer.svg';
import Bgleft from '../assets/bg-left.svg';
import Ballright from '../assets/ball-center.svg';


function CallContact() {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center h-screen gap-20 px-5 xl:px-20 py-20 bg-black beckgraund">
            {/* Background SVGs */}
            <div className="absolute top-0 left-0 hidden-on-small2">
                <Image src={Bgleft} alt="Background Left" layout="fixed" width={620} height={700} />
            </div>
            <div className="absolute top-0 right-0 hidden-on-small">
                <Image src={Ballright} alt="Background Top Right" layout="fixed" width={1000} height={1200} />
            </div>
            {/* Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 text-white response">
                <div className='px-20'>
                    <div>
                        <h1 className="text-3xl font-semibold">Fale com um dos nossos especialistas e inicie o projeto hoje!</h1>
                    </div>
                    <div className='pt-10'>
                        <p>Na Gitly, estamos prontos para ajudar sua empresa a transformar dados em decisões inteligentes. Se você deseja mais informações sobre nossos serviços, precisa de ajuda para começar um projeto ou simplesmente quer explorar possibilidades de parceria, entre em contato conosco!</p>
                    </div>
                    <div>
                        <button className="bg-[#1DB954] text-white py-2 px-4 rounded mt-4">Inicie seu projeto</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center z-10 hidden-on-small2">
                <Image src={Computer} alt="Computer" width={959.29} height={1089.84} />
            </div>
            <style jsx>{`
            @media (max-width: 1560px) {
            .hidden-on-small {
                display: none;
            }
            
            @media (max-width: 1024px) {
            .hidden-on-small2 {
                display: none;
            }
            
            .beckgraund {
                background: linear-gradient(to right, #021b09, black);
            }

            .response {
                padding-top: 100px;
            }

            `}

            </style>
        </div>
    );
}

export default CallContact;
