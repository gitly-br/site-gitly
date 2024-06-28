import Navbar from '@/components/navbar';
import Footer from '../components/footer';
import HeroMedia from '@/components/heroMedia';
import Interviews from '@/components/interviews';

export default function Media() {
    return (
        <div>
            <Navbar />
            <HeroMedia />
            <Interviews />
            <Footer />
        </div>
    );
}