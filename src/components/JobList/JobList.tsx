"use client";
import { useFetchAllJobs } from "@/hooks/useJobData";
import React, { useEffect } from "react";
import { JobCard } from "../components";
import { JobProfile } from "@/types/type";
import { useFilterStore } from "@/store/filterStore";

function JobList() {
  const { data: jobs, isLoading ,refetch} = useFetchAllJobs();
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
        jobs && (
          <>
            <div className="flex flex-col  h-full w-full overflow-x-none overflow-y-auto">
              {jobs.map((job: JobProfile) => (
                <JobCard key={job.id} job={job}></JobCard>
              ))}
            </div>
          </>
        )
      )}
    </>
  );
}

export default JobList;
