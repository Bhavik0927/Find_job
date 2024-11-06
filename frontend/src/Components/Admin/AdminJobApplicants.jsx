import { useEffect } from "react";
import Navbar from "../Navbar"
import ApplicantTable from "./ApplicantTable";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllApplicants } from "@/store/applicationSlice";

const AdminJobApplicants = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() =>{
        const fetchAllApplicants = async() =>{
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials: true});
                if(res.data.success){
                    dispatch(setAllApplicants(res.data.job))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllApplicants();
    },[])
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <h1 className="font-bold text-xl my-5">Applicants (3)</h1>
                <ApplicantTable />
            </div>
        </div>
    )
}

export default AdminJobApplicants