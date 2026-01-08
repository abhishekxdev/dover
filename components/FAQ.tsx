
import React, { useState } from 'react';

const faqs = [
  {
    q: "How do you help people in problems?",
    a: "Use and re-use tons of responsive sections too main create the perfect layout. Sections are firmly of organised into the perfect starting categories. Our platform is designed with user experience in mind, making it simple and intuitive for both your team and your customers to use for better cost."
  },
  {
    q: "How do you help people in problems?",
    a: "Our dedicated support team is available 24/7 to ensure your integration is seamless."
  },
  {
    q: "How do you help people in problems?",
    a: "We provide comprehensive tutorials and a rich knowledge base."
  },
  {
    q: "How do you help people in problems?",
    a: "Regular updates and community forums keep you connected with the best practices."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-thin-heading text-dark-green leading-tight">Frequently Asked Questions</h2>
      </div>
      
      <div className="max-w-3xl mx-auto divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <div key={i} className="py-6">
            <button 
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex justify-between items-center text-left text-lg font-bold text-dark-green"
            >
              <span>{faq.q}</span>
              <span className="text-2xl">{openIdx === i ? '−' : '+'}</span>
            </button>
            {openIdx === i && (
              <div className="mt-4 text-gray-500 text-sm leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
