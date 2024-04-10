"use client";
import { JobDetails, Navbar } from "@/components/components";
import { useFetchSingleJob } from "@/hooks/useJobData";
import React from "react";

function page({ params }: { params: { jobId: string } }) {
  const { data: job, isLoading } = useFetchSingleJob(
    params.jobId.split("-")[1]
  );
  return (
    <>
      {isLoading ? (<>
        <Navbar>{"Loading"}</Navbar>{" "}</>
      ) : (
        job && (
          <>
            <Navbar>
              {job.role} at {job.organization.name}
            </Navbar>{" "}
            <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] ">
                <JobDetails job={job}></JobDetails>
            </div>
          </>
        )
      )}
    </>
  );
}

export default page;
