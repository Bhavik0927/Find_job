import { useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setAuthUser } from "@/store/authSlice";
import { toast } from "react-toastify";


const UpdateProfileDialog = ({ open, setIsOpen }) => {
    const [loading, setLoading] = useState(false);
    const {user} = useSelector(store => store.auth);

    const [input,setInput] = useState({
        fullName:user?.fullName,
        email:user?.email,
        phoneNumber:user?.phoneNumber,
        bio:user?.profile?.bio,
        skills:user?.profile?.skills?.map(skill =>skill),
        file:user?.profile?.resume
    })

    const dispatch = useDispatch();

    const changeEventHandler = (e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const fileChangeHandler = (e) =>{
        const file = e.target.files?.[0];
        setInput({...input, file});
    }
    const submitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullName",input.fullName);
        formData.append("email",input.email);
        formData.append("phoneNumber",input.phoneNumber);
        formData.append("bio",input.bio);
        formData.append("skills",input.skills);
        if(input.file){
            formData.append("file",input.file);
        }
        try {
            setLoading(true);
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                },
                withCredentials:true
            });
            if(res.data.success){
                dispatch(setAuthUser(res.data.user));
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }finally{
            setLoading(false);
        }
        setIsOpen(false);
        
    }
    return (
        <div >
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setIsOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label
                                    htmlFor="name"
                                    className="text-right">Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="fullName"
                                    value={input.fullName}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg py-2 px-2"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <label
                                    htmlFor="email"
                                    className="text-right">Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg py-2 px-2"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <label
                                    htmlFor="number"
                                    className="text-right">Mobile No
                                </label>
                                <input
                                    type="number"
                                    id="number"
                                    name="number"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg py-2 px-2"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <label
                                    htmlFor="bio"
                                    className="text-right">Bio
                                </label>
                                <input
                                    type="text"
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg py-2 px-2"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <label
                                    htmlFor="skills"
                                    className="text-right">Skills
                                </label>
                                <input
                                    type="text"
                                    id="skills"
                                    name="skills"
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className="col-span-3 rounded-lg py-2 px-2"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <label
                                    htmlFor="file"
                                    className="text-right">Resume
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    onChange={fileChangeHandler}
                                    accept="application/pdf"
                                    className="col-span-3 rounded-lg py-2"
                                />
                            </div>

                        </div>
                        <DialogFooter>
                            {
                                loading ? <button className="w-full flex gap-2 items-center justify-center bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold"><Loader />Please wait </button> : <button type="submit" className="w-full bg-black text-white py-1 rounded-md mt-6 font-semibold hover:font-bold">Update</button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog