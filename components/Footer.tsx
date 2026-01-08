
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-40">
      {/* Decorative Lime Shape behind CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[40%] h-[100px] bg-lime-neon rounded-full blur-3xl opacity-40 z-0"></div>
      <div className="absolute top-0 left-[60%] -translate-y-[80%] w-[150px] h-[40px] bg-lime-neon rounded-full rotate-[-15deg] z-0 hidden lg:block"></div>

      {/* CTA Box */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="bg-cta-teal rounded-[40px] p-12 md:p-20 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight max-w-3xl mx-auto">
            Are you interested in working with us? Let's do somethings great!
          </h2>
          <button className="bg-footer-dark text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all">
            Get Started Now
          </button>
        </div>
      </div>

      <div className="bg-footer-dark pt-48 pb-12 px-12 mt-[-100px]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-white/60 border-b border-white/5 pb-20 mb-10">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-lime-neon" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
                <path d="M12 22V12" />
                <path d="M12 12L3 7" />
                <path d="M12 12l9-5" />
              </svg>
              <span className="text-2xl font-bold text-white tracking-tight">Dover</span>
            </div>
            <p className="text-base leading-relaxed mb-8 max-w-sm">
              Get working experience work with this amazing team & in future want to work together
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 bg-white/5 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon className="w-4 h-4 text-white/80" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8">Navigate</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8">More Templates</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Nexo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Zaply</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Subric</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Techty</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-8">Our Newsletter</h4>
            <p className="text-sm mb-8 max-w-xs">The latest news article and resources in your inbox every month.</p>
            <div className="flex bg-white rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-lime-neon transition-all">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-footer-dark px-4 py-3 w-full text-sm font-medium placeholder:text-gray-400"
              />
              <button className="bg-lime-neon text-footer-dark p-3 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40 font-medium">
          <p>2023 All Right Reserved by FinestDevs</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
