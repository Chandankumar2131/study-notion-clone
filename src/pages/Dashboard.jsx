import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="max-w-xl w-full text-center bg-white p-10 rounded-xl shadow-lg">
        {/* Welcome Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
          Welcome to <span className="text-pink-500">StudyNotion</span> 🎓
        </h1>

        {/* Sub Text */}
        <p className="text-gray-600 text-md md:text-lg mb-6 leading-relaxed">
          Your personalized dashboard is under development. Here you’ll find your courses,
          progress, and learning tools.
        </p>

        {/* Call to Action (Dummy) */}
        <Link to="/courses">
         <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-md hover:opacity-90 transition">
          Explore Courses
        </button>
        </Link>
       
      </div>
    </div>
  );
}
