import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: '20+ years in design education, passionate about empowering creatives',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Head of Training',
      bio: 'Industry expert with a focus on practical skill development',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Instructor',
      bio: 'Specializes in digital design and user experience',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      role: 'Student Success',
      bio: 'Dedicated to helping students achieve their career goals',
      image: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">Meet Our Team</h2>
        <div className="w-24 h-1 bg-purple mx-auto"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-purple mb-3">{member.role}</p>
              <p className="text-gray">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;