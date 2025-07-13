import React from 'react';

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          What We Do at StudyNotion
        </h1>

        {/* Intro Paragraph */}
        <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto">
          StudyNotion isn’t just a course platform — it’s a full-stack learning experience. We blend real-world skills, projects, and guidance to help you grow into a confident, job-ready developer.
        </p>

        {/* What We Teach */}
        <div className="space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-pink-400 mb-2">📚 Frontend Development</h2>
            <p>
              We teach HTML, CSS, JavaScript, and modern frameworks like React. Learn to build responsive UIs, SPAs, and beautiful user experiences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-400 mb-2">⚙️ Backend & APIs</h2>
            <p>
              Dive into Node.js, Express, MongoDB, and REST APIs. Understand authentication, databases, and how to build scalable backend systems.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-400 mb-2">💡 Project-Based Learning</h2>
            <p>
              From simple apps to full-stack clones, you’ll build real projects that reinforce your knowledge and strengthen your portfolio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-400 mb-2">🚀 Job Readiness</h2>
            <p>
              Get tips for resume building, GitHub optimization, and real interview prep. We focus on making you industry-ready — not just tutorial-ready.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-400 mb-2">🎯 Personalized Growth</h2>
            <p>
              StudyNotion adapts to your pace. Whether you’re a beginner or upskilling, the learning experience supports your unique path.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-center text-sm text-gray-500 mt-12">
          💬 Want to start your journey? Head back to the home page or explore our latest courses.
        </p>
      </div>
    </div>
  );
}
