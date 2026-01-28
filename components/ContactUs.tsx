
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header Bar */}
      <div className="bg-[#004D4D] py-8">
        <h1 className="text-white text-center font-bold text-2xl uppercase tracking-widest">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Form */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Let's Connect</h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Message" 
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#6366F1] text-white py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg">
                Send
              </button>
            </form>
          </div>

          {/* Right: Map Section */}
          <div className="h-full min-h-[400px] relative rounded-sm overflow-hidden border border-gray-200 shadow-sm">
            {/* Using an iframe to simulate the Google Maps embed from the screenshot */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.820252157057!2d106.8155493!3d-6.1548171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f67a21b3334d%3A0x6a0c6d5337b51f0!2sJl.%20Gajah%20Mada%20No.184%2C%20RT.14%2FRW.8%2C%20Keagungan%2C%20Kec.%20Taman%20Sari%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011120!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ambrosius Utama Location"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
