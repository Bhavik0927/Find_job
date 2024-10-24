import Navbar from "./Navbar";

const JobDescriptions = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <div className="flex items-center justify-between border border-gray-200 ">
                    <div>
                        <h1 className="font-bold text-xl">Title</h1>
                        <div className="flex items-center flex-wrap gap-1">
                            <div className="inline-block px-2 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                                <h2 className="text-black font-bold">12 Positions</h2>
                            </div>
                            <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                                <h2 className="text-black font-bold">Part Time</h2>
                            </div>
                            <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                                <h2 className="text-black font-bold">24 LPA</h2>
                            </div>
                        </div>
                    </div>
                    <button className="inline-block px-2 py-1 text-sm font-bold  border border-gray-400  rounded-full cursor-pointer">Apply Now</button>
                </div>
            </div>
        </>
    )
}

export default JobDescriptions;