import React, { useState } from "react";

const data = [
  {
    title: "📚 Frontend Development",
    color: "text-pink-400",
    shortText: "We teach HTML, CSS, JavaScript, and modern frameworks like React.",
    fullText: `We teach HTML, CSS, JavaScript, and modern frameworks like React. Learn to build responsive UIs, SPAs, and beautiful user experiences.

- Responsive Design (Flexbox, Grid)
- Version Control with Git & GitHub
- Modern frontend tooling: Vite, Webpack, Babel
- Component-based architecture using React hooks, context, and reusable patterns
- Deployment strategies using platforms like Vercel and Netlify.`,
  },
  {
    title: "⚙️ Backend & APIs",
    color: "text-purple-400",
    shortText: "Dive into Node.js, Express, MongoDB, and REST APIs.",
    fullText: `Dive into Node.js, Express, MongoDB, and REST APIs. Understand authentication, databases, and how to build scalable backend systems.

- Building RESTful APIs using Express.js
- Integrating MongoDB with Mongoose for data modeling
- Authentication with JWT, cookies, and session-based auth
- Middleware, error handling, and request lifecycle
- Cloud deployments with Render, Railway, or DigitalOcean.`,
  },
  {
    title: "💡 Project-Based Learning",
    color: "text-pink-400",
    shortText: "Build real projects that strengthen your portfolio.",
    fullText: `From simple apps to full-stack clones, you’ll build real projects that reinforce your knowledge and strengthen your portfolio.

- To-Do App (with CRUD functionality)
- Blog Platform with login, auth, and comments
- E-commerce Store (Product listing, cart, checkout)
- Admin dashboards using charts and filters
- Full-stack clones like Netflix, Spotify, or LinkedIn`,
  },
  {
    title: "🚀 Job Readiness",
    color: "text-purple-400",
    shortText: "We focus on making you industry-ready.",
    fullText: `Get tips for resume building, GitHub optimization, and real interview prep. We focus on making you industry-ready — not just tutorial-ready.

- Resume templates tailored for dev roles
- GitHub profile optimization and README examples
- Mock interviews with feedback (DSA + System Design)
- Guidance on LinkedIn profile, networking, freelancing
- Access to job boards, walk-in alerts, and referral network`,
  },
  {
    title: "🎯 Personalized Growth",
    color: "text-pink-400",
    shortText: "StudyNotion adapts to your pace.",
    fullText: `StudyNotion adapts to your pace. Whether you’re a beginner or upskilling, the learning experience supports your unique path.

- Flexible learning paths (Beginner to Advanced)
- Mentorship sessions and weekly 1:1 support
- Progress tracking and skill assessments
- Weekly challenges and community leaderboard
- Option to switch between frontend, backend, or full-stack based on interest.`,
  },
];

export default function WhatWeDo() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          What We Do at StudyNotion
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto">
          StudyNotion isn’t just a course platform — it’s a full-stack learning
          experience. We blend real-world skills, projects, and guidance to help
          you grow into a confident, job-ready developer.
        </p>

        {/* Teaching Sections */}
        <div className="space-y-8 text-gray-300">
          {data.map((item, index) => (
            <div key={index}>
              <h2 className={`text-xl font-semibold mb-2 ${item.color}`}>
                {item.title}
              </h2>
              <p className="whitespace-pre-line">
                {expandedIndex === index ? item.fullText : item.shortText}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="mt-2 text-sm text-blue-400 hover:underline"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <p className="text-center text-sm text-gray-500 mt-12">
          💬 Want to start your journey? Head back to the home page or explore
          our latest courses.
        </p>

        {/* Notification Message */}
        <div className="mt-16 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md shadow-md text-center">
          <strong className="block mb-1">🔒 For More Insights & Exclusive Content</strong>
          <span className="text-sm">
            Please <span className="underline font-semibold cursor-pointer hover:text-yellow-600">log in</span> to unlock full access to course details, mentorship, and job alerts.
          </span>
        </div>
      </div>
    </div>
  );
}
