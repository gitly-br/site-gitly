import Image from "next/image";
import corazaum from "../public/corazaum.svg";
import planta from "../public/planta.svg";
import trofeu from "../public/trofeu.svg";
import us from "../public/ourjorney.svg";

export default function Journey() {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #021b09, black)' }} className="text-white lg:px-48 px-10 lg:py-40 py-10 justify-center">
        <div className="text-center mb-10">
            <p className="text-[1.25em]">OUR JOURNEY</p>
            <h1 className="text-[2.2em] font-semibold">How Gitly were created</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
            <div className="w-full lg:w-1/4">
                <div className="flex lg:justify-start justify-center">
                    <Image src={planta} alt="Corazaum" width={72} height={72} />
                </div>
                <div className="text-wrap lg:text-start text-center">
                    <h1 className="font-semibold text-[1.5em] py-4">How it Began</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis assumenda doloremque tenetur iure nam odit, ipsa repudiandae harum id eum laboriosam. Cum blanditiis quaerat exercitationem illo et, sit facilis.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/4">
                <div className="flex lg:justify-start justify-center">
                    <Image src={trofeu} alt="Planta" width={72} height={72} />
                </div>
                <div className="text-wrap lg:text-start text-center">
                    <h1 className="font-semibold text-[1.5em] py-4">The Goal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem, dignissimos nulla facere, neque, mollitia soluta provident culpa harum consectetur sint recusandae! Illo ut ipsum aspernatur quam aliquam, dolore qui?</p>
                </div>
            </div>
            <div className="w-full lg:w-1/4">
                <div className="flex lg:justify-start justify-center"> 
                    <Image src={corazaum} alt="Trofeu" width={72} height={72} />
                </div>
                <div className="text-wrap lg:text-start text-center">
                    <h1 className="font-semibold text-[1.5em] py-4">The Purpose</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem, dignissimos nulla facere, neque, mollitia soluta provident culpa harum consectetur sint recusandae! Illo ut ipsum aspernatur quam aliquam, dolore qui?</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center mt-14">
            <Image src={us} alt="Us" width={1218} height={580.27} />
        </div>
    </div>
  );
};
