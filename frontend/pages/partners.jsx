import Navbar from '@/components/navbar';
import Footer from '../components/footer';
import HeroPartners from '@/components/heroPartrners';
import LatestWork from '@/components/latestWork';
import Theresults from '@/components/theresults';
import OurCustomers from '@/components/ourCustomers';
import Project1 from '@/components/project1';
import CallPartners from '@/components/callPartners';

export default function Partners() {

const partners = [
  { name: "Twich", logo: "/Twitch.svg", description: "Twitch is a live streaming platform for gamers and other lifestyle casters. The platform is owned by Amazon and has more than 15 million daily active users.", link: "https://www.twitch.tv/" },
  { name: "Facebook", logo: "/Facebook-vector.svg", description: "Facebook is a social media platform that allows users to connect with friends and family, share photos and videos, and send messages.", link: "https://www.facebook.com/" },
  { name: "Grand-Plaza", logo: "/Grand-Plaza.svg", description: "Grand Plaza is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti in saepe quod quaerat eum laudantium excepturi ut quidem aliquid! Ad, corporis obcaecati illo recusandae necessitatibus facilis tenetur veritatis magni reprehenderit.", link: "https://www.facebook.com/" },
  { name: "Youtube", logo: "/YouTube.svg", description: "YouTube is a video sharing platform that allows users to watch, like, share, comment, and upload their own videos. The platform is owned by Google and has more than 2 billion monthly active users.", link: "https://www.youtube.com/" },
  { name: "Suzano", logo: "/Suzano.svg", description: "Suzano is a global company focused on developing sustainable solutions from renewable sources. The company is the world's largest producer of eucalyptus pulp and one of the largest paper producers in Latin America.", link: "https://www.suzano.com.br/"},
];

    return (
        <div style={{ background: `linear-gradient(to right, #021b09, black)` }}>
            <Navbar />
            <HeroPartners />
            <OurCustomers partners={partners} />
            <div className=''> </div>
            <Theresults></Theresults>
            <LatestWork></LatestWork>
            <Project1></Project1>
            <CallPartners></CallPartners>
            <Footer />
        </div>
    );
}
