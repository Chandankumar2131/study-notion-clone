import React from "react";
import Frame from "../assets/Frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export default function Template({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen w-full gap-12 px-6 md:px-12 py-10 bg-gray-950 text-white">
      
      {/* Left Section */}
      <div className="max-w-[500px] w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          {title}
        </h1>

        {/* Description 1 */}
        <p className="text-gray-300 text-base md:text-lg font-medium mb-1">
          {desc1}
        </p>

        {/* Description 2 */}
        <p className="text-sm italic text-blue-400 mb-6">
          {desc2}
        </p>

        {/* Render appropriate form */}
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>

      {/* Right Section - Images */}
      <div className="relative hidden md:block">
        <img
          src={Frame}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
          className="absolute top-4 left-4 -z-10 opacity-30 rounded-xl"
        />
        <img
          src={image}
          alt="Main Visual"
          width={558}
          height={490}
          loading="lazy"
          className="rounded-xl shadow-2xl border border-gray-800"
        />
      </div>
    </div>
  );
}
