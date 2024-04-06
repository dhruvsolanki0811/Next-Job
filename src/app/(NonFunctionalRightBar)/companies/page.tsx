import CompanyBox from "@/components/CompanyBox/CompanyBox";
import { BottomBar, CompanyList, Navbar } from "@/components/components";
import { SearchSectionWrapper } from "@/components/ui/ui";
import React from "react";

function page() {
  return (
    <>
      <Navbar>Companies</Navbar>
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
      <CompanyList></CompanyList>
    </>
  );
}

export default page;
