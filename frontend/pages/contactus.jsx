import Contact from '../components/contact';
import Navbar from '@/components/navbar';
import Footer from '../components/footer';
import CallContact from '@/components/callContact';

export default function Contactus() {
    return (
        <div>
            <Navbar />
            <div className='px-5 xl:px-0 pb-36 xl:pb-36 top' style={{ background: 'linear-gradient(to bottom, #00002D, #000013)' }}>
                <Contact />
            </div>
            <div className='pb-24 back' style={{ background: 'linear-gradient(to bottom, #021b09, black)' }} ><CallContact /></div>
            <Footer style={{ background: 'linear-gradient(to bottom, #021b09, black)' }} />
            <style jsx>{`
                .top {
                    padding-top: 120px;
                }

                @media (max-width: 1238px) {
                    .top {
                        padding-top: 100px;
                    }
                }

                @media (max-width: 1024px) {
                    .back {
                        background: linear-gradient(to right, #021b09, black);
                    }
                }

                @media (min-width: 1472px) {
                    .top {
                        padding-top: 100px;
                }

                @media (min-width: 1025px) {
                    .back {
                        background: black;
                    }
                }
            `}</style>
        </div>
    );
}
