
import React from 'react';
import { SOLUTIONS } from '../constants';

const Solutions: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS.map((sol, idx) => (
            <div 
              key={idx}
              className={`relative overflow-hidden group cursor-pointer h-[350px] transition-all duration-500 rounded-sm ${sol.size === 'full' ? 'md:col-span-2' : ''}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${sol.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center">
                  {sol.title}
                </h3>
                <p className="text-xl md:text-2xl font-light uppercase tracking-widest mt-1">
                  {sol.subtitle}
                </p>
                <div className="mt-6 w-12 h-[2px] bg-white transform origin-left transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
