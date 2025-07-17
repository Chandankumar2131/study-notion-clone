import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About"; // ✅ Import About
import Contact from "./pages/Contact"; // ✅ Import Contact
import ScrollToTop from "./components/ScrollToTop"
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import WhatWeDo from "./components/WhatWeDo";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
 <ScrollToTop/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ✅ New Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
      </Routes>
    </div>
  );
}
