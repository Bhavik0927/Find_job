import { CiBookmark } from "react-icons/ci";

const JobCard = () => {
    return (
        <div className="flex justify-between gap-4 p-5 rounded-md shadow-xl bg-white border border-gray-100">

            <div>
                <p className="text-sm text-gray-600">2 days ago</p>
                <div className="flex mt-2 items-center  ">
                    <button className="w-10 h-10 border border-gray-200"><img src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" alt="company" /></button>

                    <div className="ml-2">
                        <h1 className="font-medium text-lg">Company Name</h1>
                        <p className="text-sm text-gray-600">India</p>
                    </div>

                </div>
                <h1 className="font-bold text-lg my-1">Title</h1>
                <p className="text-sm text-gray-600 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, excepturi. Lorem ipsum dolor sit amet.</p>
                <div className="flex items-center flex-wrap gap-1">
                    <div className="inline-block px-2 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                        <h2 className="text-black font-bold">12 Positions</h2>
                    </div>
                    <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                        <h2 className="text-black font-bold">Part Time</h2>
                    </div>
                    <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                        <h2 className="text-black font-bold">24 LPA</h2>
                    </div>
                </div>

                <div className="mt-2 flex gap-2">
                    <button className="inline-block px-3 py-1 text-sm font-bold text-black border border-gray-400  rounded-full cursor-pointer ">Details</button>

                    <button className="inline-block px-3 py-1 text-sm font-bold text-white bg-red-600  rounded-full cursor-pointer">Save For Later</button>
                </div>
            </div>
            <button className="text-lg  font-bold  rounded-full bg-gray-100 h-10 w-[5.25rem] flex items-center justify-center hover:bg-gray-200"> <CiBookmark /> </button>

        </div>
    )
}

export default JobCard