import React, { ReactNode } from "react";
import { RightBarJobseekerList, RightBarOrganizationList } from "../components";

function Rightbar({children}:{children:ReactNode}) {
  return (
    <>
      <div className="fav-section max-md:hidden w-[20%] h-[100vh]  border-r-[1px] border-r-[solid] border-r-[#E1E4E8]">
        <div className="top-section  flex justify-between  items-center px-5 gap-5 border-b-[1px] border-b-[solid] border-b-[#E1E4E8] h-[10vh] max-h-[10vh]">
          <div
            className=" cursor-pointer flex items-center text-[14px]"
          >
              Login
          </div>

        </div>
        {children}
      </div>
    </>
  );
}

export default Rightbar;
