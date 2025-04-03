import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdPublic } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assests/logo_prodesign_png_03_03.png"; // Import your logo

const Footer = () => {
  return (
    <footer className="bg-grey-100 text-white py-12">
      {" "}
      {/* Changed to black background */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section - Logo and Social Media */}
          <div className="flex-1">
            <img
              src={logo}
              alt="ProDesign Training Centre"
              className="h-16 mb-4"
            />
            <p className="text-[#818181] mb-4">
              {" "}
              {/* Using your gray color */}
              Empowering creative professionals through quality training.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#818181] hover:text-gray transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-[#818181] hover:text-gray transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-[#818181] hover:text-gray transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-[#818181] hover:text-gray transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

            {/* Middle Section - Quick Links */}
            <div className="flex-1">
                <h3 className="text-xl text-black font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    <li>
                        <Link to="/courses" className="text-[#a54399] hover:text-gray transition-colors">Courses</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-[#a54399] hover:text-gray transition-colors">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-[#a54399] hover:text-gray transition-colors">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-[#a54399] hover:text-gray transition-colors">Blog</Link>
                    </li>
                </ul>
            </div>

          {/* Right Section - Contact Information */}
          <div className="flex-1">
            <h3 className="text-xl text-black font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MdPhone className="text-[#a54399] mr-3" size={20} />
                <span className="text-gray">+230 5711 7941</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-[#a54399] mr-3" size={20} />
                <a href="mailto:info@prodesign.mu" className="text-gray">
                  info@prodesign.mu
                </a>
              </li>
              <li className="flex items-center">
                <MdPublic className="text-[#a54399] mr-3" size={20} />
                <a href="https://prodesign.mu" className="text-gray">
                  www.prodesign.mu
                </a>
              </li>
              <li className="flex items-center">
                <MdLocationOn className="text-[#a54399] mr-3" size={20} />
                <span className="text-gray">
                  123 Main Street, Port Louis, Mauritius
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#818181] mt-8 pt-6 text-center text-black">
          <p>
            © {new Date().getFullYear()} Prodesign Learning Centre. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
