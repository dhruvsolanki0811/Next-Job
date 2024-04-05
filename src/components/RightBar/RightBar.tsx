import React from "react";
import { JobseekerList, OrganizationList } from "../components";

function Rightbar() {
  return (
    <>
      <div className="fav-section w-[20%] h-[100vh]  border-x-[1px] border-x-[solid] border-x-[#E1E4E8]">
        <div className="top-section  flex justify-between  items-center p-5 gap-5 border-b-[1px] border-b-[solid] border-b-[#E1E4E8]">
          <div
            className=" cursor-pointer flex items-center text-[14px]"
          >
              Login
          </div>

        </div>
        <JobseekerList/>
        <OrganizationList/>
      </div>
    </>
  );
}

export default Rightbar;
