"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineBuildingOffice, HiOutlineUser } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { PiHandshake, PiSuitcaseSimpleDuotone } from "react-icons/pi";

function Leftbar() {
  const router=useRouter()
  const { data: authUser } = useSession();
  return (
    <>
      <>
        <div className="side-section  max-sm:hidden w-[20%] h-[100vh] border-l-[1px] border-l-[solid] border-l-[#E1E4E8]">
          <div className="logo-container flex h-[7rem] w-full items-center justify-center ">
            <div className="text-wrapper font-900 text-[16px]">JobCom</div>
          </div>
          <div className=" cursor-pointer flex flex-col w-full">
            <div onClick={()=>router.push(`/jobs`)}  className="hover:bg-green-500 hover:text-white cursor-pointer  border-solid border-[1px] border-green-500 flex items-center gap-2 text-[16px]  font-medium	p-2 m-1">
              <PiSuitcaseSimpleDuotone className=" cursor-pointer text-[20px]"></PiSuitcaseSimpleDuotone>
              Jobs
            </div>
            <div onClick={()=>router.push(`/jobseekers`)} className="hover:bg-green-500 hover:text-white cursor-pointer  border-solid border-[1px] border-green-500 flex items-center gap-2 text-[16px] font-medium p-2 m-1 ">
              <IoPeopleOutline className=" cursor-pointer text-[20px]"></IoPeopleOutline>
              People
            </div>
            <div onClick={()=>router.push(`/companies`)} className="hover:bg-green-500 hover:text-white cursor-pointer  border-solid border-[1px] border-green-500 flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              <HiOutlineBuildingOffice className=" cursor-pointer text-[20px]"></HiOutlineBuildingOffice>
              Companies
            </div>
            <div onClick={()=>router.push(`/connections`)} className="hover:bg-green-500 hover:text-white cursor-pointer  border-solid border-[1px] border-green-500   flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              <PiHandshake className=" cursor-pointer text-[20px] "></PiHandshake>
              Connects
            </div>

            {authUser ? (
              <>
                <div className="hover:bg-green-500 hover:text-white cursor-pointer  overflow-hidden border-solid border-[1px] border-green-500   flex items-center gap-2 text-[16px] font-medium p-2 m-1">
                  <div className="profile-pic-container h-[20px] w-[20px] relative">
                    {authUser.user?.image ? (
                      <Image
                        alt=""
                        fill
                        className=" object-fill"
                        src={authUser.user?.image}
                      ></Image>
                    ) : (
                      <HiOutlineUser className=" cursor-pointer text-[20px] " />
                    )}
                  </div>
                  Profile
                </div>
                <div onClick={()=>signOut()} className="hover:bg-green-500 hover:text-white cursor-pointer  overflow-hidden border-solid border-[1px] border-green-500   flex items-center gap-2 text-[16px] font-medium p-2 m-1">
                  <IoIosLogOut className=" cursor-pointer text-[20px] " />
                  Logout
                </div>
              </>
            ) : (
              <div onClick={()=>router.push(`/signin`)} className="hover:bg-green-500 hover:text-white cursor-pointer  overflow-hidden border-solid border-[1px] border-green-500   flex items-center gap-2 text-[16px] font-medium p-2 m-1">
                <HiOutlineUser className=" cursor-pointer text-[20px] " />
                Login{" "}
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
}

export default Leftbar;
