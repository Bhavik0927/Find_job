import axios from 'axios'
import { useEffect } from 'react'
import { JOB_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import {  setAllAdminJobs } from '@/store/jobSlice'

const useGetAllAdminJobs = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, { withCredentials: true });
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