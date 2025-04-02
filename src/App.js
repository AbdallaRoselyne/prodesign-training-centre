import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import CoursesPage from "./Pages/Courses";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Corrected: Wrap the element prop in curly braces */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
      
      </Router>
  );
}

export default App;
