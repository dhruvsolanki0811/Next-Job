import { CompanyRegistrationForm, Navbar } from "@/components/components";
import React from "react";

function page() {
  return (
    <>
      <Navbar>Organization Registration</Navbar>
      <div className="scrollable-content max-sm:h-[80vh] h-[90vh] w-full flex items-center justify-center">
          <CompanyRegistrationForm></CompanyRegistrationForm>
      </div>
    </>
  );
}

export default page;
