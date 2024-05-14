import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';
import Footer from '../components/footer';
import Hero from '@/components/hero/hero';

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Contact /> */}
            <Action />
            <Hero />
            <Footer />
        </div>
    );
}