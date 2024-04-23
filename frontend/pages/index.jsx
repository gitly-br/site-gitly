import Contact from '../components/contact';
import Rocket from '../components/rocket';
import Navbar from '@/components/navbar/navbar';

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Rocket /> */}
            <Contact />
        </div>
    );
    }