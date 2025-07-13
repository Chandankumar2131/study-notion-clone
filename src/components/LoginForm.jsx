import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-[500px] mx-auto bg-gray-900 bg-opacity-50 backdrop-blur-md p-10 rounded-3xl shadow-xl text-white border border-gray-700">
      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        {/* Email */}
        <label className="w-full">
          <p className="mb-1 text-sm font-semibold text-gray-300">
            Email Address <sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email"
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </label>

        {/* Password */}
        <label className="w-full relative">
          <p className="mb-1 text-sm font-semibold text-gray-300">
            Password <sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type={showPass ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            className="w-full px-4 py-2 pr-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <span
            className="absolute right-3 top-9 text-xl text-gray-400 cursor-pointer"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link
            to="#"
            className="text-xs text-pink-400 mt-2 inline-block hover:underline"
          >
            Forgot Password?
          </Link>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-lg text-white font-bold hover:opacity-90 transition"
        >
          Sign In
        </button>
      </form>

      {/* OR Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-grow h-[1px] bg-gray-600" />
        <p className="text-gray-400 text-sm">OR</p>
        <div className="flex-grow h-[1px] bg-gray-600" />
      </div>

      {/* Google Sign In */}
      <button className="w-full flex items-center justify-center gap-3 border border-gray-600 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md py-2 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google icon"
          className="w-5 h-5"
        />
        <span className="text-sm">Sign in with Google</span>
      </button>
    </div>
  );
}
