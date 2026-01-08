
import React from 'react';
import { UserPlus, Settings, Sun } from 'lucide-react';

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-thin-heading text-dark-green mb-4 leading-snug">
          Three steps process allows you to easily integrate our innovative product
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-8">
            <UserPlus className="w-8 h-8 text-lime-600" />
          </div>
          <h3 className="text-2xl font-bold text-dark-green mb-4">Sign Up</h3>
          <p className="text-gray-500 mb-8">
            Sign up for an account and provide basic information about your needs and find preferences.
          </p>
          <a href="#" className="text-dark-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Get Started Now <span>→</span>
          </a>
        </div>
        
        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-8">
            <Settings className="w-8 h-8 text-lime-600" />
          </div>
          <h3 className="text-2xl font-bold text-dark-green mb-4">Integration</h3>
          <p className="text-gray-500 mb-8">
            Sign up for an account and provide basic information about your needs and find preferences.
          </p>
          <a href="#" className="text-dark-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Get Started Now <span>→</span>
          </a>
        </div>
        
        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-8">
            <Sun className="w-8 h-8 text-lime-600" />
          </div>
          <h3 className="text-2xl font-bold text-dark-green mb-4">Optimize</h3>
          <p className="text-gray-500 mb-8">
            Sign up for an account and provide basic information about your needs and find preferences.
          </p>
          <a href="#" className="text-dark-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Get Started Now <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
