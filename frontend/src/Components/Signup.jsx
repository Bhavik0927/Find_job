import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import axios from 'axios';
import { USER_API_END_POINT } from "../utils/constant";
import {  toast } from 'react-toastify';


const Signup = () => {
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandle = (e) => {
        setInput({ ...input, file: e.target.files[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        // convert data into formdata;
        const formData = new FormData();
        formData.append('fullName', input.fullName);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('password', input.password);
        formData.append('role', input.role);

        if (input.file) { formData.append("file", input.file) }

        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate('/login')
                toast.success(res.data.message);

            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                    <h1 className="font-bold text-xl mb-5">Sign up</h1>

                    <div className="my-2 flex flex-col gap-1">
                        <label >Full Name</label>
                        <input
                            className="border border-gray-200 p-1 rounded-md pl-2"
                            type="text"
                            placeholder="fullName"
                            value={input.fullName}
                            name="fullName"
                            onChange={changeEventHandler} />

                    </div>
                    <div className="my-2 flex flex-col gap-1">
                        <label >Email</label>
                        <input
                            className="border border-gray-200 p-1 rounded-md pl-2"
                            type="email"
                            placeholder="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler} />
                    </div>
                    <div className="my-2 flex flex-col gap-1">
                        <label >Phone Number</label>
                        <input
                            className="border border-gray-200 p-1 rounded-md pl-2"
                            type="number"
                            placeholder="phone number"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler} />
                    </div>
                    <div className="my-2 flex flex-col gap-1">
                        <label >Password</label>
                        <input className="border border-gray-200 p-1 rounded-md pl-2"
                            type="text"
                            placeholder="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler} />
                    </div>

                    {/* radio buttons */}
                    <div className="flex items-center justify-between mt-6 ">
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Student"
                                    className="mr-1 cursor-pointer"
                                    checked={input.role === 'Student'}
                                    onChange={changeEventHandler}
                                />
                                Student
                            </label>

                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    className="mr-1 cursor-pointer"
                                    onChange={changeEventHandler}

                                />
                                Recruiter
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <label>Profile</label>
                            <input
                                accept="image/*"
                                type='file'
                                className="cursor-pointer"

                                name="file"
                                onChange={changeFileHandle}
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold">Signup</button>
                    <span className="flex justify-center gap-1 mt-2 text-sm">Alreay have an account?  <Link to="/login" className="text-blue-500 underline">Login</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Signup;