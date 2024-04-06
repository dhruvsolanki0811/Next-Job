import React from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { PiHandshake, PiSuitcaseSimpleDuotone } from "react-icons/pi";

function Leftbar() {
  return (
    <>
      <>
        <div className="side-section  max-sm:hidden w-[20%] h-[100vh] border-l-[1px] border-l-[solid] border-l-[#E1E4E8]">
          <div className="logo-container flex h-[7rem] w-full items-center justify-center ">
            <div className="text-wrapper">JobCom</div>
          </div>
          <div className=" cursor-pointer s flex flex-col w-full">
            <div className=" cursor-pointer  border-solid border-[1px] border-green-500 hover:bg-green-500 hover:text-white  flex items-center gap-2 text-[16px]  font-medium	p-2 m-1">
              <PiSuitcaseSimpleDuotone className=" cursor-pointer s-logo"></PiSuitcaseSimpleDuotone>
              Jobs
            </div>
            <div className=" cursor-pointer  border-solid border-[1px] border-green-500 hover:bg-green-500 hover:text-white  flex items-center gap-2 text-[16px] font-medium p-2 m-1 ">
              <IoPeopleOutline className=" cursor-pointer s-logo"></IoPeopleOutline>
              People
            </div>
            <div className=" cursor-pointer  border-solid border-[1px] border-green-500 hover:bg-green-500 hover:text-white  flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              <HiOutlineBuildingOffice className=" cursor-pointer s-logo"></HiOutlineBuildingOffice>
              Company
            </div>
            <div className=" cursor-pointer  border-solid border-[1px] border-green-500 hover:bg-green-500 hover:text-white  flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              <PiHandshake className=" cursor-pointer s-logo "></PiHandshake>
              Connects
            </div>

            <div className=" cursor-pointer  overflow-hidden border-solid border-[1px] border-green-500 hover:bg-green-500 hover:text-white  flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              Login{" "}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Leftbar;
