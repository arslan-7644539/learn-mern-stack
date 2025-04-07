import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import axios from "axios";

const Login = () => {
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginForm?.email || !loginForm?.password) {
      console.log("🚀 ~ handleSubmit ~ loginForm:", loginForm);
      return alert("Please fill the all fields.");
    }

    try {
      const res = await axios.post("/api/auth/login", {
        email: loginForm?.email,
        password: loginForm?.password,
      });
      console.log("🚀 ~ handleSubmit ~ res:", res);

        alert(  JSON.stringify(res.data));
      setLoginForm({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-950">
      <div className="rounded-3xl py-4 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[85%] bg-white flex flex-col items-center">
        <h1 className="font-bold text-green-700 text-2xl flex flex-col gap-1.5 text-center">
          Welcome Back <br />
          <span className="text-sm font-semibold underline text-orange-400">
            Please Login First
          </span>
        </h1>

        <div className="flex flex-col items-center w-[90%] h-[85%]">
          <input
            name="email"
            className="border border-neutral-500 bg-white text-black 
              w-full max-w-xs sm:max-w-sm md:max-w-md 
              h-10 sm:h-11 md:h-12 
              my-4 rounded-2xl font-semibold text-center"
            type="text"
            onChange={changeHandler}
            value={loginForm?.email}
            placeholder="Enter Your Email"
          />
          <div className="relative w-full">
            <input
              name="password"
              className="border  border-neutral-500 bg-white text-black 
              w-full max-w-xs sm:max-w-sm md:max-w-md 
              h-10 sm:h-11 md:h-12 
              my-4 rounded-2xl font-semibold text-center"
              type={passwordIsOpen ? "text" : "password"}
              onChange={changeHandler}
              value={loginForm?.password}
              placeholder="Enter Your Password"
            />
            <button
              className="absolute bottom-8 left-78.5 cursor-pointer"
              onClick={() => setPasswordIsOpen(!passwordIsOpen)}
            >
              {" "}
              {passwordIsOpen ? <IoMdEyeOff /> : <IoEye />}
            </button>
          </div>

          <div className="text-black hover:shadow-2xl">
            <p className="w-full h-7 text-sm text-center">
              Create new account{" "}
              <span className="underline cursor-pointer text-green-700 hover:text-red-900">
                Register Now
              </span>
            </p>
          </div>

          <button
            onClick={handleSubmit}
            className="my-10 py-4 px-12 bg-orange-300 text-2xl font-semibold cursor-pointer rounded-3xl drop-shadow-xl transition ease-in-out duration-300"
          >
            <span className="text-white hover:underline hover:font-bold">
              Login Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
