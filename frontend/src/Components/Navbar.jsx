// import { Link } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

const Navbar = () => {

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);

    const {user} = useSelector(store => store.auth);

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
                                    src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                    onClick={togglePopover}
                                />

                                {isPopoverOpen && (
                                    <div className="absolute left-[-255%] -translate-x-1/2 mt-2 w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-700 ">
                                        <div className="flex gap-4 space-y-2">
                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="Avatar"
                                                className="w-10 h-10 rounded-full cursor-pointer"
                                            />
                                            <div>
                                                <h4 className="font-bold">Bhavik Tembhare</h4>
                                                <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet.</p>
                                            </div>


                                        </div>

                                        <div className="flex items-center justify-evenly  gap-3 mt-2">
                                            <button className="text-black hover:underline"><Link to="/view-profile"> View Profile </Link> </button>
                                            <button className="text-black hover:underline"> Logout</button>
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

