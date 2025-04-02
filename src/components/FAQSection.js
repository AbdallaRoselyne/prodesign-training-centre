// FAQSection Component
import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    { question: "What are your opening hours?", answer: "Monday to Friday, 8:30 AM - 4:30 PM." },
    { question: "Do you offer online courses?", answer: "Yes, we offer both in-person and online options." },
    { question: "What payment methods do you accept?", answer: "We accept bank transfers, credit cards, and cash." },
    { question: "Can I get a certificate?", answer: "Yes, upon successful course completion." }
  ];
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-black mb-4">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-3">
            <button onClick={() => toggleFAQ(index)} className="w-full text-left flex justify-between items-center py-2 font-medium text-black">
              {faq.question} <span className="text-purple">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && <p className="mt-2 text-gray">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;