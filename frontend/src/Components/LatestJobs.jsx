import { LatestJobCard } from "./LatestJobCard"

const randerJobs = [1, 2, 3, 4, 5]
const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold"><span className="text-red-600 ">Latest & Top </span> Job Openings</h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {
          randerJobs.map((item, index) => <LatestJobCard key={index} />)
        }
      </div>
    </div>
  )
}

export default LatestJobs