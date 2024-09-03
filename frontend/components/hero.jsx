import React from "react";
import Lottie from "react-lottie";  // Alterado para react-lottie
import * as animationData from '../public/animationhome.json';
import Backgroundanima from '../public/backgroundanima.png';
import Image from 'next/image';
import Link from 'next/link';

class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <Hero defaultOptions={defaultOptions} />
    );
  }
}

function Hero({ defaultOptions }) {
  return (
    <div className="relative flex flex-col justify-center items-center text-white min-h-screen">
      {/* Animação Lottie para telas grandes */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>

      {/* Imagem de fundo para telas pequenas */}
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src={Backgroundanima}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
      </div>

      {/* Camada de sobreposição preta */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Conteúdo central */}
      <div className="relative z-20 p-4 md:p-0 text-center flex flex-col justify-center items-center h-full">
        <h1 className="font-title text-3xl md:text-5xl mb-5 md:mb-10 leading-tight">
          Vamos falar sobre tomada de<br />decisão impulsionadas por IA?
        </h1>
        <p className="font-text text-lg mb-10 px-4 md:px-60">
          Descubra o poder da IA na transformação dos seus negócios. Entre em contato hoje e comece a moldar o futuro!
        </p>
        <Link href="/contactus">
          <button className="btn-transparente font-text">
            Inicie seu Projeto
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LottieControl;
