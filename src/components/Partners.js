import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import partner1 from "../assests/prodesign.png";
import partner2 from "../assests/USGBC_Logo.jpg";
import partner3 from "../assests/CIBSElogo.png";
import partner4 from "../assests/BIM.jpg";
import partner5 from "../assests/Logo no background.png";
import partner6 from "../assests/mqa.png";

const Partners = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6];
  const [startIndex, setStartIndex] = useState(0);

  const partnersToShow = 4;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : partners.length - partnersToShow));
  };

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev < partners.length - partnersToShow ? prev + 1 : 0));
  }, [partners.length, partnersToShow]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const visiblePartners = partners.slice(startIndex, startIndex + partnersToShow);

  return (
    <section id="partners" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          Our Partners
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10">
            {visiblePartners.map((partner, index) => (
              <img
                key={index}
                src={partner}
                alt={`Partner ${startIndex + index + 1}`}
                className="w-40 h-24 object-contain mx-auto"
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
