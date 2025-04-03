import React from "react";
import { Link } from "react-router-dom";
import courseImage1 from "../assests/hero.png";
import courseImage2 from "../assests/training.jpg";
import courseImage3 from "../assests/autodesk.jpg";

const CoursesPage = () => {
  // Engineering-focused course data
  const upcomingCourses = [
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
      name: "Advanced Structural Design",
      date: "22 July 2024",
      duration: "8 Weeks",
      description:
        "Advanced techniques in structural analysis and design for civil engineers.",
      image: courseImage3,
      instructor: "Dr. Sarah Chen",
      category: "Structural Engineering",
      cost: "35,000 MUR",
    },
  ];

  const ongoingCourses = [
    {
      id: 4,
      name: "BIM with Revit Architecture",
      date: "Ongoing - Cohort 5",
      duration: "10 Weeks",
      description:
        "Transform your architectural workflow with Building Information Modeling.",
      image: courseImage2,
      instructor: "Prof. Marie-Claire Leduc",
      category: "BIM",
      cost: "30,000 MUR",
      progress: 40, // percentage completed
    },
    {
      id: 5,
      name: "Construction Project Management",
      date: "Ongoing - Cohort 3",
      duration: "12 Weeks",
      description:
        "Modern project management methodologies for construction professionals.",
      image: courseImage3,
      instructor: "Eng. Rajiv Patel",
      category: "Construction",
      cost: "40,000 MUR",
      progress: 25, // percentage completed
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Engineering <span className="text-purple">Excellence</span>{" "}
                Through Education
              </h1>
              <p className="text-xl text-white">
                Professional development courses designed by engineers, for
                engineers.
              </p>
            </div>
            <div className="md:w-2/5 bg-white bg-opacity-10 p-8 rounded-xl border border-gray">
              <h3 className="text-xl font-semibold mb-4">
                Why Choose Prodesign?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple mt-0.5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Autodesk-Authorized Learning Centre</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple mt-0.5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Industry-experienced instructors</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple mt-0.5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Hands-on, project-based learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming Courses Section */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold text-black">
              <span className="border-b-4 border-purple pb-2">
                Upcoming Programs
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingCourses.map((course) => (
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
                    STARTS {course.date}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-purple text-xs font-medium px-2.5 py-0.5 rounded">
                      {course.category}
                    </span>
                    <span className="text-sm font-medium text-black">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Instructor</p>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-black">Cost</p>
                      <p className="font-bold text-purple">{course.cost}</p>
                    </div>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    state={{ course }} // Pass the entire course object
                    className="mt-6 block w-full bg-purple hover:bg-purple-800 text-white text-center py-3 px-4 rounded-md transition duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ongoing Courses Section */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold text-gray">
              <span className="border-b-4 border-lime-300 pb-2">
                Current Programs
              </span>
            </h2>
            <Link
              to="/testimonials"
              className="text-gray hover:underline flex items-center"
            >
              See Testimonials
              <svg
                className="w-4 h-4 ml-1"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingCourses.map((course) => (
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
                  <div className="absolute top-4 right-4 bg-lime-300 text-black text-xs font-bold px-3 py-1 rounded-full">
                    IN PROGRESS
                  </div>
                  {course.progress && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-200 h-1.5">
                      <div
                        className="bg-lime-300 h-1.5"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-lime-100 text-black text-xs font-medium px-2.5 py-0.5 rounded">
                      {course.category}
                    </span>
                    <span className="text-sm font-medium text-black">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Instructor</p>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Next intake</p>
                      <p className="font-bold text-lime-300">{course.cost}</p>
                    </div>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    state={{ course }} // Pass the entire course object
                    className="mt-6 block w-full bg-lime-300 hover:bg-lime-700 text-black text-center py-3 px-4 rounded-md transition duration-300"
                  >
                    Join Current Cohort
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Development Section */}
        <section className="bg-purple text-white rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16">
              <h2 className="text-3xl font-bold mb-6">
                Custom Corporate Training
              </h2>
              <p className="text-white mb-8 text-lg">
                We develop tailored training programs for engineering firms and
                construction companies, delivered at our training center.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lime-300 rounded-lg p-2 mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Team Certification
                    </h3>
                    <p className="text-white">
                      Get your entire team certified on industry-standard tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-lime-300 rounded-lg p-2 mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Workflow Optimization
                    </h3>
                    <p className="text-white">
                      Customized training for your specific tools and processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                Schedule a Consultation
              </h3>
              <p className="mb-8 text-white">
                Our training specialists will assess your team's needs and
                develop a customized learning path to maximize your return on
                training investment.
              </p>
              <Link
                to="/contact"
                className="bg-lime-300 text-black hover:bg-gray-100 font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition duration-300 w-full md:w-auto text-center"
              >
                Request a Consultation
                <svg
                  className="w-4 h-4 ml-2"
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
      </div>
    </div>
  );
};

export default CoursesPage;
