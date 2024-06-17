import React, { useRef, useState } from "react";
import Image from "next/image"; // Importação do componente Image do Next.js
import Play from '../assets/playVideo.svg';

const Adedicated = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden grid sm:grid-cols-2 sm:p-10 text-white">
            <video
                ref={videoRef}
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative col-span-1 flex justify-center items-center">
            {!isPlaying && (
                <button
                    onClick={handlePlay}
                    className="bg-transparent border-none"
                >
            <Image src={Play} alt="Play Video" className="w-full h-full"  />
        </button>
                )}
            </div>
            <div className="relative z-10 col-span-1 flex items-center">
                <div>
                    <h1 className="mb-5 sm:text-3xl font-bold">A dedicated team <br />to grow your company</h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor<br />
                        do amet sint. Velit officia consequat duis enim velit mollit.<br />
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Adedicated;
