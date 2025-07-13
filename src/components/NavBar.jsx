import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <header className="w-full bg-gray-950 text-white shadow-lg px-6 py-4 flex items-center justify-between border-b border-gray-700">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="w-38 h-auto cursor-pointer"
          loading="lazy"
        />
      </Link>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          <li>
            <Link to="/" className="hover:text-pink-400 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-400 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-400 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="px-4 py-1 rounded-md border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-1 rounded-md bg-pink-600 hover:bg-pink-500 transition duration-300 text-white font-medium">
                Sign up
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              <button className="px-4 py-1 rounded-md bg-green-500 hover:bg-green-400 transition text-white font-medium">
                Dashboard
              </button>
            </Link>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out Successfully");
              }}
              className="px-4 py-1 rounded-md bg-red-600 hover:bg-red-500 transition text-white font-medium"
            >
              Log out
            </button>
          </>
        )}
      </div>
    </header>
  );
}
