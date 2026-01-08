
import React from 'react';

const AnalyticsFeature: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="w-full aspect-square rounded-[100px] overflow-hidden rotate-[-5deg] bg-lime-100 p-8">
            <img 
              src="https://images.unsplash.com/photo-1600880212319-7834e53f33de?auto=format&fit=crop&q=80&w=1000" 
              alt="People working" 
              className="w-full h-full object-cover rounded-[80px]"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-thin-heading text-dark-green mb-6 leading-tight">
            Easy to understand our analytics for your business
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            It is a long established fact that a reader a distracted by the uncover readable content page when looking at its layout. The point of using Lorem Ipsum is that it has a more and details answers for our clients.
          </p>
          <button className="bg-dark-green text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsFeature;
