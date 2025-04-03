import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaChalkboardTeacher } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';

const CourseDetailsPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  
  // Get the course data passed from the Link
  const course = state?.course;

  // Default course data if none is passed
  const defaultCourse = {
    id: 1,
    name: "AutoCAD Professional Certification",
    date: "15 June 2024",
    duration: "6 Weeks",
    description: "Master technical drawing and 2D/3D modeling for engineering applications.",
    instructor: "Eng. Jean-Luc Fontaine",
    category: "CAD",
    cost: "25,000 MUR",
    location: "Prodesign Training Center",
    objectives: [
      "Master core CAD concepts and techniques",
      "Develop practical, real-world skills",
      "Gain industry-recognized certification"
    ]
  };

  const currentCourse = course || defaultCourse;

  if (!currentCourse) {
    return (
      <div className="min-h-screen bg-grey-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <button 
            onClick={() => navigate('/courses')}
            className="bg-purple text-white px-4 py-2 rounded"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grey-100">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple hover:text-purple-800 transition-colors"
          >
            <BiArrowBack className="mr-2" />
            Back to Courses
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Course Details */}
          <div className="lg:w-2/3">
            {/* Course Title and Overview */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h1 className="text-3xl font-bold text-black mb-4">{currentCourse.name}</h1>
              <p className="text-gray-600 mb-6">{currentCourse.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-purple mr-3 text-xl" />
                  <div>
                    <p className="text-gray-500 text-sm">Start Date</p>
                    <p className="font-medium">{currentCourse.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-purple mr-3 text-xl" />
                  <div>
                    <p className="text-gray-500 text-sm">Duration</p>
                    <p className="font-medium">{currentCourse.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-purple mr-3 text-xl" />
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="font-medium">{currentCourse.location || "Prodesign Training Center"}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaChalkboardTeacher className="text-purple mr-3 text-xl" />
                  <div>
                    <p className="text-gray-500 text-sm">Instructor</p>
                    <p className="font-medium">{currentCourse.instructor}</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple mb-4">Course Investment</h3>
                <p className="text-3xl font-bold text-black mb-2">{currentCourse.cost}</p>
                <p className="text-gray-600 text-sm">Payment plans available upon request</p>
              </div>
            </div>

            {/* Course Objectives */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-black mb-6">Course Objectives</h2>
              <ul className="space-y-3">
                {currentCourse.objectives?.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-purple text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{objective}</span>
                  </li>
                )) || (
                  <li className="text-gray-600">No objectives listed for this course</li>
                )}
              </ul>
            </div>
          </div>

          {/* Right Column - Registration */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-purple sticky top-8">
              <h3 className="text-xl font-bold text-black mb-4">Ready to Enroll?</h3>
              <p className="text-gray-600 mb-6">Secure your spot in this limited-capacity course.</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Course Fee:</span>
                  <span className="font-bold">{currentCourse.cost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Date:</span>
                  <span className="font-medium">{currentCourse.date}</span>
                </div>
              </div>

              <button className="w-full bg-purple hover:bg-purple-800 text-white py-3 px-4 rounded-lg font-bold transition duration-300">
                Register Now
              </button>

              <p className="text-gray-500 text-sm mt-4 text-center">
                Need help? <a href="/contact" className="text-purple hover:underline">Contact our team</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;