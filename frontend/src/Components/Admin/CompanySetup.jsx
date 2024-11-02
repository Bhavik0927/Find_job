import { useState } from "react";
import Navbar from "../Navbar"
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const CompanySetup = () => {
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    })

    const [loading, setLoading] = useState(false);

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
        formData.append("name",input.name)
        formData.append("description",input.description)
        formData.append("website",input.website)
        formData.append("location",input.location)

        if(input.file){
            formData.append("file",input.file);
        }
        try {
            const res = axios.put
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Navbar />
            <div className="max-w-xl mx-auto my-10">
                <form action="" onSubmit={submitHandler}>
                    <div className="flex items-center gap-5 p-8">
                        <button className="flex items-center gap-1 text-white font-semibold bg-black py-2 px-2 rounded-lg ">
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
                    <button type="submit" className="w-full py-1 border border-gray-300 rounded-lg">Update</button>
                </form>
            </div>
        </div>
    )
}

export default CompanySetup