
import React from 'react';

const COFFEE_PRODUCTS = [
  {
    id: 101,
    brand: 'Coffee',
    name: 'Robert Timms Classic – Roasted Coffee Beans 500g',
    image: 'https://www.roberttimms.com.au/wp-content/uploads/2019/12/classic-beans-500g.png',
  },
  {
    id: 102,
    brand: 'Coffee',
    name: 'Robert Timms Continental – Roasted Coffee Beans 500g',
    image: 'https://www.roberttimms.com.au/wp-content/uploads/2019/12/continental-beans-500g.png',
  },
  {
    id: 103,
    brand: 'Coffee',
    name: 'Robert Timms Special – Roasted Coffee Beans 500g',
    image: 'https://www.roberttimms.com.au/wp-content/uploads/2019/12/special-beans-500g.png',
  },
  {
    id: 104,
    brand: 'Coffee',
    name: 'Suzuki Coffee Capsule Arabica Supremo Blend',
    image: 'https://suzukicoffee.com.sg/wp-content/uploads/2020/06/Arabica-Supremo.jpg',
  },
  {
    id: 105,
    brand: 'Coffee',
    name: 'Suzuki Coffee Capsule Espresso Forte Blend',
    image: 'https://suzukicoffee.com.sg/wp-content/uploads/2020/06/Espresso-Forte.jpg',
  },
  {
    id: 106,
    brand: 'Coffee',
    name: 'Suzuki Coffee Capsule Guatemala Single Origin',
    image: 'https://suzukicoffee.com.sg/wp-content/uploads/2020/06/Guatemala.jpg',
  },
  {
    id: 107,
    brand: 'Coffee',
    name: 'Suzuki Coffee Capsule Ristretto Blend',
    image: 'https://suzukicoffee.com.sg/wp-content/uploads/2020/06/Ristretto.jpg',
  },
  {
    id: 108,
    brand: 'Coffee',
    name: 'Suzuki Coffee Capsule Sumatra Single Origin',
    image: 'https://suzukicoffee.com.sg/wp-content/uploads/2020/06/Sumatra.jpg',
  },
  {
    id: 109,
    brand: 'Coffee',
    name: 'Suzuki Coffee Master Blend',
    image: 'https://suzukicoffee.com.sg/wp-content/uploads/2020/06/Master-Blend-Beans.jpg',
  },
];

interface CoffeePageProps {
  onNavigate: (page: any) => void;
  onProductClick: (id: number) => void;
}

const CoffeePage: React.FC<CoffeePageProps> = ({ onNavigate, onProductClick }) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
          <span className="hover:text-gray-600 cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Coffee</span>
        </nav>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1A365D] mb-6">Coffee</h1>
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl font-medium">
            Discover our curated selection of premium coffee beans and ground coffee. From bold espresso blends to aromatic single origins, our coffee collection brings out rich flavors and fresh aromas for every brew method.
          </p>
        </div>

        {/* Results Info and Sorting */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            Showing 1–9 of 10 results
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
          {COFFEE_PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div 
                className="aspect-square bg-[#F9F9F9] overflow-hidden flex items-center justify-center p-6 mb-4 cursor-pointer"
                onClick={() => onProductClick(product.id)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 flex-grow">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{product.brand}</p>
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
                className="mt-4 bg-[#0066CC] text-white py-2 px-4 text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-blue-700 transition-colors w-max rounded-sm"
              >
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex items-center space-x-2">
          <button className="w-8 h-8 flex items-center justify-center bg-[#0066CC] text-white text-xs font-bold rounded-sm">1</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 text-xs font-bold rounded-sm hover:border-[#0066CC] hover:text-[#0066CC]">2</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 text-xs font-bold rounded-sm hover:border-[#0066CC] hover:text-[#0066CC]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeePage;
