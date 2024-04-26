import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Contact />
            <Action />
        </div>
    );
    }


