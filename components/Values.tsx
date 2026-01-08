
import React from 'react';
import { Calendar, TrendingUp, BarChart3, Map, Gift, User } from 'lucide-react';

const values = [
  {
    icon: <Calendar className="w-8 h-8 text-lime-600" />,
    title: "Flexible schedule",
    description: "FramerBite gives you the blocks needed to create a truly professional website for your SaaS default model."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-lime-600" />,
    title: "Personal growth",
    description: "FramerBite gives you the blocks needed to create a truly professional website for your SaaS default model."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-lime-600" />,
    title: "Competitive salary",
    description: "FramerBite gives you the blocks needed to create a truly professional website for your SaaS default model."
  },
  {
    icon: <Map className="w-8 h-8 text-lime-600" />,
    title: "Work and travel",
    description: "FramerBite gives you the blocks needed to create a truly professional website for your SaaS default model."
  },
  {
    icon: <Gift className="w-8 h-8 text-lime-600" />,
    title: "Yearly bonus",
    description: "FramerBite gives you the blocks needed to create a truly professional website for your SaaS default model."
  },
  {
    icon: <User className="w-8 h-8 text-lime-600" />,
    title: "Casual dress code",
    description: "FramerBite gives you the blocks needed to create a truly professional website for your SaaS default model."
  }
];

const Values: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-thin-heading text-dark-green mb-4 leading-tight">The values that define our being</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          FramerBite gives you the blocks needed to create a truly professional website for your SaaS.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {values.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="mb-4 bg-gray-50 p-4 rounded-2xl">
              {val.icon}
            </div>
            <h3 className="text-xl font-bold text-dark-green mb-3">{val.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {val.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
