import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar"
import CompaniesTable from "./CompaniesTable"

const Companies = () => {
    const navigate = useNavigate();
    return (
        <div className="px-10">
            <Navbar />
            <div className=" maz-w-6xl mx-auto my-10">
                <div className="flex items-center justify-between">
                    <input
                        type="text"
                        className="w-fit"
                        placeholder="Filter by name "
                    />
                    <button className="py-2 px-2 bg-black rounded-lg text-white font-semibold " onClick={() => navigate("/admin/companies/create")}>New Company</button>
                </div>
                <CompaniesTable />
            </div>
        </div>
    )
}

export default Companies