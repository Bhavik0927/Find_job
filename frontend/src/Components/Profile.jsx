import Navbar from "./Navbar"
import { CiEdit } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdContactPhone } from "react-icons/md";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["HTML", "CSS", "Javascript"];

const Profile = () => {
    const isResume = true;
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className="flex justify-between mb-4">

                    <div className="flex mt-2 items-center  ">
                        <button className="w-12 h-12 border border-gray-200 rounded-full overflow-hidden"><img src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" alt="company" /></button>

                        <div className="ml-2">
                            <h1 className="font-medium text-lg">Full Name</h1>
                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ratione quos tempore obcaecati aperiam voluptatem!</p>
                        </div>

                    </div>

                    <button className="text-2xl text-right  ml-5"> <CiEdit /></button>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <CiMail />
                        <span>fashionkidaa5@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdContactPhone />
                        <span>7057350329</span>
                    </div>

                </div>

                <div>
                    <h1>Skills</h1>
                    <div className="flex items-center gap-1">
                        {
                            skills.length !== 0 ? skills.map((item, index) => {
                                return (<div className="inline-block px-2 py-1 text-sm font-semibold text-white border  border-gray-400  rounded-full cursor-pointer" key={index}>
                                    <h2 className="text-black font-bold">{item}</h2>
                                </div>)

                            }) : <span>Not Applicable</span>
                        }
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label className="text-md font-bold" >Resume</label>
                    {
                        isResume ? <a target="blank" href="https://google.com" className="text-blue-500 w-full hover:underline cursor-pointer">ResumeIT</a> : <span>Not Applicable</span>
                    }
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl ">
                <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                <AppliedJobTable />
            </div>
        </>
    )
}

export default Profile