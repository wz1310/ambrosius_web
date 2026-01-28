
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004D4D] text-white pt-20 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-md mr-3">
                <span className="text-[#8B2332] font-black text-2xl">A</span>
                <span className="text-[#004D4D] font-black text-2xl">U</span>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Ambrosius</span>
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Utama</span>
              </div>
            </div>
            <p className="text-teal-100 text-[11px] leading-relaxed max-w-xs font-light">
              Beverage Forward, World Class Taste. Providing premium solutions for global coffee professionals.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center hover:bg-teal-400 transition-colors">
                 <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest relative pb-2 inline-block">
              Quick Link
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-white"></span>
            </h4>
            <ul className="space-y-3 text-[11px] font-medium text-teal-100">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Businesses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Brands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Highlights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest relative pb-2 inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-white"></span>
            </h4>
            <ul className="space-y-4 text-[11px] font-medium text-teal-100">
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 mt-0.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <div className="flex flex-col">
                   <span className="text-[10px] text-teal-300 font-bold uppercase">Phone</span>
                   <span>021-6332307</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 mt-0.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                <div className="flex flex-col">
                   <span className="text-[10px] text-teal-300 font-bold uppercase">Whatsapp Business</span>
                   <span>+62811-3884-9888</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 mt-0.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <div className="flex flex-col">
                   <span className="text-[10px] text-teal-300 font-bold uppercase">Email</span>
                   <span>contact@amb-utama.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 mt-0.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <div className="flex flex-col">
                   <span className="text-[10px] text-teal-300 font-bold uppercase">Address</span>
                   <span>Jl Gajah Mada No. 184, Kelurahan Keagungan, Kecamatan Taman Sari, Jakarta Barat.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-700/50 pt-8 text-center text-teal-400 text-[10px] font-medium uppercase tracking-[0.2em]">
          Copyright PT Ambrosius Utama Indonesia &copy; 2025 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
