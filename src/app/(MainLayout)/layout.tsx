import { Leftbar } from "@/components/components";
import React from "react";

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Leftbar></Leftbar>
      {children}
    </>
  );
}

export default MainLayout;
