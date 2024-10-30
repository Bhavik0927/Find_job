// import { Link } from 'react-router-dom';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setAuthUser } from "@/store/authSlice";

const Navbar = () => {

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);

    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setAuthUser(null));
                navigate('/');
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">

                {/* Navbar image */}
                <div>
                    <h1 className="font-bold text-2xl">Job <span className="text-[#F83002]">Portal </span></h1>
                </div>

                {/* Navbar Content  */}
                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5 cursor-pointer">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/jobs"> <li>Jobs</li> </Link>
                        <Link to="/browse"><li>Brows</li></Link>
                    </ul>
                    {
                        !user ? (
                            <div className="flex items-center gap-1" >
                                <Link to="/login">
                                    <button className="py-2 px-2 bg-slate-200 rounded-lg text-black font-semibold hover:bg-slate-300 ">Login</button>
                                </Link>
                                <Link to="/signup">
                                    <button className="py-2 px-2 bg-black rounded-lg text-white font-semibold ">Logout</button>
                                </Link>
                            </div>
                        ) : (

                            <div className="relative inline-block cursor-pointer">
                                {/* Avatar */}
                                <img
                                    src={user?.profile}
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                    onClick={togglePopover}
                                />

                                {isPopoverOpen && (
                                    <div className="absolute left-[-255%] -translate-x-1/2 mt-2 w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-700 ">
                                        <div className="flex gap-4 space-y-2">
                                            <img
                                                src={user?.profile}
                                                alt="Avatar"
                                                className="w-10 h-10 rounded-full cursor-pointer"
                                            />
                                            <div>
                                                <h4 className="font-bold">{user?.fullName}</h4>
                                                <p className="text-sm text-slate-400">{user?.profile?.bio}</p>
                                            </div>


                                        </div>

                                        <div className="flex items-center justify-evenly  gap-3 mt-2">
                                            <button className="text-black hover:underline"><Link to="/view-profile"> View Profile </Link> </button>
                                            <button className="text-black hover:underline" onClick={logoutHandler}> Logout</button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar;

