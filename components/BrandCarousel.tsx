
import React from 'react';
import { BRANDS } from '../constants';

const BrandCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">Our Brands</h2>
        
        <div className="relative flex items-center">
          <button className="absolute -left-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          
          <div className="flex-1 flex justify-between items-center overflow-x-auto scrollbar-hide space-x-12 px-8">
            {BRANDS.map((brand, idx) => (
              <img 
                key={idx} 
                src={brand.logo} 
                alt={brand.name} 
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" 
              />
            ))}
          </div>
          
          <button className="absolute -right-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
