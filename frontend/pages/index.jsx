import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';
import Footer from '../components/footer';
import Hero from '@/components/hero/hero';

export default function Home() {
    return (
        <div className='bg-[#000015] lg:bg-[#000015]'>
            <Navbar></Navbar>
            <div className='pt-40 px-5 xl:px-0 pb-36 xl:pb-36 xl:pt-28 bg-[#000015]'>
                <Contact />
            </div>
            {/* <Action /> */}
            <Footer />
        </div>
    );
}