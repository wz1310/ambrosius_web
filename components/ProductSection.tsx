
import React, { useState } from 'react';
import { SOLUTIONS_PRODUCTS } from '../constants';

interface ProductSectionProps {
  onProductClick: (id: number) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ onProductClick }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const products = SOLUTIONS_PRODUCTS;
  
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, products.length));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-16">Discover Our Solutions</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.slice(0, visibleCount).map((product, index) => (
            <div key={product.id} className="flex flex-col items-center group">
              <div 
                className="h-64 w-full flex items-center justify-center mb-6 overflow-hidden bg-white cursor-pointer"
                onClick={() => onProductClick(parseInt(product.id))}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-[12px] font-bold text-gray-800 text-center mb-4 h-10 flex items-center px-4 leading-tight">
                {product.name}
              </h3>
              <button 
                onClick={() => onProductClick(parseInt(product.id))}
                className="bg-[#333333] text-white px-8 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors w-full max-w-[190px] rounded-md"
              >
                {index < 4 ? 'View More' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
        
        {visibleCount < products.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="bg-[#8B2332] text-white px-10 py-3 rounded-md font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-red-900 transition-all shadow-md"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
