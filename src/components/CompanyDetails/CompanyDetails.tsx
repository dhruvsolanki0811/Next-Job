'use client'
import { organizationPlaceHolder } from "@/assets/assets";
import { useFetchSingleOrganization } from "@/hooks/useOrganizationData";
import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

function CompanyDetails({ username }: { username: string }) {
  const { data: organization, isLoading } =
    useFetchSingleOrganization(username);
  return (
    <>
      {" "}
      {isLoading ? (
        <>Loading</>
      ) : (
        organization && (
          <div className=" h-full   flex flex-col gap-2 w-full overflow-x-none overflow-y-auto ">
            <div className="intro-sec flex flex-col  w-full  mt-5 items-center border-b-[1px] border-b-solid border-b-[#e1e4e8] pb-3">
              <div className="image-container flex justify-center items-center h-[5rem] w-[5rem] border-[2px] border-solid border-[#22C55E] p-[1px]">
                {organization.profilePic ? (
                  <img
                    src={`${organization.profilePic}`}
                    className="h-full w-full  object-cover "
                  />
                ) : (
                  <Image
                    alt=""
                    src={organizationPlaceHolder}
                    className="h-full w-full  object-contain  p-4"
                  />
                )}
              </div>
              <div className="header-username font-medium text-[16px] mt-2">
                {organization?.name}
              </div>
              <div className="header-username font-medium flex gap-1 items-center text-[14px] mt-2">
                
              <IoLocationOutline />
                {organization?.location}
              </div>

              {organization.website && (
                <div className="header-email text-[14px] mt-3 flex items-center gap-1 justify-center">
                  <TbWorld />

                  {organization?.website}
                </div>
              )}
              <div className="header-email text-[14px] color-lgt-grey mt-3 flex items-center gap-1 justify-center">
              <MdDateRange />
Established in {organization?.foundedAt}
              </div>
            </div>
            <div className="about-sec flex flex-col items-center justify-center mt-2 border-b-[1px] border-b-solid border-b-[#e1e4e8] ">
              <div className=" text-[14px]">
                About {organization?.name}
              </div>
              <div className="header-about-txt text-[14px] text-grey-100 text-justify ps-7 pe-7 py-4 ">
                {organization?.overview} 
              </div>
            </div>
            <div className="about-sec flex flex-col justify-center mt-2 items-center">
              <div className="header-about text-[14px]">
                {/* {jobList &&
            jobList &&
            organizationPage &&
            jobList.filter(
              (job) => job.organization_name == organizationPage.name
            ).length > 0
              ? "Jobs"
              : ""} */}
              </div>
              {/* <div className="people-grid flex p-3  w-full ">
            {jobList &&
              organizationPage &&
              jobList
                .filter(
                  (job) => job.organization_name == organizationPage.name
                )
                .slice(0, 3)
                .map((job,key) => (
                  <div key={key}>
                    <div
                      onClick={() => {
                        navigate(`/job/${job.organization_name.replace(/\s/g, "").toLowerCase()}-${job.role.replace(/\s/g, "").toLowerCase()}-${job.id.toString()}`);
                      }}
                      className="job-box  w-[17rem] cursor-pointer flex flex-col  ps-3 pe-3  border-[1px]  border-solid border-[#c7c8c9] rounded-[10px]"
                    >
                      <div className="follow-container flex justify-between items-center ">
                        <div className="profile-pic  h-[2.7rem] w-[2.7rem] mt-2 overflow-hidden  rounded-full">
                          <img
                            className=" object-cover  h-full w-full"
                            src={
                              job.organization_profile_pic === null
                                ? unknown
                                : `https://res.cloudinary.com/dlkqz4nqp/image/upload/v1/${job.organization_profile_pic}`
                            }
                          ></img>
                        </div>
                      </div>

                      <div className="people-username text-[14px] mt-1">
                        {job.role}
                      </div>
                      <div className="people-desc color-lgt-grey w-full text-[12px] pe-4 mb-1">
                        {job.employee_type} • ₹{job.salary}L •{" "}
                        {job.required_experience}Y experience • posted on{" "}
                        {formatTimestampToDDMonthYYYY(job.created_at)}
                      </div>
                    </div>
                  </div>
                ))}
          </div> */}
            </div>
          </div>
        )
      )}
    </>
  );
}

export default CompanyDetails;
