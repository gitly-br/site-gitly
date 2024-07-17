import Image from "next/image";
import corazaum from "../public/corazaum.svg";
import planta from "../public/planta.svg";
import trofeu from "../public/trofeu.svg";
import us from "../public/ourjorney.svg";

export default function Journey() {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #021b09, black)' }} className="text-white lg:px-48 px-10 lg:py-40 py-10 justify-center">
      <div className="text-center mb-10">
        <p className="text-[1.25em] font-text">NOSSA JORNADA</p>
        <h1 className="text-[2.2em] font-semibold font-title">Como a Gitly foi Criada</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-[9.3rem] w-full max-w-[1218px]">
          <div className="w-full lg:w-1/4">
            <div className="flex lg:justify-start justify-center">
              <Image src={planta} alt="Planta" width={72} height={72} />
            </div>
            <div className="text-wrap lg:text-start text-center">
              <h1 className="font-semibold text-[1.5em] py-4 font-title">Início</h1>
              <p className="font-text">
                Criada no ambiente acadêmico por um grupo de professores visionários, a Gitly surgiu com o propósito de transformar teoria em soluções práticas de inteligência artificial.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="flex lg:justify-start justify-center">
              <Image src={trofeu} alt="Trofeu" width={72} height={72} />
            </div>
            <div className="text-wrap lg:text-start text-center">
              <h1 className="font-semibold text-[1.5em] py-4 font-title">Objetivo</h1>
              <p className="font-text">
                Simplificar a complexidade dos dados através de inovações tecnológicas, permitindo decisões empresariais mais inteligentes e eficazes.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="flex lg:justify-start justify-center">
              <Image src={corazaum} alt="Corazaum" width={72} height={72} />
            </div>
            <div className="text-wrap lg:text-start text-center">
              <h1 className="font-semibold text-[1.5em] py-4 font-title">Propósito</h1>
              <p className="font-text">
                Contribuir para o avanço tecnológico, promovendo a aplicação prática do conhecimento acadêmico em IA.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-14 w-full max-w-[1218px]">
          <Image src={us} alt="Us" width={1218} height={580.27} />
        </div>
      </div>
    </div>
  );
};
