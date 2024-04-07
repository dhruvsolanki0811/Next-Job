import { JobseekerRegistrationForm, Navbar } from "@/components/components";
import React from "react";

function page() {
  return (
    <>
      <Navbar>Jobseeker Registration</Navbar>
      <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex  justify-center">
        <JobseekerRegistrationForm></JobseekerRegistrationForm>
      </div>
    </>
  );
}

export default page;
