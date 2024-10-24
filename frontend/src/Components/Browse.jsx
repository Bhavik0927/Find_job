import Navbar from './Navbar';
import JobCard from './JobCard';

const randomJobs = [1, 2, 3,4 ,5 ,6 ,7];

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold my-3'>Search Results ({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>

          {
            randomJobs.map((item, index) => {
              return (
                <JobCard key={index} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Browse