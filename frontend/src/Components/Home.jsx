import useGetAllJobs from "@/hooks/useGetAllJobs";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    useGetAllJobs();

    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role === 'recruiter') {
            navigate('/admin/companies');
        }
    }, [user]);
    return (
        <div className="px-10">
            <Navbar />
            <HeroSection />
            {/* <CategoryCarousel /> */}
            <LatestJobs />
            <Footer />
        </div>
    )
}

export default Home