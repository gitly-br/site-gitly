import Navbar from '@/components/navbar';
import Footer from '../components/footer';
import HeroMedia from '@/components/heroMedia';
import Interviews from '@/components/interviews';
import Articles from '@/components/articles';

export default function Media() {
    return (
        <div>
            <Navbar />
            <HeroMedia />
            <Interviews />
            <Articles />
            <Footer />
        </div>
    );
}