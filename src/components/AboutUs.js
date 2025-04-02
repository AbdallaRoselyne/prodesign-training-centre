import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-grey-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              About Us
            </h2>
            <p className="text-2xl font-semibold text-purple mb-6">
              Empowering Construction Professionals with Knowledge and Innovation
            </p>
            <div className="w-20 h-1 bg-purple mb-6"></div>
            <p className="text-lg text-gray mb-6">
              At Prodesign Training, we believe that knowledge is the foundation of innovation, 
              and innovation drives the future. As Mauritius' only Autodesk-accredited training 
              provider, we are committed to empowering construction professionals with the skills 
              and expertise needed to excel in an ever-evolving industry.
            </p>
            <p className="text-lg text-gray">
              From mastering Autodesk Revit to gaining proficiency in green building design and 
              sustainability, our courses are tailored to equip you with real-world, practical 
              knowledge that makes an immediate impact.
            </p>
          </div>

          {/* Image - Replace with your actual image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Construction professionals learning at Prodesign Training" 
              className="rounded-lg shadow-xl w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;