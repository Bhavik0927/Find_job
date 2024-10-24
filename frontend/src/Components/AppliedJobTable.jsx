
const AppliedJobTable = () => {
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
            [1, 2, 3].map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-5">17-07-2023</td>
                <td className="py-2 px-5">Frontend Developer</td>
                <td className="py-2 px-5">Microsoft</td>
                <td className="py-2 px-5 text-right"> <span className="inline-block px-2 py-1 text-right text-sm font-semibold text-black  border  border-gray-400  rounded-full cursor-pointer">Pending</span></td>
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