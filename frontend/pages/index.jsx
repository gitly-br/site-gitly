import Contact from '../components/contact';
import Rocket from '../components/rocket';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Rocket /> */}
            <Contact />
            <Action />
        </div>
    );
    }