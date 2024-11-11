import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  setAllAdminJobs } from '@/store/jobSlice'

const useGetAllAdminJobs = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`https://find-job-2-drpq.onrender.com/api/v1/job/getadminjobs`, { withCredentials: true });
                if (res.data.success) {
                    
                    dispatch( setAllAdminJobs(res.data.Jobs));
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllAdminJobs();
    }, [])
}

export default useGetAllAdminJobs;