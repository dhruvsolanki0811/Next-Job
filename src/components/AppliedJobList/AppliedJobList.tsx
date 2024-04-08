import { useFetchJobsWithApplicationStatus } from "@/hooks/useJobData";
import React from "react";
import { JobCard } from "../components";

function AppliedJobList({status}:{status:string}) {
  const {data:jobs,isLoading}=useFetchJobsWithApplicationStatus(status)
  return (
    <>
      <div className="flex flex-col  h-full w-full overflow-x-none overflow-y-auto">
        {isLoading?"Loading":(jobs)&& jobs.map(job=>
          <JobCard job={job} status={job.applications&&job.applications[0].status}></JobCard>
        )}
      </div>
    </>
  );
}

export default AppliedJobList;
