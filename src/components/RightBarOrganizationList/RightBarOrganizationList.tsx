"use client";
import { organizationPlaceHolder } from "@/assets/assets";
import { useFetchAllOrganizations } from "@/hooks/useOrganizationData";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function RightBarOrganizationList() {
  const [randNum] = useState<number>(Math.random);
  const { data: organizations } = useFetchAllOrganizations();
  return (
    <>
      <div className="people-rec-section  w-full flex flex-col mt-6 ">
        <div className="text-holder cursor-pointer flex justify-between items-center text-[14px] font-medium ms-3 me-3">
          Organizations on JobCom
          <FaArrowRightLong />
        </div>
        <div className="user-desc flex flex-col gap-[2px] w-full ps-2 pe-2 mt-1 ps-3">
          {organizations ? (
            organizations
              .sort(function () {
                return 0.5 - randNum;
              })
              .slice(0, 3)

              .map((org: any, i) => {
                return (
                  <div key={i}>
                    <div className="profile-pic-follow cursor-pointer mt-1 flex flex-between items-center">
                      <div className="profile-pic h-[2.3rem] w-[2.3rem] flex flex-between justify-center items-center  mt-2 overflow-hidden border-[1px] rounded-full">
                        {org.profilePic ? (
                          <img
                            className=" object-fill  h-full w-full"
                            alt=""
                            src={`${org.profilePic}`}
                          ></img>
                        ) : (
                          <Image
                            src={organizationPlaceHolder}
                            alt=""
                            className=" object-contain  h-full w-full"
                          ></Image>
                        )}
                      </div>
                      <div className="people-username text-[13px] mt-2 ms-2">
                        {org.name}
                      </div>
                    </div>
                    <div className="people-desc truncate color-lgt-grey w-full text-[13px] mt-2 pe-2 mb-1">
                      {org.overview}
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

export default RightBarOrganizationList;