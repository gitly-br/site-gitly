import Image from "next/image";
import corazaum from "../public/corazaum.svg";
import planta from "../public/planta.svg";
import trofeu from "../public/trofeu.svg";
import us from "../public/ourjorney.svg";
import backGroundVideo from "../public/backGroundVideo.webm";

export default function Journey() {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #021b09, black)' }} className="relative text-white lg:px-48 px-10 lg:py-40 py-10 justify-center min-h-screen">
      <div className="text-center mb-10 z-10">
        <p className="text-[1.25em] font-text">NOSSA JORNADA</p>
        <h1 className="text-[2.2em] font-semibold font-title">Como a Gitly foi Criada</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-20 z-10">
        <div className="w-full lg:w-1/4 z-10">
          <div className="flex lg:justify-start justify-center">
            <Image src={planta} alt="Corazaum" width={72} height={72} />
          </div>
          <div className="text-wrap lg:text-start text-center">
            <h1 className="font-semibold text-[1.5em] py-4 font-title">Início</h1>
            <p className="font-text">Criada no ambiente acadêmico por um grupo de professores visionários, a Gitly surgiu com o propósito de transformar teoria em soluções práticas de inteligência artificial.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/4 z-10">
          <div className="flex lg:justify-start justify-center">
            <Image src={trofeu} alt="Planta" width={72} height={72} />
          </div>
          <div className="text-wrap lg:text-start text-center">
            <h1 className="font-semibold text-[1.5em] py-4 font-title">Objetivo</h1>
            <p className="font-text">Simplificar a complexidade dos dados através de inovações tecnológicas, permitindo decisões empresariais mais inteligentes e eficazes.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/4 z-10">
          <div className="flex lg:justify-start justify-center">
            <Image src={corazaum} alt="Trofeu" width={72} height={72} />
          </div>
          <div className="text-wrap lg:text-start text-center">
            <h1 className="font-semibold text-[1.5em] py-4 font-title">Propósito</h1>
            <p className="font-text">Contribuir para o avanço tecnológico, promovendo a aplicação prática do conhecimento acadêmico em IA.</p>
          </div>
        </div>
      </div>

      {/* Divisão para o vídeo de fundo e imagem */}
      <div className="absolute inset-0 z-0 overflow-hidden lg:block hidden">
        <video className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover" autoPlay loop muted>
          <source src={backGroundVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex justify-center items-center mt-14">
        <Image src={us} alt="Us" width={1150} height={580.27} />
      </div>
    </div>
  );
}
