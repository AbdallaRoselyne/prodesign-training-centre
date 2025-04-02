import React from 'react';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import LocationMap from '../components/LocationMap';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-purple">Contact Us</h1>
        <p className="mt-3 text-lg text-gray">We’d love to hear from you. Get in touch today.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8">
        <FAQSection />
        <ContactForm />
        <LocationMap />
      </div>
    </div>
  );
};

export default ContactUs;