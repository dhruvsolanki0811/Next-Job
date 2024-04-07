import { LoginBox, Navbar } from "@/components/components";
import React from "react";

function LoginPage() {
  return (
    <>
      <Navbar>Organization Registration</Navbar>
      <div className="scrollable-content max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
        <LoginBox></LoginBox>
      </div>
    </>
  );
}

export default LoginPage;
