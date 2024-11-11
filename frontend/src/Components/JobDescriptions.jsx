import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleJob } from '@/store/jobSlice'
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from 'react-toastify'


const JobDescriptions = () => {

    const params = useParams();
    const jobId = params.id;
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();


    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;

    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`https://find-job-2-drpq.onrender.com/api/v1/application/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true);
                const updateSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] }
                dispatch(setSingleJob(updateSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`https://find-job-2-drpq.onrender.com/api/v1/job/get/${jobId}`, { withCredentials: true });
                
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applicants.some(application => application.applicant === user?._id));
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id])
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <div className="flex items-center justify-between ">
                    <div>
                        <h1 className="font-bold text-xl">{singleJob?.title}</h1>
                        <div className="flex items-center flex-wrap gap-1 mt-4">
                            <div className="inline-block px-2 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                                <h2 className="text-black font-bold">12 Positions</h2>
                            </div>
                            <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                                <h2 className="text-black font-bold">{singleJob?.jobType}</h2>
                            </div>
                            <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                                <h2 className="text-black font-bold">{singleJob?.salary} LPA</h2>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`inline-block px-2 py-1 text-sm font-bold 
                   ${isApplied ? 'bg-gray-600 text-white cursor-not-allowed' : 'bg-[#000] text-white cursor-pointer hover:bg-[#060505]'}   rounded-full `}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </button>


                </div>
                <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>

                <div className="my-4">
                    <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
                    <h1 className="font-bold my-1">Location:  <span className="pl-3 font-normal text-gray-800">{singleJob?.location}</span></h1>

                    <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>

                    <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experienceLevel} years</span></h1>

                    <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary} LPA</span></h1>

                    <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>

                    <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt?.split("T")[0]}</span></h1>

                </div>
            </div>
        </>
    )
}

export default JobDescriptions;