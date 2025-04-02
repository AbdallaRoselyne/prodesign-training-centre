import React from "react";

const VisionMission = () => {
  return (
    <section id="values-mission" className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-purple mx-auto"></div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Building a better future for construction professionals
              </h3>
              <p className="text-gray mb-6">
                To empower construction professionals with the knowledge and
                tools to innovate, lead, and create a sustainable future.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple mr-2">✓</span>
                  <span className="text-gray">
                    Cutting-edge training programs that meet industry standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">✓</span>
                  <span className="text-gray">
                    Global network of industry partners and experts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">✓</span>
                  <span className="text-gray">
                    Continuous learning and growth opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">✓</span>
                  <span className="text-gray">
                    Inclusive, supportive learning environment
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Vision */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
              <div className="w-24 h-1 bg-purple mx-auto"></div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Leading the transformation of the construction industry
              </h3>
              <p className="text-gray mb-6">
                To be the leading training provider in the region, transforming
                the construction industry through excellence in BIM,
                sustainability, and digital innovation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple mr-2">✓</span>
                  <span className="text-gray">
                    Innovative, forward-thinking training
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">✓</span>
                  <span className="text-gray">
                    Global network of industry partners
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">✓</span>
                  <span className="text-gray">
                    Continuous learning and growth opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">✓</span>
                  <span className="text-gray">
                    Inclusive, supportive learning environment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
