import React from 'react';
import Image from "next/image";
import container1 from "../assets/container1.svg";
import container2 from "../assets/container2.svg";
import container3 from "../assets/container3.svg";

const LatestWork = () => {
  return (
    <div className="py-10 px-32 text-center flex flex-col bg-gradient-to-r from-[#021b09] to-black text-white paizao">
        <div>
            <h1 className='text-[3em] font-semibold mb-5'>Our lasted work</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-center mb-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
        <div className='flex gap-10 justify-center flex-wrap md:flex-nowrap pai'>
        <div className='relative flex-none'>
            <Image className='w-full h-full object-cover' src={container3} alt="container3" />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white mx-36 textoimage'>
                <h1 className='text-lg font-bold mb-2'>White Label Mall Application</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis.</p>
            </div>
        </div>
            <div className='flex flex-col gap-7'>
                <div className='flex filho'>
                    <div className='bg-[#202020] rounded-xl flex flex-col text-wrap text-start px-10 py-20'>
                        <h1 className='font-semibold text-xl mb-3'>Multiple users</h1>
                        <p className='text-[#9795B5]'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper.</p>
                    </div>
                    <div className='flex justify-center image'>
                        <Image src={container2} alt="container2" />
                    </div>
                </div>
                <div className='flex filho'>
                    <div className='bg-[#202020] rounded-xl flex flex-col text-wrap text-start px-10 py-20'>
                        <h1 className='font-semibold text-xl mb-3'>Multiple users</h1>
                        <p className='text-[#9795B5]'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper.</p>
                    </div>
                    <div className='flex justify-center image'>
                        <Image src={container1} alt="container1" />
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
