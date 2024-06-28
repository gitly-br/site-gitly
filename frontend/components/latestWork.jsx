import React from 'react';
import Image from "next/image";

import latest1 from "../assets/latest1.svg";
import latest2 from "../assets/latest2.svg";
import latest3 from "../assets/latest3.svg";

const LatestWork = () => {
  return (
    <div className="py-10 px-32 text-center flex flex-col bg-gradient-to-r from-[#021b09] to-black text-white paizao">
        <div>
            <h1 className='text-[3em] font-semibold mb-5'>Nossos últimos trabalhos</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-center mb-5'>Descubra como as soluções inovadoras da Gitly estão transformando o cenário empresarial. Confira alguns dos nossos projetos mais recentes:</p>
        </div>
        <div className='flex gap-10 justify-center flex-wrap md:flex-nowrap pai'>
        <div className='relative flex-none'>
            <Image className='w-full h-full object-cover' src={latest1} alt="latest1"/>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white mx-36 textoimage'>
                <h1 className='text-lg font-bold mb-2'>Solução de Dados para Varejo</h1>
                <p className='text-sm'>Este sistema customizável permite que shoppings ofereçam uma experiência única de compra para seus clientes, suportando múltiplos usuários e facilitando a gestão de lojas.</p>
            </div>
        </div>
            <div className='flex flex-col gap-7'>
                <div className='flex filho'>
                    <div className='bg-[#202020] rounded-xl flex flex-col text-wrap text-start px-5 py-10 w-[400px]'>
                        <h1 className='font-semibold text-xl mb-3'>ChatBot baseado em IA</h1>
                        <p className='text-[#9795B5]'>Nosso ChatBot inteligente utiliza aprendizado de máquina para fornecer atendimento ao cliente em tempo real. Capaz de lidar com várias consultas simultaneamente, a ferramenta aprende com as interações para melhorar continuamente sua eficácia.</p>
                    </div>
                    <div className='flex justify-center image'>
                        <Image src={latest2} alt="latest2" />
                    </div>
                </div>
                <div className='flex filho'>
                    <div className='bg-[#202020] rounded-xl flex flex-col text-wrap text-start px-5 py-10 w-[400px]'>
                        <h1 className='font-semibold text-xl mb-3'>Serviços Customizados de IA</h1>
                        <p className='text-[#9795B5]'>Na Gitly, criamos soluções de IA que se ajustam às necessidades específicas de cada cliente, melhorando a eficiência operacional e a experiência do usuário através de sistemas de gestão inovadores.</p>
                    </div>
                    <div className='flex justify-center image'>
                        <Image src={latest3} alt="latest3"/>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .textoimage {
                margin-top: 330px;
            }
            @media (max-width: 1618px) {
                .pai {
                    flex-direction: column !important;
                    align-items: center !important;
                }

                .paizao {
                    justify-content: center;
                    align-items: center;
                }
            }

            @media (max-width: 1068px) {
                .filho {
                    flex-direction: column !important;
                    align-items: center !important;
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
                    margin-left: 0px;
                    margin-right: 0px;
                }
            }
        `}</style>
    </div>
  );
};

export default LatestWork;
