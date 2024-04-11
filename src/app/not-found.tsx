import {
  BottomBar,
  Leftbar,
  Navbar,
  RightBarJobseekerList,
  RightBarOrganizationList,
  Rightbar,
} from "@/components/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="main-wrapper flex justify-center items-center ">
      <div className="main-container flex max-lg:w-[100vw] w-[90vw]">
        <Leftbar></Leftbar>
        <div className="content-wrapper max-sm:w-[100%] max-md:w-[80%] w-[60%] h-[100vh] flex flex-col border-x-[1px] border-x-[solid] border-x-[#E1E4E8]">
          <Navbar>Not Found</Navbar>
          <div className="scrollable-content-wrapper flex items-center justify-center max-sm:h-[80vh] h-[90vh] w-full flex  justify-center">
            <div>
              <h2>Not Found</h2>
              <p>Could not find requested resource</p>
              <Link
              className="rounded-full mt-2 px-3 py-1 text-[14px] text-[white] hover:bg-green-600 bg-green-500   text-500 text-[16px] cursor-pointer " 
               href="/signin">Return Home</Link>
            </div>
          </div>
          <BottomBar></BottomBar>
        </div>
        <Rightbar>
          <RightBarJobseekerList></RightBarJobseekerList>
          <RightBarOrganizationList></RightBarOrganizationList>
        </Rightbar>
        <div></div>
      </div>
    </div>
  );
}
