"use client";
import { useFetchAllOrganizations } from "@/hooks/useOrganizationData";
import React from "react";
import { CompanyBox } from "../components";

function CompanyList() {
  const { data: organizations, isLoading } = useFetchAllOrganizations();
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        organizations && (
          <div className=" max-sm:h-[73vh] h-[83vh] flex gap-[20px] flex-wrap justify-center  w-full overflow-x-hidden overflow-y-auto px-3 py-2">
           <> {[...organizations,...organizations,...organizations].map((organization) => (
              <CompanyBox organization={organization}></CompanyBox>
            ))}</>
          </div>
        )
      )}
    </>
  );
}

export default CompanyList;
