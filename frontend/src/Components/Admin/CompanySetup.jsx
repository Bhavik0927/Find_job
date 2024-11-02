import { useEffect, useState } from "react";
import Navbar from "../Navbar"
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { COMPANIES_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const CompanySetup = () => {
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    })
    const { singleCompany } = useSelector(store => store.company);
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandle = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name)
        formData.append("description", input.description)
        formData.append("website", input.website)
        formData.append("location", input.location)

        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.put(`${COMPANIES_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/admin/companies');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setInput({
            name: singleCompany.name || "",
            description: singleCompany.discription || "",
            website: singleCompany.company || "",
            location: singleCompany.location || "",
            file: singleCompany.file || null
        })
    }, [singleCompany])
    return (
        <div>
            <Navbar />
            <div className="max-w-xl mx-auto my-10">
                <form action="" onSubmit={submitHandler}>
                    <div className="flex items-center gap-5 p-8">
                        <button className="flex items-center gap-1 text-white font-semibold bg-black py-2 px-2 rounded-lg " onClick={() => navigate('/admin/companies')}>
                            <IoIosArrowBack />
                            <span>Back</span>
                        </button>
                        <h1 className="font-bold text-xl">Company Setup</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label >Company Name</label>
                            <input type="text"
                                name="name"
                                value={input.name}
                                className="my-2 py-1 px-2 mx-2 border border-gray-300 rounded-lg"
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <label >Description</label>
                            <input type="text"
                                name="description"
                                value={input.description}
                                className="my-2 py-1 px-2 mx-2 border border-gray-300 rounded-lg"
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <label >Website</label>
                            <input type="text"
                                name="website"
                                value={input.website}
                                className="my-2 py-1 px-2 mx-2 border border-gray-300 rounded-lg"
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <label >Location</label>
                            <input type="text"
                                name="location"
                                value={input.location}
                                className="my-2 py-1 px-2 mx-2 border border-gray-300 rounded-lg"
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <label >Logo</label>
                            <input type="file"
                                accept="image/*"
                                onChange={changeFileHandle}

                            />
                        </div>
                    </div>
                    {
                        loading ? <button className="w-full flex gap-2 items-center justify-center bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold"><Loader />Please wait </button> : <button type="submit" className="w-full bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold">Update</button>
                    }
                    
                </form>
            </div>
        </div>
    )
}

export default CompanySetup