import Contact from '../components/contact';
import Navbar from '@/components/navbar';
import Footer from '../components/footer';
import CallContact from '@/components/callContact';

export default function Contactus() {
    return (
        <div>
            <Navbar />
            <div className='px-5 xl:px-0 pb-36 xl:pb-36 top' style={{ background: 'linear-gradient(to bottom, #00002D, #000015)' }}>
                <Contact />
            </div>
            <CallContact />
            <Footer />
            <style jsx>{`
                .top {
                    padding-top: 290px;
                }
                
                @media (min-width: 1800px) {
                    .top {
                        padding-top: 100px;
                }
                
                @media (max-width: 1238px) {
                    .top {
                        padding-top: 100px;
                    }
                }
            `}</style>
        </div>
    );
}
