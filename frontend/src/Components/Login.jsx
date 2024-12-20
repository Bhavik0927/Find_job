import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setLoading } from "../store/authSlice";
import Loader from "./Loader";


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",

    });
    const {user, loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`https://find-job-2-drpq.onrender.com/api/v1/user/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            
            if (res.data.success) {
                
                dispatch(setAuthUser(res.data.user))
                navigate('/');
                toast.success(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false))
        }
    }

    useEffect(() =>{
        if(user){
            navigate("/")
        }
    },[])
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                    <h1 className="font-bold text-xl mb-5">Login</h1>

                    <div className="my-2 flex flex-col gap-1">
                        <label >Email</label>
                        <input
                            className="border border-gray-200 p-1 rounded-md pl-2" type="email"
                            name="email"
                            value={input.email}
                            placeholder="email"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className="my-2 flex flex-col gap-1">
                        <label >Password</label>
                        <input
                            className="border border-gray-200 p-1 rounded-md pl-2" type="text"
                            placeholder="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler} />
                    </div>

                    {/* radio buttons */}
                    <div className="flex items-center justify-between mt-6">
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
                                    onChange={changeEventHandler}
                                    className="mr-1 cursor-pointer"
                                />
                                Recruiter
                            </label>
                        </div>

                    </div>
                    {
                        loading ? <button className="w-full flex gap-2 items-center justify-center bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold"><Loader />Please wait </button> : <button type="submit" className="w-full bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold">Login</button>
                    }

                    <span className="flex justify-center gap-1 mt-2 text-sm">Don't have an account?  <Link to="/signup" className="text-blue-500 underline">Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login;