"use client";

import { WithAuthSeeker } from "@/components/HOC/withAuthSeeker";
import JobseekerProfile from "@/components/JobseekerProfile/JobseekerProfile";
import { Navbar } from "@/components/components";
import { useSession } from "next-auth/react";
import React from "react";

function page() {
  const { data: auth } = useSession();

  return (
    <>
      <Navbar>@{auth?.user.username}</Navbar>
      <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
        {/* <CompanyDetails username={auth?.user.username}></CompanyDetails> */}
        <JobseekerProfile></JobseekerProfile>
      </div>
    </>
  );
}

export default WithAuthSeeker(page);
