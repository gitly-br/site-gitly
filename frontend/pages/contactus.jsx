import Contact from '../components/contact';
import Navbar from '@/components/navbar';
// import Action from '@/components/action';
import Footer from '../components/footer';
import CallContact from '@/components/callContact';


export default function Contactus() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-40 px-5 xl:px-0 pb-36 xl:pb-36 xl:pt-28 bg-[#000015]'>
                <Contact />
            </div>
            {/* <Action /> */}
            <CallContact />
            <Footer />
        </div>
    );
}