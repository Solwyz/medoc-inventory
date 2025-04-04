import React, { useState } from "react";
import loginpng from "../../Assets/login/loginPng.png";
import visibilityOff from "../../Assets/login/visibility_off.svg";
import visibility from "../../Assets/login/visibility.svg";
import logo from "../../Assets/login/logo.svg";
import arrowDown from "../../Assets/login/arrowDown.svg";  

function LoginPage() {
  const [selectedUser, setSelectedUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const users = ["User1", "User2", "User3"];

//   const handleLogin = () => {
//     if (selectedUser && password === "correct_password") {
//       setError(false);
//       alert("Login successful!");
//     } else {
//       setError(true);
//     }
//   };

  return (
    <div className="flex grid-cols-2 ">
      <div className="bg-[#596FB3] h-full md:h-svh w-1/2">
        <div className="pt-[106px] pl-[138px]">
          <img src={logo} alt="" className="" />
          <h2 className="text-[32px] font-normal text-white leading-[38px] mt-10">
            ACCESS THE PULSE OF YOUR
          </h2>
          <h1 className="text-[48px] font-bold text-white ">HEALTHCARE SYSTEM</h1>
        </div>
        <img src={loginpng} alt="" className="w-[783px] h-[456px]" />
      </div>

      {/* sign in */}
      <div className="h-full w-1/2 px-[110px] mt-[178px]">
        <h1 className="font-semibold text-2xl text-[#050710] leading-[24px]">Sign In</h1>
        <p className="text-[#696A70] text-[14px] font-normal mt-2">
          Stay updated on your professional world
        </p>
        <div className="mt-8">
          <div className="relative">
            <label className="text-[#050710] text-[14px] font-normal">Username</label>
            <div className="relative">
              <select
                className="w-full mt-3 h-[48px] border border-[#E6E6E7] text-[#696A70] text-base font-normal placeholder:text-[#696A70] focus:outline-none rounded-lg px-4 appearance-none"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="" className="" disabled>Select User</option>
                {users.map((user, index) => (
                  <option key={index} value={user}>{user}</option>
                ))}
              </select>
              <img src={arrowDown} className="absolute right-4 top-7" />
            </div>
          </div>
          <div className="relative mt-6">
            <label className="text-[#050710] text-[14px] font-normal">Name</label>
            <div className="relative">
              <input
                type="text"
                className={`w-full mt-3 h-[48px] rounded-lg placeholder:text-[#696A70] focus:outline-none  text-[#696A70] text-base font-normal border py-5 px-4 ${error ? "border-red-500" : "border-[#E6E6E7]"}`}
                placeholder="Enter your name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             </div>
          </div>
          <div className="relative mt-6">
            <label className="text-[#050710] text-[14px] font-normal">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className={`w-full mt-3 h-[48px] rounded-lg placeholder:text-[#696A70] focus:outline-none  text-[#696A70] text-base font-normal border py-5 px-4 ${error ? "border-red-500" : "border-[#E6E6E7]"}`}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-4 top-7 items-center "
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? visibilityOff : visibility} alt="" className="item-center" />
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">The password you entered is incorrect.</p>}
          <div className="mt-[64px]">
            <button
              className="w-full h-[48px] font-normal items-center text-white text-base rounded-lg bg-[#415BAD] hover:bg-[#304BA0] text-center"
            //   onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
