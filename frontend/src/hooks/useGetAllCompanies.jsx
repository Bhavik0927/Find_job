import axios from 'axios'
import { useEffect } from 'react'
import { COMPANIES_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import { setCompanies } from '@/store/companySlice'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANIES_API_END_POINT}/get`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllCompanies();
    }, [])
}

export default useGetAllCompanies;