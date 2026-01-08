
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-lime-neon min-h-screen relative flex items-center overflow-hidden pt-20">
      <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="lg:col-span-5 z-10">
          <h1 className="text-[56px] md:text-[80px] font-thin-heading text-dark-green leading-[1.08] mb-12">
            Building website<br />
            products, brands<br />
            & experience.
          </h1>
          
          <button className="bg-dark-green text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-95 transition-all mb-14 inline-block">
            Get 14 Days Free Trial
          </button>
          
          <div className="flex items-center gap-6 text-dark-green font-medium text-lg whitespace-nowrap overflow-visible">
            <span>Free 30 days trial</span>
            <span className="opacity-30">|</span>
            <span>Exclusive Support</span>
            <span className="opacity-30">|</span>
            <span>No Fees</span>
          </div>
        </div>
        
        {/* Dashboard Image */}
        <div className="lg:col-span-7 relative h-full flex items-center justify-end">
          <div className="w-[110%] translate-x-12 translate-y-8 rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[12px] border-dark-green/5">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
              alt="Dover Analytics Dashboard" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Dark Green Wave at bottom right */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[150px] pointer-events-none">
         <svg viewBox="0 0 800 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 150C200 150 400 0 800 0V150H0Z" fill="#044335" />
         </svg>
      </div>
    </section>
  );
};

export default Hero;
