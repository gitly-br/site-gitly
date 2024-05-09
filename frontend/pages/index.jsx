import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';
import Footer from '../components/footer';
import Hero from '@/components/hero/hero';
import ComponenteF from '../components/componente-F';

export default function Home() {
    const partners = [
        { name: "Twich", logo: "/Twitch.svg", description: "Twitch is a live streaming platform for gamers and other lifestyle casters. The platform is owned by Amazon and has more than 15 million daily active users.", link: "https://www.twitch.tv/" },
        { name: "Facebook", logo: "/Facebook-vector.svg", description: "Facebook is a social media platform that allows users to connect with friends and family, share photos and videos, and send messages.", link: "https://www.facebook.com/" },
        { name: "Grand-Plaza", logo: "/Grand-Plaza.svg", description: "Grand Plaza is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti in saepe quod quaerat eum laudantium excepturi ut quidem aliquid! Ad, corporis obcaecati illo recusandae necessitatibus facilis tenetur veritatis magni reprehenderit.", link: "https://www.facebook.com/" },
        { name: "Youtube", logo: "/YouTube.svg", description: "YouTube is a video sharing platform that allows users to watch, like, share, comment, and upload their own videos. The platform is owned by Google and has more than 2 billion monthly active users.", link: "https://www.youtube.com/" },
        { name: "Suzano", logo: "/Suzano.svg", description: "Suzano is a global company focused on developing sustainable solutions from renewable sources. The company is the world's largest producer of eucalyptus pulp and one of the largest paper producers in Latin America.", link: "https://www.suzano.com.br/"},
      ];
    return (
        <div className='bg-[#000015] lg:bg-[#000015]'>
            {/* <Navbar></Navbar>  */}
            {/* <div className='pt-40 px-5 xl:px-0 pb-36 xl:pb-36 xl:pt-28 bg-[#000015]'>
                <Contact />
            </div> */}
            {/* <Action /> */}
            <ComponenteF partners={partners}/>
            {/* <Footer /> */}
        </div>
    );
}
