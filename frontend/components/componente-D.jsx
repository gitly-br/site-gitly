import React from 'react';
import Image from "next/image";
import container1 from "../assets/container1.svg";
import container2 from "../assets/container2.svg";
import container3 from "../assets/container3.svg";

const OurLastWork = () => {
  return (
    <div className="py-10 px-32 text-center flex flex-col bg-gradient-to-r from-[#021b09] to-black text-white paizao">
        <div>
            <h1 className='text-[3em] font-semibold mb-5'>Our lasted work</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-center mb-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
        <div className='flex gap-10 justify-center flex-wrap md:flex-nowrap pai'>
            <div className='flex-none'>
                <Image src={container3} alt="container3" /> 
            </div>
            <div className='flex flex-col gap-7'>
                <div className='flex filho'>
                    <div className='bg-[#202020] rounded-xl flex flex-col text-wrap text-start px-10 py-20'>
                        <h1 className='font-semibold text-xl mb-3'>Multiple users</h1>
                        <p className='text-[#9795B5]'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper.</p>
                    </div>
                    <div>
                        <Image src={container2} alt="container2" />
                    </div>
                </div>
                <div className='flex filho'>
                    <div className='bg-[#202020] rounded-xl flex flex-col text-wrap text-start px-10 py-20'>
                        <h1 className='font-semibold text-xl mb-3'>Multiple users</h1>
                        <p className='text-[#9795B5]'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper.</p>
                    </div>
                    <div>
                        <Image src={container1} alt="container1" />
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            @media (max-width: 1618px) {
                .pai {
                    flex-direction: column !important;
                }

                .paizao {
                    justify-content: center;
                    align-items: center;
                    
                }
            }

            @media (max-width: 1068px) {
                .filho {
                    flex-direction: column !important;
                }
                .paizao{
                    padding: 0 20px;
                }
            }
        `}</style>
    </div>
  );
};

export default OurLastWork;
