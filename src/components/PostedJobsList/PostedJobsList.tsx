"use client";
import { useFetchJobsPostedByOrganzations } from "@/hooks/useJobData";
import React from "react";
import { JobCard } from "../components";

function PostedJobsList() {
  const { data: jobs, isLoading } = useFetchJobsPostedByOrganzations();
  return (
    <>
      <div className="flex flex-col  h-full w-full overflow-x-none overflow-y-auto">
        {isLoading?"Loading":(jobs)&& jobs.map(job=>
          <JobCard job={job} key={job.id}></JobCard>
        )}
      </div>
    </>
  );
}

export default PostedJobsList;
