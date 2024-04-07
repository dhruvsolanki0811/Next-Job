"use client";
import { useFetchAllOrganizations } from "@/hooks/useOrganizationData";
import React from "react";
import { CompanyBox } from "../components";

function CompanyList() {
  const { data: organizations, isLoading } = useFetchAllOrganizations();
  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        organizations && (
          <div className="max-xl:block  max-sm:h-[73vh] max-h-[83vh] flex gap-[20px]  flex-wrap items-start justify-center  w-full overflow-x-hidden overflow-y-auto px-3 py-5 max-xl:py-[0px]">
            <>
              {" "}
              {organizations
                .map((organization) => (
                  <CompanyBox key={organization.id} organization={organization}></CompanyBox>
                ))}
            </>
          </div>
        )
      )}
    </>
  );
}

export default CompanyList;
