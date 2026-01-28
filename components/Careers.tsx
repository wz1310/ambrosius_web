
import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header Bar */}
      <div className="bg-[#004D4D] py-8">
        <h1 className="text-white text-center font-bold text-2xl uppercase tracking-widest">Careers</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Grow With Us Image Section */}
          <div className="relative rounded-sm overflow-hidden shadow-xl border border-gray-100 h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
              alt="Team working together" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-12 left-10 space-y-2">
              <h2 className="text-5xl font-black text-gray-900 tracking-tight">Grow With Us</h2>
              <p className="text-[#8B2332] font-bold text-xl">Your journey start here</p>
            </div>
          </div>

          {/* Right: Content Description */}
          <div className="space-y-8 pt-4">
            <div className="space-y-6 text-gray-700 text-[14px] leading-relaxed font-medium">
              <p>
                PT Ambrosius Utama, we don't just offer jobs — we build careers. We believe that great people create great impact. That's why we invest in individuals who are passionate, curious, and driven to make a difference.
              </p>
              
              <p>
                Whether you're just starting out or looking to take the next big step, here is where your ideas matter, your work is valued, and your growth is supported every step of the way.
              </p>

              <div className="space-y-2 pt-4">
                <h3 className="text-gray-900 font-bold text-base">Open Positions</h3>
                <p>
                  Explore opportunities that match your skills and ambition. Ready to shape the future of beverage with us?
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="bg-[#004D4D] text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-teal-900 transition-all shadow-md">
                See Job Openings
              </button>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-600 font-medium">Don't see a role that fits?</p>
              <p className="text-sm text-gray-600 font-medium">We're always looking for passionate talent.</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs">📩</span>
                <p className="text-sm text-gray-600 font-medium">
                  Send your CV to <a href="mailto:support@amb-utama.com" className="text-blue-600 underline hover:text-blue-800">support@amb-utama.com</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Careers;
