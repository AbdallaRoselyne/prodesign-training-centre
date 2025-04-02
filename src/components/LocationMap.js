import React from "react";
import { MdLocationOn } from "react-icons/md";

const LocationMap = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-black mb-4">Our Location</h2>
      <div className="rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5570930850454!2d57.501370511531164!3d-20.27719544913698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b4a7b66267f%3A0x1ff2ce5920f0cc0c!2sProdesign%20Engineering%20Consultants%20Ltd!5e0!3m2!1sen!2smu!4v1742888575072!5m2!1sen!2smu"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Company Location"
        ></iframe>
      </div>
      <div className="flex items-center mt-4">
        <MdLocationOn className="text-purple text-9xl" />
        <span className="text-gray ml-2 text-sm">
          Prodesign Engineering Consultants Ltd First Floor, Building No.2,
          Industrial Building, Valentina Industrial Estate, Phoenix, 73553
        </span>
      </div>
    </div>
  );
};

export default LocationMap;
