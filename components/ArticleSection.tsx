
import React from 'react';

const ArticleSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden group">
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Image Part */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" 
            alt="Barista brewing" 
            className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content Part */}
        <div className="w-full md:w-1/2 bg-[#D9D9D9] flex flex-col justify-center p-12 md:p-20 relative">
          {/* Torn Paper Effect Decor */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-white/10 backdrop-blur-sm -translate-x-4 skew-x-[-15deg]"></div>
          
          <div className="relative z-10 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Unveiling the Collection</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              How to Brew the Perfect Cup of Coffee
            </h2>
            <div className="pt-4">
              <button className="bg-[#8B2332] text-white px-6 py-2 text-[10px] font-bold uppercase rounded-sm hover:bg-red-900">
                Click here
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
