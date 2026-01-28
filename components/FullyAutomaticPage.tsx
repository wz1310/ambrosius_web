
import React from 'react';

const MACHINE_PRODUCTS = [
  {
    id: 1,
    category: 'Fully Automatic Coffee Machines',
    name: 'Bravilor Bonamat B10',
    image: 'https://www.bravilor.com/img/product/overview/B10.png',
  },
  {
    id: 2,
    category: 'Fully Automatic Coffee Machines',
    name: 'Bravilor Bonamat Sego 12',
    image: 'https://www.bravilor.com/img/product/overview/Sego_12.png',
  },
  {
    id: 3,
    category: 'Fully Automatic Coffee Machines',
    name: 'KaffaPro M8',
    image: 'https://kaffapro.id/wp-content/uploads/2021/08/M8-1.png',
  },
  {
    id: 4,
    category: 'Fully Automatic Coffee Machines',
    name: 'KaffaPro S300',
    image: 'https://kaffapro.id/wp-content/uploads/2021/08/S300.png',
  },
  {
    id: 5,
    category: 'Fully Automatic Coffee Machines',
    name: 'KaffaPro SC10',
    image: 'https://kaffapro.id/wp-content/uploads/2021/08/SC10.png',
  },
  {
    id: 6,
    category: 'Fully Automatic Coffee Machines',
    name: 'KaffaPro Z3',
    image: 'https://kaffapro.id/wp-content/uploads/2021/08/Z3.png',
  },
  {
    id: 7,
    category: 'Fully Automatic Coffee Machines',
    name: 'Schaerer Coffee Club',
    image: 'https://www.schaerer.com/fileadmin/templates/images/coffee-club.png',
  },
  {
    id: 8,
    category: 'Fully Automatic Coffee Machines',
    name: 'Schaerer Coffee Skye',
    image: 'https://www.schaerer.com/fileadmin/templates/images/coffee-skye.png',
  },
  {
    id: 9,
    category: 'Fully Automatic Coffee Machines',
    name: 'Schaerer Coffee Soul',
    image: 'https://www.schaerer.com/fileadmin/templates/images/coffee-soul.png',
  },
];

interface FullyAutomaticPageProps {
  onProductClick: (id: number) => void;
  onNavigate: (page: any) => void;
}

const FullyAutomaticPage: React.FC<FullyAutomaticPageProps> = ({ onProductClick, onNavigate }) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
          <span className="hover:text-gray-600 cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Fully Automatic Coffee Machines</span>
        </nav>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1A365D] mb-6">Fully Automatic Coffee Machines</h1>
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl font-medium">
            Brew like a pro with our fully automatic coffee machines. Featuring built-in grinders, milk frothers, and customizable settings, these machines deliver perfect espresso, cappuccino, and latte with minimal effort.
          </p>
        </div>

        {/* Results Info and Sorting */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            Showing all 9 results
          </span>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Default sorting</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {MACHINE_PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div 
                className="aspect-square bg-white border border-gray-50 overflow-hidden flex items-center justify-center p-6 mb-4 shadow-sm group-hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => onProductClick(product.id)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 flex-grow px-1">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-tight">{product.category}</p>
                <h3 className="text-[11px] font-bold text-gray-800 leading-snug h-8">
                  {product.name}
                </h3>
                <div className="flex space-x-0.5 text-[#CCCCCC]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => onProductClick(product.id)}
                className="mt-4 bg-[#0066CC] text-white py-2 px-6 text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-blue-700 transition-colors w-max rounded-sm"
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullyAutomaticPage;
