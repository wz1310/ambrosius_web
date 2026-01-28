
import React from 'react';

const Highlights: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header Bar */}
      <div className="bg-[#004D4D] py-8">
        <h1 className="text-white text-center font-bold text-2xl uppercase tracking-widest">Highlights</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Event Poster */}
          <div className="shadow-2xl rounded-sm overflow-hidden border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=1200&auto=format&fit=crop" 
              alt="FHI 2025 Event Poster" 
              className="w-full h-auto"
            />
            {/* Overlay simulation of the poster content if the image is just a placeholder */}
            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-12 w-12 bg-[#8B2332] flex items-center justify-center text-white font-bold text-xl">FHI</div>
                <div>
                  <h3 className="font-bold text-gray-900">Jakarta International Expo (JIEXPO)</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">22 - 25 July 2025</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-medium">Hall B3 — Booth No. 5216</p>
            </div>
          </div>

          {/* Right: Content Description */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Visit Us at FHI 2025
            </h2>
            
            <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed font-medium">
              <p>
                PT Ambrosius Utama Indonesia is excited to announce our participation in FHI 2025. We invite you to visit us at Hall B3 — 5216 to discover how we can enhance your business with our comprehensive range of coffee equipment, beverage ingredients, and aftersales services. At our booth, you'll have the opportunity to explore cutting-edge solutions from Schaerer, La San Marco, The House of Robert Timms Coffee, Suzuki Coffee, and Zummo. Our team will be available to discuss your specific requirements and demonstrate how our products and services can drive efficiency, improve quality, and increase customer satisfaction. We look forward to forging new partnerships and strengthening existing ones at this premier industry event.
              </p>
              
              <p>
                We are committed to providing our clients with the highest quality products and unparalleled support. FHI 2025 provides an excellent platform to showcase our dedication to the food and hospitality sector. We believe our presence at this event will enable us to connect with key decision makers and demonstrate the value we bring to their operations. We encourage you to schedule a meeting with our team in advance to ensure we can dedicate the necessary time to discuss your needs. We look forward to welcoming you to our booth and exploring opportunities for collaboration.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="bg-[#8B2332] text-white px-10 py-3 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-900 transition-all shadow-lg">
                Schedule a Meeting
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Highlights;
