import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import courseImage1 from "../assests/hero.png";
import courseImage2 from "../assests/training.jpg";
import courseImage3 from "../assests/autodesk.jpg";

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      id: 1,
      name: "AutoCAD Professional Certification",
      date: "15 June 2024",
      duration: "6 Weeks",
      description:
        "Master technical drawing and 2D/3D modeling for engineering applications.",
      image: courseImage1,
      instructor: "Eng. Jean-Luc Fontaine",
      category: "CAD",
      cost: "25,000 MUR",
      objectives: [
        "Master core CAD concepts and techniques",
        "Develop practical, real-world skills",
        "Gain industry-recognized certification",
      ],
    },
    {
      id: 2,
      name: "Project Management Fundamentals",
      date: "1 July 2024",
      duration: "4 Weeks",
      description:
        "Learn the essentials of project management in engineering and construction.",
      image: courseImage2,
      instructor: "Dr. Emma Dubois",
      category: "Management",
      cost: "20,000 MUR",
    },
    {
      id: 3,
      name: "BIM with Revit Architecture",
      date: "Ongoing - Cohort 5",
      duration: "10 Weeks",
      description:
        "Transform your architectural workflow with Building Information Modeling.",
      image: courseImage3,
      instructor: "Prof. Marie-Claire Leduc",
      category: "BIM",
      cost: "30,000 MUR",
    },
    {
      id: 4,
      name: "Advanced Structural Design",
      date: "22 July 2024",
      duration: "8 Weeks",
      description:
        "Advanced techniques in structural analysis and design for civil engineers.",
      image: courseImage1,
      instructor: "Dr. Sarah Chen",
      category: "Structural Engineering",
      cost: "35,000 MUR",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev < featuredCourses.length - 3 ? prev + 1 : prev
    );
  };

  const visibleCourses = featuredCourses.slice(startIndex, startIndex + 3);

  return (
    <section id="FeaturedCourses" className="bg-gray-50 py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">
            <span className="border-b-4 border-purple pb-2">
              Featured Courses
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our most popular professional development programs designed by
            engineers, for engineers.
          </p>
        </div>

        {/* Courses Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300 ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaChevronLeft className="text-purple" />
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex >= featuredCourses.length - 3}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300 ${
              startIndex >= featuredCourses.length - 3
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <FaChevronRight className="text-purple" />
          </button>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.date.includes("Ongoing")
                      ? "ONGOING"
                      : `STARTS ${course.date}`}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-purple text-xs font-medium px-2.5 py-0.5 rounded">
                      {course.category}
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Instructor</p>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Cost</p>
                      <p className="font-bold text-purple">{course.cost}</p>
                    </div>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    state={{ course }}
                    className="mt-6 block w-full bg-purple hover:bg-purple-800 text-white text-center py-3 px-4 rounded-md transition duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple hover:bg-purple-700 transition duration-300"
          >
            View All Courses
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
