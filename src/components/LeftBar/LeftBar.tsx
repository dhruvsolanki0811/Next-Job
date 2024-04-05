import React from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { PiHandshake, PiSuitcaseSimpleDuotone } from "react-icons/pi";

function Leftbar() {
  return (
    <>
      <>
        <div className="side-section  max-sm:hidden w-[20%] h-[100vh] border-l-[1px] border-l-[solid] border-l-border-light">
          <div className="logo-container flex h-[7rem] w-full items-center justify-center ">
            <div className="text-wrapper">JobCom</div>
          </div>
          <div className="nav-item cursor-pointer s flex flex-col w-full">
            <div className="nav-item cursor-pointer  border-solid border-[1px] border-[#22C55E] hover:text-white hover:bg-[#22c55e] flex items-center gap-2 text-[16px]  font-medium	p-2 m-1">
              <PiSuitcaseSimpleDuotone className="nav-item cursor-pointer s-logo"></PiSuitcaseSimpleDuotone>
              Jobs
            </div>
            <div className="nav-item cursor-pointer  border-solid border-[1px] border-[#22C55E] hover:text-white hover:bg-[#22c55e] flex items-center gap-2 text-[16px] font-medium p-2 m-1 ">
              <IoPeopleOutline className="nav-item cursor-pointer s-logo"></IoPeopleOutline>
              People
            </div>
            <div className="nav-item cursor-pointer  border-solid border-[1px] border-[#22C55E] hover:text-white hover:bg-[#22c55e] flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              <HiOutlineBuildingOffice className="nav-item cursor-pointer s-logo"></HiOutlineBuildingOffice>
              Company
            </div>
            <div className="nav-item cursor-pointer  border-solid border-[1px] border-[#22C55E] hover:text-white hover:bg-[#22c55e] flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              <PiHandshake className="nav-item cursor-pointer s-logo "></PiHandshake>
              Connects
            </div>

            <div className="nav-item cursor-pointer  overflow-hidden border-solid border-[1px] border-[#22C55E] hover:text-white hover:bg-[#22c55e] flex items-center gap-2 text-[16px] font-medium p-2 m-1">
                Login{" "}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Leftbar;
