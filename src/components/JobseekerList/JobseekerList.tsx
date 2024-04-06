'use client'
import { useFetchAllJobseekers } from '@/hooks/useJobseekerData';
import React from 'react'
import { JobseekerBox } from '../components';

function JobseekerList() {
    const { data: jobseekers, isLoading } = useFetchAllJobseekers();
  return (
    <>
        {isLoading ? (
        <>Loading</>
      ) : (
        jobseekers && (
          <div className=" max-sm:h-[73vh] h-[83vh] flex gap-[18px] flex-wrap justify-center  w-full overflow-x-hidden overflow-y-auto px-3 py-2">
           <> {[...jobseekers,...jobseekers,...jobseekers].map((jobseeker) => (
              <JobseekerBox jobseeker={jobseeker}></JobseekerBox>
            ))}</>
          </div>
        )
      )}

    </>
  )
}

export default JobseekerList