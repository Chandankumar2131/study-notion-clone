import React from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show toast
    toast.success("Message sent successfully ✅");
    
    // Optional: Reset the form (if needed)
    e.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl w-full bg-gray-800 rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-pink-500 mb-6 text-center">Contact Us</h1>

        {/* Contact Info */}
        <div className="mb-10 space-y-2 text-center">
          <p><span className="font-semibold text-gray-300">Email:</span> chandansinghrkt123@gmail.com</p>
          <p><span className="font-semibold text-gray-300">GitHub:</span> <a href="https://github.com/Chandankumar2131" className="text-blue-400 underline" target="_blank" rel="noreferrer">Chandankumar2131</a></p>
          <p><span className="font-semibold text-gray-300">LinkedIn:</span> <a href="https://www.linkedin.com/in/chandan-kumar-19748a228" className="text-blue-400 underline" target="_blank" rel="noreferrer">chandan-kumar</a></p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
