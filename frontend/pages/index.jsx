import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';

export default function Home() {
    return (
        <div>
            <Rocket />
            {/* <Contact /> */}
            <Navbar></Navbar>
            <Contact />
            <Action />
            <Footer />

        </div>
    );
    }


