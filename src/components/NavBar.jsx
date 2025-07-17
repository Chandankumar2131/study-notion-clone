import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-gray-950 text-white shadow-lg px-6 py-4 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-auto cursor-pointer"
            loading="lazy"
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm md:text-base font-medium">
          <Link to="/" className="hover:text-pink-400 transition duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-400 transition duration-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-pink-400 transition duration-200">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
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
                  navigate("/");
                }}
                className="px-4 py-1 rounded-md bg-red-600 hover:bg-red-500 transition text-white font-medium"
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-pink-400 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block hover:text-pink-400 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block hover:text-pink-400 transition"
          >
            Contact
          </Link>

          <div className="pt-2 border-t border-gray-700">
            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={toggleMenu}>
                  <button className="w-full py-2 mt-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-600 hover:text-white transition">
                    Log in
                  </button>
                </Link>
                <Link to="/signup" onClick={toggleMenu}>
                  <button className="w-full py-2 mt-2 bg-pink-600 text-white rounded-md hover:bg-pink-500 transition">
                    Sign up
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" onClick={toggleMenu}>
                  <button className="w-full py-2 mt-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition">
                    Dashboard
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out Successfully");
                    toggleMenu();
                    navigate("/");
                  }}
                  className="w-full py-2 mt-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
                >
                  Log out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
