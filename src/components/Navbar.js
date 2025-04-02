import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo_prodesign_png_03_03.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      !event.target.classList.contains("mobile-menu-button")
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-auto py-4 px-6 items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="ProDesign Logo" className="h-[120px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home link with dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                to="/"
                className="text-black hover:text-purple px-3 py-2 text-lg font-medium flex items-center"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <button
                      onClick={() => scrollToSection("hero")}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={() => scrollToSection("why-prodesign")}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple"
                    >
                      Why ProDesign
                    </button>
                    <button
                      onClick={() => scrollToSection("Courses")}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple"
                    >
                      Courses
                    </button>
                    <button
                      onClick={() => scrollToSection("partners")}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple"
                    >
                      Partners
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/courses"
              className="text-black hover:text-purple px-3 py-2 text-lg font-medium"
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-purple px-3 py-2 text-lg font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-purple px-3 py-2 text-lg font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button text-black hover:text-purple focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="relative">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-purple hover:bg-gray-100 flex justify-between items-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="ml-2"
              >
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </Link>

            {isDropdownOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple hover:bg-gray-100"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => scrollToSection("why-prodesign")}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple hover:bg-gray-100"
                >
                  Why ProDesign
                </button>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple hover:bg-gray-100"
                >
                  Courses
                </button>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple hover:bg-gray-100"
                >
                  Partners
                </button>
              </div>
            )}
          </div>

          <Link
            to="/courses"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-purple hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-purple hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-purple hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
