import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';
import Footer from '../components/footer';

export default function Home() {
    return (
        <div className='bg-black lg:bg-black'>
            <Navbar></Navbar>
            <div className='pt-36 pb-24 xl:pb-24 xl:pt-24 bg-black'>
                <Contact />
            </div>
            {/* <Action /> */}
            <Footer />
        </div>
    );
    }


