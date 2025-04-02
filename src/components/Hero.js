import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <section id="hero" className="bg-gradient-to-r from-purple to-blue-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
          Empowering Construction Professionals with Industry-Leading Training
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join Prodesign Learning Centre and take the first step building your skills for a sustainable future.
          </p>
          <Link
            to="/courses"
            className="bg-white text-purple px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    );
  };
  
  export default Hero;