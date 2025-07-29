import React, { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import successAnimation from '../assets/success.json'; // ✅ Update path if needed

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_zqwdwfg',
        'template_uzy312n',
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setShowSuccess(true);
        toast.success("Message sent successfully ✅");
        form.reset();
        setTimeout(() => setShowSuccess(false), 4000);
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl w-full bg-gray-800 rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-pink-500 mb-6 text-center">Contact Us</h1>

        <div className="mb-10 space-y-2 text-center">
          <p><span className="font-semibold text-gray-300">Email:</span> chandansinghrkt123@gmail.com</p>
          <p><span className="font-semibold text-gray-300">GitHub:</span> <a href="https://github.com/Chandankumar2131" className="text-blue-400 underline" target="_blank" rel="noreferrer">Chandankumar2131</a></p>
          <p><span className="font-semibold text-gray-300">LinkedIn:</span> <a href="https://www.linkedin.com/in/chandan-kumar-19748a228" className="text-blue-400 underline" target="_blank" rel="noreferrer">chandan-kumar</a></p>
        </div>

        {showSuccess && (
          <div className="mb-6 flex justify-center">
            <Lottie animationData={successAnimation} style={{ height: 150 }} />
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
