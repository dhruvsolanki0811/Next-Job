"use client";
import { useFetchAllJobs } from "@/hooks/useJobData";
import React from "react";
import { JobCard } from "../components";
import { JobProfile } from "@/types/type";

function JobList() {
  const { data: jobs, isLoading } = useFetchAllJobs();
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
