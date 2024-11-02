import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import { COMPANIES_API_END_POINT } from "@/utils/constant";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/store/companySlice";

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANIES_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })

            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <h1 className="font-bold text-2xl">Company Name</h1>
                <p className="text-gray-500">What would you like to give your company name? you can change this later.</p>
                <div className="flex flex-col mt-10">
                    <label className="font-semibold" >Company Name</label>
                    <input type="text"
                        className="my-2 py-1 px-2 mx-2 border border-gray-300 rounded-lg"
                        placeholder="JobHunt, Microsoft etc"
                        onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className="flex items-center gap-2 my-5">
                    <button className="border border-gray-300 font-semibold rounded-lg py-2 px-2" onClick={() => navigate("/admin/companies")}>Cancle</button>
                    <button className="bg-black text-white font-semibold rounded-lg py-2 px-2" onClick={registerNewCompany} >Continue</button>
                </div>

            </div>
        </div>
    )
}

export default CompanyCreate;