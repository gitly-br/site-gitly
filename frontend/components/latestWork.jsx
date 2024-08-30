import React from 'react';
import Image from "next/image";

import latest1 from "../assets/latest1.svg";
import latest2 from "../assets/latest2.svg";
import latest3 from "../assets/latest3.svg";

const LatestWork = () => {
  return (
    <div className="py-10 px-20 text-center flex flex-col bg-gradient-to-r from-[#021b09] to-black text-white paizao">
      <div>
        <h1 className='text-2xl sm:text-3xl mt-4 mb-4 font-title'>
          Nossos Últimos Trabalhos
        </h1>
        <p className='text-center mb-8 font-text'>
          Descubra como as soluções inovadoras da Gitly estão transformando o cenário empresarial. Confira alguns dos nossos projetos mais recentes:
        </p>
      </div>
      <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-5'>
        <div className='relative w-full h-full md:w-1/2 lg:w-1/2'>
          <Image className='object-cover w-full h-full' src={latest1} alt="latest1"/>
          <div className='absolute inset-0 flex flex-col items-center justify-end text-center text-white p-8'>
            <h1 className='text-lg font-title mb-2'>Solução de Dados para Varejo</h1>
            <p className='font-text text-xs'>Este sistema customizável permite que shoppings ofereçam uma experiência única de compra para seus clientes, suportando múltiplos usuários e facilitando a gestão de lojas.</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 w-full md:w-1/2 lg:w-1/2'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='bg-[#202020] rounded-xl flex flex-col text-wrap text-start px-5 py-8 w-full md:w-1/2'>
              <h1 className='font-title text-lg mb-3'>ChatBot baseado em IA</h1>
              <p className='font-text text-xs text-[#9795B5]'>Nosso ChatBot inteligente utiliza aprendizado de máquina para fornecer atendimento ao cliente em tempo real. Capaz de lidar com várias consultas simultaneamente, a ferramenta aprende com as interações para melhorar continuamente sua eficácia.</p>
            </div>
            <div className='h-full'>
              <Image className='object-cover w-full h-full' src={latest2} alt="latest2" />
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='bg-[#202020] rounded-xl flex flex-col text-wrap text-start px-5 py-8 w-full md:w-1/2'>
              <h1 className='font-title text-lg mb-3'>Serviços Customizados de IA</h1>
              <p className='font-text text-xs text-[#9795B5]'>Na Gitly, criamos soluções de IA que se ajustam às necessidades específicas de cada cliente, melhorando a eficiência operacional e a experiência do usuário através de sistemas de gestão inovadores.</p>
            </div>
            <div className='h-full'>
              <Image className='object-cover w-full h-full' src={latest3} alt="latest3"/>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .paizao {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 1400px) {
          .pai {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 1068px) {
          .filho {
            flex-direction: column;
            align-items: center;
          }
          .paizao {
            padding: 0 20px;
          }
          .image {
            margin-top: 20px;
          }
        }
        @media (max-width: 576px) {
          .textoimage {
            margin-top: 130px;
            margin-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LatestWork;
