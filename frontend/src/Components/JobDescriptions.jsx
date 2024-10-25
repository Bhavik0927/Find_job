import Navbar from "./Navbar";

const JobDescriptions = () => {
    const isApplied = true;

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <div className="flex items-center justify-between ">
                    <div>
                        <h1 className="font-bold text-xl">Frontend Developer</h1>
                        <div className="flex items-center flex-wrap gap-1 mt-4">
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

                    <button
                        disabled={isApplied}
                        className={`inline-block px-2 py-1 text-sm font-bold 
                   ${isApplied ? 'bg-gray-600 text-white cursor-not-allowed' : 'bg-[#000] text-white cursor-pointer hover:bg-[#060505]'}   rounded-full `}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </button>


                </div>
                <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>

                <div className="my-4">
                    <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
                    <h1 className="font-bold my-1">Location: <span className="pl-3 font-normal text-gray-800">Hyderabad</span></h1>

                    <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, earum quas nesciunt officiis aliquam quia.</span></h1>

                    <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 years</span></h1>

                    <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">12 LPA</span></h1>

                    <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">4</span></h1>

                    <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">17-04-2023</span></h1>



                    
                </div>
            </div>
        </>
    )
}

export default JobDescriptions;