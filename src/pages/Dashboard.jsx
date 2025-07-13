import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-950 px-4 py-10">
      <div className="max-w-xl w-full text-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-gray-800">
        {/* Welcome Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
          Welcome to <span className="text-pink-400">Dashboard</span> 🎓
        </h1>

        {/* Sub Text */}
        <p className="text-gray-400 text-md md:text-lg mb-6 leading-relaxed">
          This dashboard is your learning compass. Each small step forward brings you closer to your goals. Stay consistent and focused — your future self will thank you.
        </p>

        {/* Motivational / Goal-Oriented Content */}
        <div className="text-left text-gray-300 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-purple-300">📘 Learn and Grow</h2>
            <p>
              By dedicating just 30 minutes a day to your courses, you’ll build strong foundational skills that open doors to internships, jobs, and exciting projects.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-purple-300">🚀 Complete Lessons, Unlock Skills</h2>
            <p>
              Every lesson you complete brings you one step closer to mastering the tools and technologies used by top developers and companies around the world.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-purple-300">🎯 Stay Consistent</h2>
            <p>
              Learning just 5 lessons a week can help you complete an entire course in a month. Set a realistic weekly goal — and stick to it — to keep the momentum going.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-purple-300">💡 Make It Real</h2>
            <p>
              Apply what you learn by building mini projects. The more you build, the better you understand — and the more confident you become.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-purple-300">🌱 Progress Takes Patience</h2>
            <p>
              Don’t worry about perfection. Focus on progress. If you show up every day, even for a short session, your skills will naturally grow over time.
            </p>
          </div>
        </div>

        {/* Styled Explore Courses Button */}
        <div className="mt-10">
          <Link to="/courses">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
              Start Learning → Explore Courses
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
