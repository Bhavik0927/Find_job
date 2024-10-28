import useGetAllJobs from "@/hooks/useGetAllJobs";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Navbar from "./Navbar";

const Home = () => {
    useGetAllJobs();
    return (
        <div>
            <Navbar />
            <HeroSection />
            {/* <CategoryCarousel /> */}
            <LatestJobs />
            <Footer />
        </div>
    )
}

export default Home