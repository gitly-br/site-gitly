import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';
import Footer from '../components/footer';
import Products from '../components/products';
import Partners from '../components/partners';
import Projects from '@/components/projects';
import Ourclients from '@/components/ourclients';
import Hero from '@/components/hero/hero';
import Browse from '@/components/browse';


export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Contact /> */}
            <Hero />
            <Browse />
            <Products></Products>
            <Partners />
            <Projects />
            <Footer />
        </div>

    );
}
