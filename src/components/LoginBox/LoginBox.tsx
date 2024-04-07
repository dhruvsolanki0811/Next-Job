"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function LoginBox() {
  const [userType, setUserType] = useState<"Jobseeker" | "Organization">(
    "Jobseeker"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session, status);
  }, [status]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the state based on the login type

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    // Implement your login logic here
    // You can use user and org email/password for authentication
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    const signInData = await signIn("credentials", {
      email: email,
      password: password,
      type: userType,
      redirect: false,
    }); 
    if (signInData?.error) {
      toast.error("Incorrect Details");
    } else {
      setPassword("");
      setEmail("");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleLogin(e);
        }}
        method="POST"
        className="mt-[3rem] gap-[1rem] rounded-[10px] border-[1px] p-[1rem] flex flex-col items-center  w-[20rem] h-[max-content] mt-4 "
      >
        <div className="slider-login flex justify-between w-full">
          <div
            className={`header-user w-[50%] flex justify-center cursor-pointer ${
              userType == "Jobseeker" ? "" : "hover:text-[#13883e]"
            }`}
            onClick={() => setUserType("Jobseeker")}
            style={
              userType == "Jobseeker" ? { borderBottom: "3px solid black" } : {}
            }
          >
            Jobseeker
          </div>
          <div
            className={`header-org w-[50%] flex justify-center cursor-pointer ${
              userType == "Organization" ? "hover:text-[#13883e]" : ""
            }`}
            onClick={() => setUserType("Organization")}
            style={
              userType == "Organization"
                ? { borderBottom: "3px solid black" }
                : {}
            }
          >
            Organization
          </div>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          className="w-full text-[13px] h-10 border-[2px] p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          className="w-full text-[13px] h-10 border-[2px] p-2 rounded"
        />

        <div className="login-btn-wrapper ">
          <button
            type="submit"
            className="submit-btn rounded-full px-3 py-1 text-[14px] text-[white] hover:bg-green-600 bg-green-500  "
          >
            Login
          </button>
        </div>

        <div
          onClick={() => {
            if (userType == "Jobseeker") {
              //   navigate("/signup/jobs");
            } else if (userType == "Organization") {
              //   navigate("/signup/organization");
            }
          }}
          className="signin-head text-[13px] cursor-pointer hover:text-[#13883e]"
        >
          {userType == "Jobseeker"
            ? "Don't have a user account? Join Now"
            : "Hey! Join as an Organization!  "}
        </div>
      </form>
    </>
  );
}

export default LoginBox;
