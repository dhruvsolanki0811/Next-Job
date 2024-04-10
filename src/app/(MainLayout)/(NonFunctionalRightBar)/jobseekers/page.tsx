import { JobseekerList, Navbar } from "@/components/components";
import SearchSectionWrapper from "@/components/ui/SearchSectionWrapper";
import React from "react";

function page() {
  return (
    <>
      <Navbar>Users</Navbar>
      <SearchSectionWrapper>
        <input
          type="text"
          placeholder="Search"
          className="search-box"    
        />
      </SearchSectionWrapper>
      <JobseekerList></JobseekerList>
    </>
  );
}

export default page;
