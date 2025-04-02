import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import autodesk from "../assests/hero.png";
import image2 from "../assests/mqa.png";

const WhyProDesign = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [autodesk, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="why-prodesign" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Points */}
          <div className="md:w-1/2 space-y-8 order-1 md:order-none">
            <h2 className="text-3xl font-bold text-black mb-6">
              Why Prodesign Learning Centre?
            </h2>
            <ul className="space-y-6">
              {/* Point 1 */}
              <li>
                <h3 className="text-purple font-semibold text-lg">
                  Mauritius' Only Autodesk-Authorised Learning Centre
                </h3>
                <p className="text-gray mt-2">
                  Our certification is your assurance of high-quality,
                  industry-standard training
                </p>
              </li>
              {/* Point 2 */}
              <li>
                <h3 className="text-purple font-semibold text-lg">
                  Fully Equipped Training Facilities
                </h3>
                <p className="text-gray mt-2">
                  Trainees benefit from powerful workstations—no need to bring
                  your laptop.
                </p>
              </li>
              {/* Point 3 */}
              <li>
                <h3 className="text-purple font-semibold text-lg">
                  Free Revit License for the Duration of the Course
                </h3>
                <p className="text-gray mt-2">
                  Practice at home with a complimentary license for the duration
                  of your training.
                </p>
              </li>
            </ul>
            {/* Read More Button Link*/}
            <Link
              to="/about"
              className="bg-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300 inline-block"
            >
              Learn More About Us
            </Link>
          </div>
          
          {/* Right Side - Slideshow */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 order-0 md:order-none">
            <div className="relative w-full aspect-square md:aspect-video overflow-hidden rounded-lg shadow-lg bg-gray-100">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Prodesign Training ${index + 1}`}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
              ))}
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImage ? "bg-purple" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProDesign;