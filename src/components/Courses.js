import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDollarSign,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import trainingImage from "../assests/training.jpg";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Autodesk Revit Beginner Training",
      date: "Oct 15, 2023",
      cost: "50000 Mur",
      location: "Prodesign Engineering Consultants Ltd",
      duration: "6 Weeks",
      description:
        "Learn the fundamentals of construction management and project planning.",
      image: trainingImage,
    },
    {
      id: 2,
      name: "Green Building Certification Workshop",
      date: "Nov 1, 2023",
      cost: "60000 Mur",
      location: "Prodesign Engineering Consultants Ltd",
      duration: "8 Weeks",
      description:
        "Master the art of building design and architectural concepts.",
      image: trainingImage, 
    },
    {
      id: 3,
      name: "Safety Training",
      date: "Dec 5, 2023",
      cost: "40000 Mur",
      location: "Prodesign Engineering Consultants Ltd",
      duration: "4 Weeks",
      description:
        "Gain essential safety skills for construction and industrial environments.",
      image: trainingImage, 
    },
    {
      id: 4,
      name: "Advanced Construction",
      date: "Jan 10, 2024",
      cost: "70000 Mur",
      location: "Prodesign Engineering Consultants Ltd",
      duration: "10 Weeks",
      description:
        "Advanced techniques in construction and project management.",
      image: trainingImage, 
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Function to navigate left
  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Function to navigate right
  const handleNext = () => {
    setStartIndex((prev) => (prev < courses.length - 3 ? prev + 1 : prev));
  };

  // Get the visible courses based on the startIndex
  const visibleCourses = courses.slice(startIndex, startIndex + 3);

  return (
    <section id="Courses" className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Enroll Now Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black uppercase">
            Enroll Now
          </h1>
          <p className="text-gray mt-4">
            Stay ahead of the curve with our upcoming training programs. Secure
            your place today in one of our professionally curated courses.
          </p>
        </div>

        {/* Courses Section with Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              <FaChevronLeft className="text" />
            </button>
          )}

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Course Image */}
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
                {/* Course Name */}
                <h2 className="text-xl font-semibold text-purple text-center mt-4">
                  {course.name}
                </h2>
                {/* Course Details (Icons) */}
                <div className="grid grid-cols-2 gap-4 px-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-gray text-xl" />
                    <span className="text-gray text-xs">{course.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-gray text-xl" />
                    <span className="text-gray text-xs">{course.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaDollarSign className="text-gray text-xl" />
                    <span className="text-gray text-xs">{course.cost}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray text-xl" />
                    <span className="text-gray text-xs">{course.duration}</span>
                  </div>
                </div>
                {/* Course Description */}
                <p className="text-black px-6 mt-4 whitespace-normal">
                  {course.description}
                </p>
                {/* Apply Now Button */}
                <div className="px-6 mt-4 mb-6">
                  <button className="w-full bg-purple text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {startIndex < courses.length - 3 && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
