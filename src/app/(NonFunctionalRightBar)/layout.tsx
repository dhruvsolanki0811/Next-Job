import { Rightbar } from "@/components/components";
import React from "react";

function NonFunctionRightBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="content-wrapper w-[60%] h-[100vh] ">
        {children}
      </div>
      <Rightbar></Rightbar>
    </>
  );
}

export default NonFunctionRightBarLayout;
