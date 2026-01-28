
import React from 'react';

interface PromoCardsProps {
  onExploreCoffee: () => void;
  onExploreMachinery?: () => void;
}

const PromoCards: React.FC<PromoCardsProps> = ({ onExploreCoffee, onExploreMachinery }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coffee & Tea Card */}
          <div className="bg-[#8B2332] rounded-xl overflow-hidden relative min-h-[240px] flex items-center p-8 group cursor-pointer transition-transform hover:scale-[1.01]">
            <div className="w-1/2 z-10 space-y-4">
              <h3 className="text-white font-bold text-lg leading-snug">
                Expand Your Menu with Our Newest Coffee & Tea Lineup
              </h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onExploreCoffee();
                }}
                className="bg-teal-700 text-white text-[10px] font-bold px-4 py-2 rounded-sm uppercase tracking-wider hover:bg-teal-800"
              >
                Explore More
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover transform scale-125 translate-x-4 opacity-80"
                alt="Coffee Beans"
              />
            </div>
          </div>

          {/* Machinery Card */}
          <div className="bg-[#004D4D] rounded-xl overflow-hidden relative min-h-[240px] flex items-center p-8 group cursor-pointer transition-transform hover:scale-[1.01]">
            <div className="w-1/2 z-10 space-y-4">
              <h3 className="text-white font-bold text-lg leading-snug">
                Performance-Driven Coffee Machinery, Trusted by Industry Leaders
              </h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if (onExploreMachinery) onExploreMachinery();
                }}
                className="bg-[#8B2332] text-white text-[10px] font-bold px-4 py-2 rounded-sm uppercase tracking-wider hover:bg-red-900"
              >
                Explore More
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover transform scale-110 translate-x-4 opacity-80"
                alt="Coffee Machine"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCards;
