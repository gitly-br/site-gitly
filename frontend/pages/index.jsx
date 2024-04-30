import Contact from '../components/contact';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';
import Footer from '../components/footer';
import CustomButton from '@/components/button/buttonGreenStart';

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Contact />
            <Action />
            <CustomButton></CustomButton>
            <Footer />
        </div>
    );
}