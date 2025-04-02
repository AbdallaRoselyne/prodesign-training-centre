import React from 'react';
import { Link } from 'react-router-dom';

const CareerOpportunities = () => {
  const openings = [
    {
      role: "Senior Design Instructor",
      type: "Full-time",
      location: "Port Louis"
    },
    {
      role: "Curriculum Developer",
      type: "Contract",
      location: "Remote"
    },
    {
      role: "Student Advisor",
      type: "Part-time",
      location: "Port Louis"
    }
  ];

  return (
    <section className="bg-purple text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-xl mt-6 max-w-3xl mx-auto">
            Grow your career with Prodesign and help shape the next generation of designers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {openings.map((job, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
              <div className="flex gap-4 text-sm mb-3">
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{job.type}</span>
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{job.location}</span>
              </div>
              <p className="text-white text-opacity-80 mb-4">
                We're looking for passionate individuals to join our growing team...
              </p>
              <button className="text-purple bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/courses"
            className="bg-white text-purple px-8 py-3 rounded-full font-bold hover:bg-grey-100 transition duration-300 text-center"
          >
            View Our Courses
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple transition duration-300 text-center"
          >
            Submit Application
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;