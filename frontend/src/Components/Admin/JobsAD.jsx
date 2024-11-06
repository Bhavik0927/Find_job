import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchJobByText } from "@/store/jobSlice"
import AdminJobsTable from "./AdminJobsTable"
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs"

const JobsAD = () => {
  useGetAllAdminJobs();
  
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input])

  return (
    <div className="px-10">
      <Navbar />
      <div className=" maz-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <input
            type="text"
            className="w-1/3 border border-gray-200 rounded-lg py-1 px-2"
            placeholder="Filter by name "
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="py-2 px-2 bg-black rounded-lg text-white font-semibold " onClick={() => navigate("/admin/jobs/create")}> New Jobs</button>
        </div>
        
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default JobsAD;