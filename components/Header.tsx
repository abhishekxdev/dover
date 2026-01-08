
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-[1400px] mx-auto px-12 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
             <svg viewBox="0 0 24 24" className="w-8 h-8 text-dark-green" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
                <path d="M12 22V12" />
                <path d="M12 12L3 7" />
                <path d="M12 12l9-5" />
             </svg>
          </div>
          <span className="text-2xl font-bold text-dark-green tracking-tight">Dover</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-dark-green font-medium text-sm">
          <a href="#" className="hover:opacity-60 transition-opacity">Home</a>
          <a href="#" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Career</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
        
        <button className="bg-transparent text-dark-green px-7 py-3 rounded-xl font-bold text-sm border-2 border-dark-green shadow-[3px_3px_0px_0px_rgba(4,67,53,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          Get Started Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
