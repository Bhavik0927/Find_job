import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllAppliedJobs } from "@/store/jobSlice";

const useGetAppliedJob = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`https://find-job-2-drpq.onrender.com/api/v1/application/get`, { withCredentials: true })
                console.log(res.data.application);
                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAppliedJobs();
    }, [])
}

export default useGetAppliedJob;