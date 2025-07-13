import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6 py-12">
      
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center">
        Welcome to StudyNotion
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
        Your one-stop platform to learn, grow, and succeed. Start your journey with our powerful courses and tools.
      </p>

      <div className="text-center max-w-3xl mb-8 space-y-4">
        <p className="text-md text-gray-400">
          🚀 <strong>Interactive Courses:</strong> Hands-on learning with real-world projects to boost your skills.
        </p>
        <p className="text-md text-gray-400">
          🎯 <strong>Expert Mentorship:</strong> Learn directly from industry professionals and get personalized feedback.
        </p>
        <p className="text-md text-gray-400">
          📈 <strong>Career Growth:</strong> Build your portfolio and unlock career opportunities with in-demand skills.
        </p>
      </div>

      <button 
  onClick={() => navigate('/what-we-do')}
  className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/50"
>
  Know What We Teach
</button>

      
      <p className="mt-6 text-sm text-gray-500">
        No experience? No problem. Whether you're a beginner or looking to upskill — we’ve got you covered.
      </p>
    </div>
  );
}
