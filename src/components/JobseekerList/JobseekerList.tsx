"use client";
import { useFetchAllJobseekers } from "@/hooks/useJobseekerData";
import React from "react";
import { JobseekerBox } from "../components";

function JobseekerList() {
  const { data: jobseekers, isLoading } = useFetchAllJobseekers();
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
                  <JobseekerBox jobseeker={jobseeker}></JobseekerBox>
                ))}
            </>
          </div>
        )
      )}
    </>
  );
}

export default JobseekerList;
