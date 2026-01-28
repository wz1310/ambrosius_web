
import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative bg-white pt-12 pb-20 overflow-hidden min-h-[500px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Beverage Forward,<br />World Class Taste
            </h1>
            <p className="text-gray-600 text-sm font-medium tracking-wide">
              Brewing Brilliance—One Machine, One Cup, One Business at a Time
            </p>
            <button 
              onClick={onExplore}
              className="bg-[#8B2332] text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-red-900 transition-colors shadow-lg"
            >
              Explore Now
            </button>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            {/* Geometric Shape Background */}
            <div className="absolute right-0 top-0 w-[80%] h-[120%] bg-[#9EB9B9] -z-10 transform skew-x-[-20deg] translate-x-12 -translate-y-12"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1000&auto=format&fit=crop" 
              alt="High-end Coffee Machine" 
              className="w-full max-w-md object-contain z-10 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
