import { useState } from "react";
import Navbar from "./Navbar"
import { CiEdit } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdContactPhone } from "react-icons/md";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import { Badge } from "./ui/badge";


const isResume = true;

const Profile = () => {

    const [open, setIsOpen] = useState(false);
    const { user } = useSelector(store => store.auth);
    console.log(user);
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className="flex justify-between mb-4">

                    <div className="flex mt-2 items-center  ">
                         <button className="w-12 h-12 border border-gray-200 rounded-full overflow-hidden"><img src={user?.profile?.profilePhoto} alt="company" /></button> 

                        <div className="ml-2">
                            <h1 className="font-medium text-lg">{user?.fullName}</h1>
                            <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
                        </div>

                    </div>

                    <button className="text-2xl text-right  ml-5" onClick={() => setIsOpen(true)} > <CiEdit /></button>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <CiMail />
                        <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdContactPhone />
                        <span>{user?.phoneNumber}</span>
                    </div>

                </div>

                <div>
                    <h1>Skills</h1>
                    <div className="flex items-center gap-1">
                        {
                            user?.profile?.length !== 0 ? user?.profile?.skills?.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label className="text-md font-bold" >Resume</label>
                    {
                        isResume ? <a target="blank" href={user?.profile?.resume} className="text-blue-500 w-full hover:underline cursor-pointer">{user?.profile?.resumeOriginalName}</a> : <span>Not Applicable</span>
                    }
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl ">
                <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                <AppliedJobTable />
            </div>

            <UpdateProfileDialog open={open} setIsOpen={setIsOpen} />
        </>
    )
}

export default Profile