import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { setSearchQuery } from "@/store/jobSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const [query, setQuery ] = useState("");
    const dispath = useDispatch();
    const navigate = useNavigate();
    
    const searchJobHandler = () =>{
        dispath(setSearchQuery(query));
        navigate('/browse')
    }
    return (
        <div className='text-center'>
            <div className="flex flex-col gap-5 my-10">
                <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">No 1 Job Hunt Website</span>
                <h1 className="text-5xl font-bold">Search, Apply & <br /> Get Your <span className="text-[#6A38C2]">Dream Jobs</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore est repellat sunt veritatis aliquid.</p>
                <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto overflow-hidden">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full py-2 px-2"
                    />
                    <button className=" text-black cursor-pointer pr-3 text-center h-full " onClick={searchJobHandler}> <CiSearch className="w-5 h-5 " /> </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;