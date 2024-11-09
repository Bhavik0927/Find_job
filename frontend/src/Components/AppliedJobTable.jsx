import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job);
  console.log(allAppliedJobs);
  return (
    <div>
      <table>

        <thead>
          <tr className="w-full  border-b border-gray-300">
            <th className="py-2 px-4 text-center">Date</th>
            <th className="py-2 px-4 text-center">Job Role</th>
            <th className="py-2 px-4 text-center">Company</th>
            <th className="py-2 px-4 text-right">Status</th>
          </tr>
        </thead>

        <tbody>
          {
            allAppliedJobs?.length <= 0 ? <spna>You haven't applied any job yet</spna> : allAppliedJobs?.map((appliedJob) => (
              <tr key={appliedJob._id} className="border-b">
                <td className="py-2 px-5">{appliedJob?.createdAt?.split("T")[0]}</td>
                <td className="py-2 px-5">{appliedJob?.job?.title}</td>
                <td className="py-2 px-5">{appliedJob?.job?.company?.name}</td>
                <td className="py-2 px-5 text-right">
                  <span className={`${appliedJob?.status === 'rejected' ? 'bg-red-400' : appliedJob?.status === 'pending' ? 'bg-gray-400 text-white' : 'bg-green-400 text-white'} inline-block px-2 py-1 text-right text-sm font-semibold  border  border-gray-300  rounded-full cursor-pointer`} >{appliedJob?.status.toUpperCase()}</span>
                </td>
              </tr>
            ))

          }
        </tbody>
      </table>
    </div>
  )
}

export default AppliedJobTable;
// className="text-black font-bold"