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
                <div>
                    <h1 className="text-3xl font-semibold">Talk to one of our specialists and start your project today</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim laoreet massa non.</p>
                </div>
                <div>
                    <button className="bg-[#1DB954] text-white py-2 px-4 rounded mt-4">Get a free quote</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center z-10">
                <Image src={Computer} alt="Computer" width={759.29} height={889.84} />
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
