
import React, { useState } from 'react';

// Updated NavbarProps to include 'product-detail' in the allowed page types
interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'businesses' | 'brands' | 'highlights' | 'careers' | 'contact' | 'coffee' | 'fully-automatic' | 'product-detail') => void;
  currentPage: 'home' | 'about' | 'businesses' | 'brands' | 'highlights' | 'careers' | 'contact' | 'coffee' | 'fully-automatic' | 'product-detail';
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated navLinks type to maintain consistency with Page type
  const navLinks: { label: string; value: 'home' | 'about' | 'businesses' | 'brands' | 'highlights' | 'careers' | 'contact' | 'coffee' | 'fully-automatic' | 'product-detail' }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'For Businesses', value: 'businesses' },
    { label: 'Our Brands', value: 'brands' },
    { label: 'Highlights', value: 'highlights' },
    { label: 'Careers', value: 'careers' },
    { label: 'Contact Us', value: 'contact' },
  ];

  const handleMobileNavigate = (page: typeof navLinks[0]['value']) => {
    // We don't want to navigate to product-detail directly from the menu, 
    // but the types need to match.
    if (page !== 'product-detail') {
      onNavigate(page);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex items-center">
              <span className="text-red-700 font-bold text-3xl">A</span>
              <span className="text-teal-900 font-bold text-3xl">U</span>
              <div className="ml-2 flex flex-col -space-y-1">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-800 uppercase">Ambrosius</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-800 uppercase">Utama</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.filter(link => link.value !== 'product-detail').map((link) => (
              <button 
                key={link.value}
                onClick={() => onNavigate(link.value)}
                className={`${currentPage === link.value ? 'text-pink-600' : 'text-teal-800'} hover:text-pink-700 font-bold text-[10px] uppercase tracking-wider transition-colors`}
              >
                {link.label}
              </button>
            ))}
            
            <button 
              onClick={onSearchClick}
              className="bg-[#1A365D] p-2 text-white hover:bg-teal-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Right Icons (Burger + Search) */}
          <div className="lg:hidden flex items-center space-x-4">
             <button 
              onClick={onSearchClick}
              className="text-teal-800 hover:text-teal-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-gray-100 rounded-md text-teal-900 hover:bg-gray-50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isMobileMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 space-y-2">
          {navLinks.filter(link => link.value !== 'product-detail').map((link) => (
            <button
              key={link.value}
              onClick={() => handleMobileNavigate(link.value)}
              className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-md transition-colors ${
                currentPage === link.value 
                  ? 'bg-pink-50 text-pink-600' 
                  : 'text-teal-800 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
