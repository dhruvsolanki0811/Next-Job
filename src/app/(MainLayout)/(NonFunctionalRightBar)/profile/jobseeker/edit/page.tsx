import JobseekerProfileEdit from "@/components/JobseekerProfileEdit/JobseekerProfileEdit";
import { Navbar } from "@/components/components";
import React from "react";

function page() {
  return (
    <>
      <Navbar>Edit Profile</Navbar>
      <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
        <JobseekerProfileEdit/>
      </div>
    </>
  );
}

export default page;
