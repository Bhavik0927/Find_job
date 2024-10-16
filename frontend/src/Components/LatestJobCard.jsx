
export const LatestJobCard = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border-gray-100">
            <div>
                <h1>Company Name</h1>
                <p>India</p>
            </div>
            <div>
                <h1>Job Title</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit?</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                    <h2 className="text-black font-bold">12 Positions</h2>

                </div>
                <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                    <h2 className="text-black font-bold">Part Time</h2>
                </div>
                <div className="inline-block px-3 py-1 text-sm font-semibold text-white border border-gray-400  rounded-full cursor-pointer">
                    <h2 className="text-black font-bold">24 LPA</h2>
                </div>
            </div>
        </div>
    )
}
