import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account created");
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-[500px] mx-auto bg-gray-900 bg-opacity-50 backdrop-blur-md p-10 rounded-3xl shadow-xl text-white border border-gray-700">
      {/* Account type toggle */}
      <div className="flex bg-gray-800 p-1 rounded-full mb-8">
        <button
          type="button"
          className={`w-1/2 py-2 rounded-full font-medium transition ${
            accountType === "student"
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
              : "text-gray-400"
          }`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          type="button"
          className={`w-1/2 py-2 rounded-full font-medium transition ${
            accountType === "instructor"
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
              : "text-gray-400"
          }`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      {/* Form */}
      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* First Name */}
          <label className="w-full">
            <p className="mb-1 text-sm font-semibold text-gray-300">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="firstname"
              required
              value={formData.firstname}
              onChange={changeHandler}
              placeholder="Enter first name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </label>

          {/* Last Name */}
          <label className="w-full">
            <p className="mb-1 text-sm font-semibold text-gray-300">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              required
              value={formData.lastname}
              onChange={changeHandler}
              placeholder="Enter last name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </label>
        </div>

        {/* Email */}
        <label className="w-full">
          <p className="mb-1 text-sm font-semibold text-gray-300">
            Email Address <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email"
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </label>

        {/* Passwords */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Password */}
          <label className="relative w-full">
            <p className="mb-1 text-sm font-semibold text-gray-300">
              Create Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              className="w-full px-4 py-2 pr-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span
              className="absolute right-3 top-9 text-xl text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          {/* Confirm Password */}
          <label className="relative w-full">
            <p className="mb-1 text-sm font-semibold text-gray-300">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm password"
              className="w-full px-4 py-2 pr-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span
              className="absolute right-3 top-9 text-xl text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-lg text-white font-bold hover:opacity-90 transition"
        >
          Create Account
        </button>
      </form>

      {/* OR Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-grow h-[1px] bg-gray-600" />
        <p className="text-gray-400 text-sm">OR</p>
        <div className="flex-grow h-[1px] bg-gray-600" />
      </div>

      {/* Google Button */}
      <button className="w-full flex items-center justify-center gap-3 border border-gray-600 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md py-2 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google icon"
          className="w-5 h-5"
        />
        <span className="text-sm">Sign up with Google</span>
      </button>
    </div>
  );
}
