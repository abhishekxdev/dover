
import React from 'react';
import { Star } from 'lucide-react';

const feedbacks = [
  {
    text: "A beautifully designed theme with responsive support. Could use deeper documentation, mainly for advanced WooCommerce integration and setup guidance.",
    name: "Denny Hilguston",
    role: "Product Designer",
    img: "https://picsum.photos/seed/denny/100/100"
  },
  {
    text: "Well-crafted expertise to deliver theme and prompt support make it reliable. However, WooCommerce integration details could be explained more thoroughly for beginners.",
    name: "Liam Crestwood",
    role: "Product Designer",
    img: "https://picsum.photos/seed/liam/100/100"
  },
  {
    text: "Solid performance and quick assistance enhance user experience. Still, WooCommerce integration documentation could be expanded for clearer understanding.",
    name: "Noah Drayton",
    role: "Product Designer",
    img: "https://picsum.photos/seed/noah/100/100"
  },
  {
    text: "An elegant should cover more setup steps theme with fast and helpful support. Additional documentation, especially related to WooCommerce, would make it even better.",
    name: "Aiden Lockhart",
    role: "Product Designer",
    img: "https://picsum.photos/seed/aiden/100/100"
  },
  {
    text: "Impressive expertise to deliver layout and great support make it reliable. More in-depth WooCommerce instructions could enhance usability and streamline configuration.",
    name: "Ethan Marcellus",
    role: "Product Designer",
    img: "https://picsum.photos/seed/ethan/100/100"
  },
  {
    text: "Well-built theme backed by quick support. However, WooCommerce documentation feels limited and should cover more by-step guide and setup steps.",
    name: "Logan Whitmore",
    role: "Product Designer",
    img: "https://picsum.photos/seed/logan/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-thin-heading text-dark-green leading-tight">Check our clients feedback!</h2>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbacks.map((f, i) => (
          <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">"{f.text}"</p>
            <div className="flex items-center gap-4">
              <img src={f.img} alt={f.name} className="w-12 h-12 rounded-full border-2 border-lime-100" />
              <div>
                <h4 className="text-dark-green font-bold text-sm">{f.name}</h4>
                <p className="text-gray-400 text-xs">{f.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
