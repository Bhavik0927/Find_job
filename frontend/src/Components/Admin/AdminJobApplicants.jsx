import { useEffect } from "react";
import Navbar from "../Navbar"
import ApplicantTable from "./ApplicantTable";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/store/applicationSlice";

const AdminJobApplicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`https://find-job-2-drpq.onrender.com/api/v1/application/${params.id}/applicants`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllApplicants(res.data.job))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllApplicants();
    }, [])
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <h1 className="font-bold text-xl my-6">Applicants ({applicants?.applications?.length})</h1>
                <ApplicantTable />
            </div>
        </div>
    )
}

export default AdminJobApplicants;