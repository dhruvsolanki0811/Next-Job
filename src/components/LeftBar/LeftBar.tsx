import React from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { PiHandshake, PiSuitcaseSimpleDuotone } from "react-icons/pi";

function Leftbar() {
  return (
    <>
      <>
        <div className="side-section w-[20%] h-[100vh] border-x-[1px] border-x-[solid] border-x-[#E1E4E8]">
          <div className="logo-container flex h-[7rem] w-full items-center justify-center ">
            <div className="text-wrapper">JobCom</div>
          </div>
          <div className="nav-items flex flex-col w-full">
            <div className="nav-item hover:bg-[#22C55E] border-solid border-[1px] border-[#22C55E] hover:text-white flex items-center gap-2 text-[16px]  font-medium	p-2 m-1">
              <PiSuitcaseSimpleDuotone className="nav-items-logo"></PiSuitcaseSimpleDuotone>
              Jobs
            </div>
            <div className="nav-item hover:bg-[#22C55E] border-solid border-[1px] border-[#22C55E] hover:text-white flex items-center gap-2 text-[16px] font-medium p-2 m-1 ">
              <IoPeopleOutline className="nav-items-logo"></IoPeopleOutline>
              People
            </div>
            <div className="nav-item hover:bg-[#22C55E] border-solid border-[1px] border-[#22C55E] hover:text-white flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              <HiOutlineBuildingOffice className="nav-items-logo"></HiOutlineBuildingOffice>
              Company
            </div>
            <div className="nav-item hover:bg-[#22C55E] border-solid border-[1px] border-[#22C55E] hover:text-white flex items-center gap-2 text-[16px] font-medium p-2 m-1">
              <PiHandshake className="nav-items-logo text-[22px]"></PiHandshake>
              Connects
            </div>

            <div className="nav-item overflow-hidden hover:bg-[#22C55E] border-solid border-[1px] border-[#22C55E] hover:text-white flex items-center gap-2 text-[16px] font-medium p-2 m-1">
                Login{" "}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Leftbar;
