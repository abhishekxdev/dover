
import React from 'react';
import { Shield, Layers, Bell, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-thin-heading text-dark-green mb-4 leading-tight">Pricing & Plans</h2>
        <p className="text-gray-500">
          We partner closely with the most progressive companies in the world to improve their customer support operations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center text-sm text-gray-600">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-gray-50 p-3 rounded-full"><Shield className="w-6 h-6 text-lime-600" /></div>
          <p>A dynamic array of layouts that empower you to create eye-catching websites.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-gray-50 p-3 rounded-full"><Layers className="w-6 h-6 text-lime-600" /></div>
          <p>A game-changing collection of App Snippets to showcase your software on-brand.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-gray-50 p-3 rounded-full"><Bell className="w-6 h-6 text-lime-600" /></div>
          <p>Carefully crafted components that seamlessly adapt to your style changes.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Basic */}
        <div className="bg-white border border-gray-100 rounded-3xl p-10 flex flex-col">
          <span className="text-gray-500 font-medium mb-6">Basic</span>
          <div className="flex items-baseline mb-4">
            <span className="text-5xl font-thin-heading text-dark-green">$59</span>
            <span className="text-gray-400 ml-2">/ month</span>
          </div>
          <p className="text-gray-500 text-sm mb-10">Lorem ipsum dolor sit consectetur adipiscing elit de there.</p>
          <div className="space-y-4 mb-10">
            {['Downloadable Files', 'Commercial Uses', '5,200+ Digital Assets', '10 Downloads per Day'].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-dark-green">
                <Check className="w-4 h-4 text-lime-600" /> {f}
              </div>
            ))}
          </div>
          <button className="mt-auto bg-dark-green text-white py-4 rounded-xl font-bold hover:opacity-90">Start Free Trial</button>
        </div>
        
        {/* Pro */}
        <div className="bg-lime-neon rounded-3xl p-10 flex flex-col relative scale-105 shadow-xl">
          <div className="absolute top-6 right-6 bg-dark-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Save 20%</div>
          <span className="text-dark-green font-medium mb-6">Pro</span>
          <div className="flex items-baseline mb-4">
            <span className="text-5xl font-thin-heading text-dark-green">$99</span>
            <span className="text-dark-green opacity-60 ml-2">/ month</span>
          </div>
          <p className="text-dark-green opacity-80 text-sm mb-10">Lorem ipsum dolor sit consectetur adipiscing elit de there.</p>
          <div className="space-y-4 mb-10">
            {['Downloadable Files', 'Commercial Uses', '5,200+ Digital Assets', '10 Downloads per Day'].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-dark-green">
                <Check className="w-4 h-4 text-dark-green" /> {f}
              </div>
            ))}
          </div>
          <button className="mt-auto bg-dark-green text-white py-4 rounded-xl font-bold hover:opacity-90">Start Free Trial</button>
        </div>
        
        {/* Exclusive */}
        <div className="bg-white border border-gray-100 rounded-3xl p-10 flex flex-col">
          <span className="text-gray-500 font-medium mb-6">Exclusive</span>
          <div className="flex items-baseline mb-4">
            <span className="text-5xl font-thin-heading text-dark-green">$149</span>
            <span className="text-gray-400 ml-2">/ month</span>
          </div>
          <p className="text-gray-500 text-sm mb-10">Lorem ipsum dolor sit consectetur adipiscing elit de there.</p>
          <div className="space-y-4 mb-10">
            {['Downloadable Files', 'Commercial Uses', '5,200+ Digital Assets', '10 Downloads per Day'].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-dark-green">
                <Check className="w-4 h-4 text-lime-600" /> {f}
              </div>
            ))}
          </div>
          <button className="mt-auto bg-dark-green text-white py-4 rounded-xl font-bold hover:opacity-90">Start Free Trial</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
