import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">Who We Are</h2>
        <div className="w-24 h-1 bg-purple mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Our team working"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <p className="text-lg text-gray mb-6">
            With over 27 years of experience in MEP engineering, BIM management,
            and sustainability consulting, Prodesign has built a reputation as a
            leader in the construction industry. Our training center was
            established to share this expertise and elevate the standards of
            professional development in Mauritius and beyond.
          </p>
          <p className="text-lg text-gray">
            Prodesign has achieved significant milestones, including winning the
            prestigious BIM Africa Award in 2022, showcasing our mastery of BIM
            and digital construction. As pioneers in green building design and
            LEED certification, our trainers bring years of hands-on experience
            in sustainable construction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
