"use client";
import { useFetchAllJobseekers } from "@/hooks/useJobseekerData";
import React, { useEffect } from "react";
import { JobseekerBox } from "../components";
import { useFilterStore } from "@/store/filterStore";


function JobseekerList() {
  const { data: jobseekers, isLoading ,refetch} = useFetchAllJobseekers();
  const {filters}=useFilterStore()
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      refetch();
    }, 500);
    return () => clearTimeout(timeoutID);
  }, [filters.search]);
  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        jobseekers && (
          <div className="max-xl:block max-sm:h-[73vh] max-h-[83vh] flex gap-[18px] flex-wrap justify-center  w-full overflow-x-hidden overflow-y-auto px-3 py-5 max-xl:py-[0px]">
            <>
              {" "}
              {jobseekers
                .map((jobseeker) => (
                  <JobseekerBox key={jobseeker.id} jobseeker={jobseeker}></JobseekerBox>
                ))}
            </>
          </div>
        )
      )}
    </>
  );
}

export default JobseekerList;
