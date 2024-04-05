"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { data: user } = useSession();
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add your logic to validate the username and password
    // For simplicity, let's assume validation is successful if both fields are non-empty
    console.log(password);

    const signInData = await signIn("credentials", {
      email: username,
      password: password,
      type: "Jobseeker",
      redirect: false,
    });
    if (signInData?.error) {
      console.log("Not Signined");
    } else {
      setPassword("");
      setUsername("");
    }
  };
useEffect(()=>{
    console.log(user?.user)
},[user?.user])
  return (
    <>
      <div>
        {user?.user?.email ? (
          <h2>Welcome, {username}!</h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="text"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit">Log In</button>
          </form>
        )}
        {user?.user && (
          <div className="logout-btn" onClick={() => signOut()}>
            Logout
          </div>
        )}{" "}
      </div>
    </>
  );
}

export default LoginPage;
