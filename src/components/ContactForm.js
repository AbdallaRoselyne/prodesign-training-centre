import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-black mb-4">Get in Touch</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-600" />
        <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-600" />
        <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-600" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-600"></textarea>
        <button type="submit" className="bg-purple text-white w-full py-3 rounded-md hover:bg-indigo-600 transition">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;