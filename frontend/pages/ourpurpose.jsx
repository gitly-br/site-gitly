import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';
import Footer from '../components/footer';
import Products from '../components/products';
import Partners from '../components/partners';
import Projects from '@/components/projects';
import Hero from '@/components/hero/hero';
import Whyandget from '@/components/whyandget';
import HeroSection from '@/components/herosection';

export default function Ourpupose() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <HeroSection />
            <Whyandget></Whyandget>
            <Footer />
        </div>
    );
}