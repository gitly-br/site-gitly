import Navbar from '@/components/navbar';
import Footer from '../components/footer';
import HeroMedia from '@/components/heroMedia';
import Interviews from '@/components/interviews';
import Articles from '@/components/articles';
import Prizes from '@/components/prizes';

export default function Media() {
    return (
        <div>
            <Navbar />
            <HeroMedia />
            <Interviews />
            <Articles />
            <Prizes />
            <Footer />
        </div>
    );
}