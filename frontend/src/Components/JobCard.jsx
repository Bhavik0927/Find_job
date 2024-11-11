import { FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {

    const navigate = useNavigate();

    const daysAgo = (mongodbTime) => {
        const createAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60))
    }
    
    return (
        <div className="flex justify-between gap-6 p-4 rounded-md shadow-xl bg-white ">

            <div className="w-full">
                <div className="flex items-center justify-between ">
                    <p className="text-sm text-gray-600">{daysAgo(job?.createdAt) === 0 ? "Today" : `${daysAgo(job?.createdAt)} days ago`}</p>

                    <button className=" h-10 w-[2.5rem] rounded-full flex items-center justify-center hover:bg-gray-100"> <FaRegBookmark className="text-lg text-opacity-55 " /> </button>
                </div>
                <div className="flex mt-2 items-center  ">
                    <button className="w-10 h-10 border border-gray-200 rounded-full overflow-hidden"><img src={job?.company?.logo} alt="company" /></button>

                    <div className="ml-2">
                        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
                        <p className="text-sm text-gray-600">India</p>
                    </div>

                </div>
                <h1 className="font-bold text-lg my-1">{job?.title}</h1>
                <p className="text-sm text-gray-600 mb-2">{job?.description}</p>

                <div className="flex items-center flex-wrap gap-1">
                    <div className="inline-block px-2 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                        <h2 className="text-black font-bold">{job?.position} Positions</h2>
                    </div>
                    <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                        <h2 className="text-black font-bold">{job?.jobType}</h2>
                    </div>
                    <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                        <h2 className="text-black font-bold">{job?.salary} LPA</h2>
                    </div>
                </div>

                <div className="mt-2 flex gap-2">
                    <button className="inline-block px-3 py-1 text-sm font-bold text-black border border-gray-400  rounded-full cursor-pointer" onClick={() => navigate(`/description/${job?._id}`)}>Details</button>

                    <button className="inline-block px-3 py-1 text-sm font-bold text-white bg-red-600  rounded-full cursor-pointer">Save For Later</button>
                </div>
            </div>



        </div>
    )
}

export default JobCard