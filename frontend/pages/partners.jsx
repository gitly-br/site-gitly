import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroPartners from "@/components/heroPartrners";
// import Theresults from "@/components/theresults";
import LatestWork from "@/components/latestWork";
import Project1 from "@/components/project1";
import CallPartners from "@/components/callPartners";


export default function Partners() {
    return (
        <div>
            <Navbar />
            <HeroPartners />
            {/* <Theresults /> */}
            <LatestWork />
            <Project1 />
            <CallPartners />
            <Footer />
        </div>
    );
}
