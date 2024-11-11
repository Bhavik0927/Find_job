import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/store/companySlice'

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`https://find-job-2-drpq.onrender.com/api/v1/company/get/${companyId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleCompany();
    }, [companyId, dispatch])
}

export default useGetCompanyById;