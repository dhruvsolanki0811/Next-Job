"use client";
import React, { useState } from "react";
import { jobseekerPlaceHolder } from "@/assets/assets";
import { useFetchAllJobseekers } from "@/hooks/useJobseekerData";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { JobSeeker } from "@/types/type";
import { useSession } from "next-auth/react";

function RightBarJobseekerList() {
  const router=useRouter()
  const {status,data:authData} =useSession()
  const [randNum] = useState<number>(Math.random);
  const { data: jobseekers } = useFetchAllJobseekers();
  return (
    <>
      <div className="people-rec-section  w-full flex flex-col mt-6 ">
        <div onClick={()=>router.push('/jobseekers')} className="text-holder cursor-pointer flex justify-between items-center text-[14px] font-medium ms-3 me-3">
          People on JobCom
          <FaArrowRightLong />
        </div>
        <div className="user-desc flex flex-col gap-[2px] w-full ps-2 pe-2 mt-1 ps-3">
          {jobseekers ? (
            jobseekers
              .sort(function () {
                return 0.5 - randNum;
              }).filter((jobseeker)=>{
                if(status=='authenticated' && authData.user.username==jobseeker.username){
                    return false
                }
                return true
              })
              .slice(0, 3)

              .map((jobseeker: JobSeeker) => {
                return (
                  <div onClick={()=>router.push(`/jobseekers/${jobseeker.username}`)} key={jobseeker.id}>
                    <div  className="profile-pic-follow cursor-pointer mt-1 flex flex-between items-center">
                      <div className="profile-pic h-[2.3rem] w-[2.3rem] flex flex-between justify-center items-center  mt-2 overflow-hidden border-[1px] rounded-full">
                        {jobseeker.profilePic ? (
                          <img
                            className=" object-fill  h-full w-full"
                            alt=""
                            src={`${jobseeker.profilePic}`}
                          ></img>
                        ) : (
                          <Image
                            src={jobseekerPlaceHolder}
                            alt=""
                            className=" object-contain  h-full w-full"
                          ></Image>
                        )}
                      </div>
                      <div className="people-username text-[13px] mt-2 ms-2">
                        {`${jobseeker.firstName} ${jobseeker.lastName}`}
                      </div>
                    </div>
                    <div className="people-desc truncate color-lgt-grey w-full text-[13px] mt-2 pe-2 mb-1">
                      {jobseeker.description}
                    </div>
                    </div>
                );
              })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default RightBarJobseekerList;
