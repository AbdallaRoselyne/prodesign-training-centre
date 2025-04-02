import React from "react";

const Values = () => {

const values = [
    {
      title: 'Excellence',
      description: 'Delivering world-class training programs that meet global standards.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge technology to stay ahead of industry trends',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Advocating for a greener future through our courses and expertise',
      icon: '🌿'
    },
    {
      title: 'Integrity',
      description: 'Upholding honesty and professionalism in everything we do',
      icon: '🤝'
    }
  ];

  return (
    <section className="bg-grey-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className=" md:grid-cols-2 gap-12">
          {/* Our Values */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-purple mx-auto"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{value.title}</h3>
                  <p className="text-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Values;