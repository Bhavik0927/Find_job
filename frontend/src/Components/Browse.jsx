import Navbar from './Navbar';
import JobCard from './JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSearchQuery } from '@/store/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job);
  console.log(allJobs);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold my-3'>Search Results ({allJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>

          {
            allJobs?.map((job) => {
              return (
                <JobCard job={job} key={job._id} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Browse