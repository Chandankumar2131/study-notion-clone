import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-gray-800 bg-opacity-30 backdrop-blur-lg p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-pink-500">
          About Me
        </h1>

        <p className="text-lg text-gray-300 mb-6 text-center">
          👋 Hello! I'm <span className="text-white font-semibold">Chandan Kumar</span>, also known as <span className="text-purple-400">AUSH</span> — a MERN Stack Developer who thrives on turning ideas into scalable web experiences.
        </p>

        <div className="space-y-5 text-gray-300 text-[1rem] leading-relaxed">
          <p>
            🔧 I specialize in building full-stack applications using <span className="text-white font-semibold">MongoDB, Express.js, React.js, and Node.js</span>. My training at <span className="text-yellow-400 font-medium">DUCAT</span> and personal practice with real-world projects have given me a deep understanding of RESTful APIs, front-end architecture, and database design.
          </p>

          <p>
            🧠 I’m also familiar with:
            <br />
            <span className="text-gray-200">✔️ Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript (ES6+)</span><br />
            <span className="text-gray-200">✔️ React Router, Redux Toolkit, Context API</span><br />
            <span className="text-gray-200">✔️ Git, GitHub, Postman, Vercel, Netlify, Firebase</span>
          </p>

          <p>
            💡 Some of my key projects include:
          </p>

          <ul className="list-disc list-inside pl-2 text-gray-200 space-y-1">
            <li><strong>Grab It</strong> – A resale marketplace for students to reduce campus waste</li>
            <li><strong>News App</strong> – React-powered responsive UI with category-wise filtering</li>
            <li><strong>Baby Care Backend</strong> – Built using Node.js, Express, and MongoDB with JWT auth</li>
            <li><strong>E-commerce Site</strong> – Shopping cart, product filtering, login system with secure routing</li>
            <li><strong>To-Do App</strong> – Created using React, state management, and custom styling</li>
          </ul>

          <p>
            🌱 I believe in continuous learning and growth. Whether it's understanding core computer science fundamentals like DSA or exploring tools like Next.js and TypeScript, I’m always evolving.
          </p>

          <p>
            🚀 My goal is to become a high-impact developer contributing to innovative products, collaborative teams, and impactful user experiences across the web.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 space-y-2">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:chandansinghrkt123@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition underline"
            >
              chandansinghrkt123@gmail.com
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/chandan-kumar-19748a228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition underline"
            >
              linkedin.com/in/chandan-kumar-19748a228
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Chandankumar2131"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition underline"
            >
              github.com/Chandankumar2131
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
