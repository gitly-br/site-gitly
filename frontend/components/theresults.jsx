import React from 'react';
import Image from "next/image";
import products from "../assets/products.svg";
import Container1 from '../assets/container1.svg'
import Container2 from '../assets/container2.svg'
import Container3 from '../assets/container3.svg'
import Container4 from '../assets/container4.svg'
import Container5 from '../assets/container5.svg'
import Container6 from '../assets/container6.svg'
import ComponenteF from './componente-F';



const Theresults = () => {
  
  const partners = [
    { name: "Twich", logo: "/Twitch.svg", description: "Twitch is a live streaming platform for gamers and other lifestyle casters. The platform is owned by Amazon and has more than 15 million daily active users.", link: "https://www.twitch.tv/" },
    { name: "Facebook", logo: "/Facebook-vector.svg", description: "Facebook is a social media platform that allows users to connect with friends and family, share photos and videos, and send messages.", link: "https://www.facebook.com/" },
    { name: "Grand-Plaza", logo: "/Grand-Plaza.svg", description: "Grand Plaza is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti in saepe quod quaerat eum laudantium excepturi ut quidem aliquid! Ad, corporis obcaecati illo recusandae necessitatibus facilis tenetur veritatis magni reprehenderit.", link: "https://www.facebook.com/" },
    { name: "Youtube", logo: "/YouTube.svg", description: "YouTube is a video sharing platform that allows users to watch, like, share, comment, and upload their own videos. The platform is owned by Google and has more than 2 billion monthly active users.", link: "https://www.youtube.com/" },
    { name: "Suzano", logo: "/Suzano.svg", description: "Suzano is a global company focused on developing sustainable solutions from renewable sources. The company is the world's largest producer of eucalyptus pulp and one of the largest paper producers in Latin America.", link: "https://www.suzano.com.br/"},
  ];
  
  return (
    <div className='p-5 sm:p-10 flex flex-col items-center justify-center bg-black text-white'>
      <ComponenteF partners={partners} />

      <div className='text-center'>
        <h1 className='mb-4 sm:mb-0 text-2xl sm:text-3xl font-bold'>
          The results in numbers
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
      </div>

      <div class="sm:grid sm:grid-cols-2 sm:gap-10 mt-10 ">
        <div>
        <Image src={Container1} alt="premiopt" width={400} height={500} className=''/>
        </div>
      <div>
      <div className='mt-10 sm:mt-0'>
          <Image src={Container6} alt="premiopt" width={400} height={500} />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Theresults;
