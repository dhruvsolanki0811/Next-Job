import { jobseekerPlaceHolder, organizationPlaceHolder } from "@/assets/assets";
import { JobSeeker } from "@/types/type";
import Image from "next/image";
import React from "react";
import { DevIcon } from "../components";

function JobseekerBox({ jobseeker }: { jobseeker: JobSeeker }) {
  return (
    <>
      <div className="max-xl:my-[15px] max-xl:w-full w-[45%]  h-[11.3rem] border border-[#E1E4E8] py-[10px] px-[5px] rounded-[10px] cursor-pointer flex flex-col     ps-3 pe-3">
        <div className="people-container flex justify-between items-center">
          <div className="profile-pic  h-[3rem] w-[3rem]  overflow-hidden border-[1px] rounded-full flex justify-center items-center">
            {jobseeker.profilePic == null ? (
              <Image
                className=" object-contain  h-[70%] w-[70%]"
                alt=""
                src={jobseekerPlaceHolder}
              />
            ) : (
              <img
                className="  object-fill h-full w-full "
                src={jobseeker.profilePic}
              ></img>
            )}
          </div>

          {/* <div className="follow-btn text-xs ps-2 pe-2 border-[1px] rounded border-solid border-black">
                      Follow
                    </div> */}
        </div>

        <div className="people-jobseekername text-[14px] mt-1 flex items-center gap-2">
          {`${jobseeker.firstName} ${jobseeker.lastName}`}
          <span className="people-jobseekername  font-medium text-[14px]">
            @{jobseeker.username}
          </span>
        </div>

        <div className="job-skills mt-2 flex gap-1 flex-wrap items-center w-full  text-black">
          {(jobseeker.skills.length < 3
            ? jobseeker.skills
            : jobseeker.skills.slice(0, 3)
          ).map((skill, i) => {
            return (
              <div
                key={i}
                className="skills flex gap-1 items-center text-[12px] font-light pe-2 ps-2  border-[0.1px] truncate  border-solid rounded-[10px]"
              >
                <DevIcon skillName={skill}></DevIcon>
                {skill}
              </div>
            );
          })}

          {jobseeker.skills.length > 3 && (
            <div className="skills text-[11px]  pe-2 ps-2  border-[0.1px]  border-solid rounded-[10px]">
              +{jobseeker.skills.length - 3}
            </div>
          )}
        </div>
        <div className="people-card-desc mt-2 color-lgt-grey w-full text-[12px] pe-2 text-three-line">
          {jobseeker.description}
        </div>
      </div>
    </>
  );
}

export default JobseekerBox;
