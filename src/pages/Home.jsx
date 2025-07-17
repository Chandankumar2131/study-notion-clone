import React from 'react';
import { useNavigate } from 'react-router-dom';
import chandandp2 from '../assets/chandandp2.png'; // Your image

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6 py-12">
      
      {/* Profile Image */}
      <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-[2px] hover:scale-105 transition-transform duration-300 shadow-xl">
        <img 
          src={chandandp2} 
          alt="Chandan's Display"
          className="w-full h-full object-cover rounded-full border-4 border-gray-950"
        />
      </div>

      {/* Typing Animation */}
      <img 
        src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=1000&color=00FFD1&center=true&vCenter=true&width=500&lines=Hey+!+I'm+Chandan+Yadav;MERN+Stack+Developer;Building+Projects+Daily" 
        alt="Typing SVG"
        className="mb-6 w-full max-w-md"
      />

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center">
        Welcome to StudyNotion
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
        Your one-stop platform to learn, grow, and succeed. Start your journey with our powerful courses and tools.
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
        <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
      </div>

      {/* Highlights */}
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

      {/* Navigation Button */}
      <button 
        onClick={() => navigate('/what-we-do')}
        className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/50"
      >
        Know What We Teach
      </button>

      {/* Footer Line */}
      <p className="mt-6 text-sm text-gray-500">
        No experience? No problem. Whether you're a beginner or looking to upskill — we’ve got you covered.
      </p>
    </div>
  );
}
