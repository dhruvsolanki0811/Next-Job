import { JobList, Navbar } from "@/components/components";
import SearchSectionWrapper from "@/components/ui/SearchSectionWrapper";
import React from "react";

function page() {
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
