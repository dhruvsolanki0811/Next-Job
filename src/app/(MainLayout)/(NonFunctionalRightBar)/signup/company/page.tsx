'use client'
import { WithoutAuth } from "@/components/HOC/withOutAuth";
import { CompanyRegistrationForm, Navbar } from "@/components/components";
import React from "react";

function page() {
  return (
    <>
      <Navbar>Organization Registration</Navbar>
      <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
          <CompanyRegistrationForm></CompanyRegistrationForm>
      </div>
    </>
  );
}

export default WithoutAuth(page);
