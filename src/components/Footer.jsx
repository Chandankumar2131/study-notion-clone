import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">StudyNotion</span>. All rights reserved.
        </p>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/courses" className="hover:text-white transition">Courses</a>
          <a href="/about" className="hover:text-white transition">About</a>
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Chandankumar2131"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chandan-kumar-19748a228"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
