import { useState } from "react"
import Navbar from "../Navbar"
import { useSelector } from "react-redux";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectGroup, SelectItem } from "../ui/select";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";


const JobsCreate = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    })
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { companies } = useSelector(store => store.company);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company?.name?.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany._id });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`https://find-job-2-drpq.onrender.com/api/v1/job/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/admin/jobs');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }

    }
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center w-screen my-5">
                <form onSubmit={submitHandler} className="p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md">

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label >Title</label>
                            <input type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="ml-2 border border-gray-200 py-1 px-2 rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <label >Description</label>
                            <input type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="ml-2 border border-gray-200 py-1 px-2 rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <label >Requirements</label>
                            <input type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="ml-2 border border-gray-200 py-1 px-2 rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <label >Salary</label>
                            <input type="number"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="ml-2 border border-gray-200 py-1 px-2 rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <label >Location</label>
                            <input type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="ml-2 border border-gray-200 py-1 px-2 rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <label >JobType</label>
                            <input type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="ml-2 border border-gray-200 py-1 px-2 rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <label >Experience Level</label>
                            <input type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="ml-2 border border-gray-200 py-1 px-2 rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        <div>
                            <label >No of Positions</label>
                            <input type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="ml-2 border border-gray-200 py-1 px-2 rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                        {
                            companies?.length > 0 && (
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {
                                                companies.map((company) => {
                                                    return (
                                                        <SelectItem key={company._id} value={company?.name?.toLowerCase()}>{company?.name}</SelectItem>
                                                    )
                                                })
                                            }

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )
                        }
                    </div>
                    {
                        loading ? <button className="w-full flex gap-2 items-center justify-center bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold"><Loader />Please wait </button> : <button type="submit" className="w-full bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold">Post New Job</button>
                    }
                   
                    {
                        companies?.length === 0 && <p className="text-xs text-red-600 font-bold text-center my-3">Please register first, before posting a jobs </p>
                    }
                </form>
            </div>
        </div>
    )
}

export default JobsCreate