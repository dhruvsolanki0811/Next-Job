'use client'
import { JobList, Navbar } from "@/components/components";
import SearchSectionWrapper from "@/components/ui/SearchSectionWrapper";
import axios from "axios";
import React, { useEffect } from "react";

function page() {
  useEffect(()=>{
    axios.get('/api/jobs/jobseeker/accepted').then((data)=>console.log(data))
  },[])
  return (
    <>
      <Navbar>Jobs</Navbar>
      <SearchSectionWrapper>
        <input
          type="text"
          placeholder="Search"
          className="search-box"
          // value={search}
          // onChange={handleSearchInput}
          // onChange={handleSearchInput}
          // onKeyDown={handleEnter}
        />
      </SearchSectionWrapper>
      <div className="scrollable-content-wrapper max-sm:h-[73vh] h-[83vh] w-full ">
        <JobList></JobList>
      </div>
    </>
  );
}

export default page;
