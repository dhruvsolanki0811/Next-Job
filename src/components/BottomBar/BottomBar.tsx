"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { PiHandshakeDuotone, PiSuitcaseDuotone } from "react-icons/pi";

function BottomBar() {
  const { data: authData ,status} = useSession();
  const router = useRouter()

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  return (
    <>
      <div className="bottom-section max-sm:block hidden w-full flex justify-between  items-center border-t-[1px] border-t-[solid] border-t-[#E1E4E8] h-[10vh] max-h-[10vh]">
        <div className=" flex  justify-center items-center h-full   gap-1">
          <div
            onClick={() => authData?.user.role=='Organization'?router.push("/jobposted"):router.push("/")}
            className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px]  font-medium	m-3"
          >
            <PiSuitcaseDuotone className="nav-items-logo text-[20px]"></PiSuitcaseDuotone>
            {authData?.user.role == "Organization" ? "JobPosted" : "JobList"}
          </div>
          <div
            onClick={() => router.push("/jobseekers")}
            className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium m-3 "
          >
            <IoPeopleOutline className="nav-items-logo text-[20px]"></IoPeopleOutline>
            People
          </div>
          <div
            onClick={() => router.push("/companies")}
            className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium m-3"
          >
            <HiOutlineBuildingOffice className="nav-items-logo text-[20px]"></HiOutlineBuildingOffice>
            Company
          </div>
          {authData?.user.role === "Jobseeker" && (
            <div
              onClick={() => router.push("/connections/connections")}
              className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium m-3"
            >
              <PiHandshakeDuotone className="nav-items-logo text-[20px]"></PiHandshakeDuotone>
              Connects
            </div>
          )}
          {authData?.user.role === "Organization" && (
            <div
              onClick={() => router.push("/organization/jobposting")}
              className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium m-3"
            >
              <AiOutlineAppstoreAdd className="nav-items-logo text-[20px]"></AiOutlineAppstoreAdd>
              PostJob
            </div>
          )}
          <div
            // onClick={() => router.push("/signin")}
            onClick={toggleProfileDropdown}
            className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium m-3"
          >
            <LuUser2 className="nav-items-logo text-[20px]"></LuUser2>
            Profile
            {showProfileDropdown && (
              <div className="dropdown-menu cursor-pointer  absolute mt-[-3rem]  bg-white text-xs border rounded-md p-2 w-15  flex flex-col justify-center text-[13px]">
                {!authData?.user.email ? (
                  <>
                    <p onClick={()=>router.push('/signin')}>Login</p>
                    <p onClick={()=>router.push('/signup/jobseeker')}>Jobseeker Signup</p>
                    <p onClick={()=>router.push('/signup/company')}>Company Signup</p>
                  </>
                ) : (
                  <>
                    <p
                    // onClick={() => navigate(`/${user.userType}/us`)}
                    >
                      Profile
                    </p>
                    <p onClick={() => signOut()}>Logout</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
