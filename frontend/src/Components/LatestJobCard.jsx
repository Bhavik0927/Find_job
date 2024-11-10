import { useNavigate } from "react-router-dom"

export const LatestJobCard = ({ job }) => {

    const navigate = useNavigate();
    
    return (
        <div onClick={() => navigate(`/description/${job._id}`)} className="p-5 rounded-md shadow-xl bg-white border-gray-100">
            <div>
                <h1 className="font-medium text-lg">{job?.company?.name}</h1>
                <p className="text-sm text-gray-500">India</p>
            </div>
            <div>
                <h1 className="font-bold text-lg "  >{job?.title}</h1>
                <p className="text-sm text-gray-600">{job?.description}</p>
            </div>
            <div className="flex items-center flex-wrap gap-2 my-2">
                <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                    <h2 className="text-black font-bold">{job?.location}</h2>
                </div>
                <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                    <h2 className="text-black font-bold">{job?.position} positions</h2>
                </div>
                <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                    <h2 className="text-black font-bold">{job?.jobType}</h2>
                </div>
                <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                    <h2 className="text-black font-bold">{job.salary} LPA</h2>
                </div>
            </div>
        </div>
    )
}
