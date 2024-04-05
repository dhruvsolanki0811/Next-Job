import React from "react";
import { RightBarJobseekerList, RightBarOrganizationList } from "../components";

function Rightbar() {
  return (
    <>
      <div className="fav-section max-md:hidden w-[20%] h-[100vh]  border-r-[1px] border-r-[solid] border-r-border-light">
        <div className="top-section  flex justify-between  items-center px-5 gap-5 border-b-[1px] border-b-[solid] border-b-border-light h-[10vh] max-h-[10vh]">
          <div
            className=" cursor-pointer flex items-center text-[14px]"
          >
              Login
          </div>

        </div>
        <RightBarJobseekerList/>
        <RightBarOrganizationList/>
      </div>
    </>
  );
}

export default Rightbar;
