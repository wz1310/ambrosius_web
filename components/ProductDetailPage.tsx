
import React, { useState, useMemo } from 'react';

interface ProductDetail {
  id: number;
  name: string;
  category: string;
  shortDescription: string;
  tags: string[];
  brand: string;
  mainImage: string;
  thumbnails: string[];
  detailedDescription: string[];
  parentPage: 'fully-automatic' | 'coffee';
}

interface ProductDetailPageProps {
  productId: number;
  onNavigate: (page: any) => void;
}

const PRODUCT_DATA_MAP: Record<number, ProductDetail> = {
  // Machine Products (1-9)
  1: {
    id: 1,
    name: 'Bravilor Bonamat B10',
    category: 'Fully Automatic Coffee Machines',
    shortDescription: 'The B10 is a high-capacity round filter machine designed for environments needing large quantities of fresh filter coffee quickly. Perfect for hospitals, theaters, and event catering.',
    tags: ['B series', 'High Capacity'],
    brand: 'Bravilor Bonamat',
    mainImage: 'https://www.bravilor.com/img/product/overview/B10.png',
    thumbnails: ['https://www.bravilor.com/img/product/overview/B10.png'],
    detailedDescription: [
      'The B-series includes models with volumes of 5, 10, 20 and 40 litres.',
      'Key Features:',
      '• Delicious, fresh filter coffee in large volumes',
      '• Robust stainless steel design for professional use',
      '• User-friendly programming with digital display'
    ],
    parentPage: 'fully-automatic'
  },
  2: {
    id: 2,
    name: 'Bravilor Bonamat Sego 12',
    category: 'Fully Automatic Coffee Machines',
    shortDescription: 'Compact and fully automatic, the Sego 12 is a bean-to-cup machine that delivers espresso-based specialties with just one touch.',
    tags: ['Bean-to-cup', 'Compact'],
    brand: 'Bravilor Bonamat',
    mainImage: 'https://www.bravilor.com/img/product/overview/Sego_12.png',
    thumbnails: ['https://www.bravilor.com/img/product/overview/Sego_12.png'],
    detailedDescription: [
      'The Sego is a fully automatic espresso machine.',
      'Technical Highlights:',
      '• CIRCO brewer: compact and easy to clean',
      '• Professional grinder with flat ceramic burrs'
    ],
    parentPage: 'fully-automatic'
  },
  10: {
    id: 10,
    name: 'Fiorenzato 64E Pro',
    category: 'Coffee Grinders',
    shortDescription: 'The professional grinder with a user-friendly interface and superior precision.',
    tags: ['Grinder', 'Precision'],
    brand: 'Fiorenzato',
    mainImage: 'https://www.fiorenzato.it/wp-content/uploads/2021/11/F64-E-PRO-nero-opaco-300x300.png',
    thumbnails: ['https://www.fiorenzato.it/wp-content/uploads/2021/11/F64-E-PRO-nero-opaco-300x300.png'],
    detailedDescription: ['High performance electronic grinder.', 'Features a touchscreen display and precise adjustment.'],
    parentPage: 'fully-automatic'
  },
  11: {
    id: 11,
    name: 'Fiorenzato F4 Evo',
    category: 'Coffee Grinders',
    shortDescription: 'Compact yet powerful, the F4 Evo is perfect for specialty coffee setups.',
    tags: ['Grinder', 'Compact'],
    brand: 'Fiorenzato',
    mainImage: 'https://www.fiorenzato.it/wp-content/uploads/2021/11/F4-E-NANO-nero-opaco-300x300.png',
    thumbnails: ['https://www.fiorenzato.it/wp-content/uploads/2021/11/F4-E-NANO-nero-opaco-300x300.png'],
    detailedDescription: ['Elegant compact design.', 'Consistent grind quality for espresso.'],
    parentPage: 'fully-automatic'
  },
  12: {
    id: 12,
    name: 'Fiorenzato F64 Evo',
    category: 'Coffee Grinders',
    shortDescription: 'The workhorse of many cafes worldwide, known for its reliability.',
    tags: ['Grinder', 'Workhorse'],
    brand: 'Fiorenzato',
    mainImage: 'https://www.fiorenzato.it/wp-content/uploads/2021/11/F64-E-V2-nero-opaco-300x300.png',
    thumbnails: ['https://www.fiorenzato.it/wp-content/uploads/2021/11/F64-E-V2-nero-opaco-300x300.png'],
    detailedDescription: ['Industrial strength grinding.', 'Quick and consistent dosing.'],
    parentPage: 'fully-automatic'
  },
  13: {
    id: 13,
    name: 'KaffaPro C3',
    category: 'Coffee Machines',
    shortDescription: 'A versatile capsule system for modern workspaces.',
    tags: ['Capsule', 'Sleek'],
    brand: 'KaffaPro',
    mainImage: 'https://kaffapro.id/wp-content/uploads/2021/08/M8-1.png',
    thumbnails: ['https://kaffapro.id/wp-content/uploads/2021/08/M8-1.png'],
    detailedDescription: ['Modern capsule technology.', 'Effortless maintenance and cleaning.'],
    parentPage: 'fully-automatic'
  },
  14: {
    id: 14,
    name: 'KaffaPro C7',
    category: 'Coffee Machines',
    shortDescription: 'Advanced bean-to-cup machine with multiple drink options.',
    tags: ['Automatic', 'Versatile'],
    brand: 'KaffaPro',
    mainImage: 'https://kaffapro.id/wp-content/uploads/2021/08/SC10.png',
    thumbnails: ['https://kaffapro.id/wp-content/uploads/2021/08/SC10.png'],
    detailedDescription: ['High resolution interface.', 'Exceptional milk frothing capabilities.'],
    parentPage: 'fully-automatic'
  },
  15: {
    id: 15,
    name: 'KaffaPro C8',
    category: 'Coffee Machines',
    shortDescription: 'The ultimate professional solution for large offices.',
    tags: ['Automatic', 'Office'],
    brand: 'KaffaPro',
    mainImage: 'https://kaffapro.id/wp-content/uploads/2021/08/S300.png',
    thumbnails: ['https://kaffapro.id/wp-content/uploads/2021/08/S300.png'],
    detailedDescription: ['High capacity brewing.', 'Robust build for heavy daily use.'],
    parentPage: 'fully-automatic'
  },

  // Coffee Products (101-109)
  101: {
    id: 101,
    name: 'Robert Timms Classic – Roasted Coffee Beans 500g',
    category: 'Coffee',
    shortDescription: 'A smooth, medium roast coffee with balanced chocolate and nutty notes.',
    tags: ['coffee beans', 'robert timms'],
    brand: 'Robert Timms',
    mainImage: 'https://www.roberttimms.com.au/wp-content/uploads/2019/12/classic-beans-500g.png',
    thumbnails: ['https://www.roberttimms.com.au/wp-content/uploads/2019/12/classic-beans-500g.png'],
    detailedDescription: ['Smooth well-balanced blend.', 'Perfect for home or office.'],
    parentPage: 'coffee'
  }
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
  
  const product = useMemo(() => {
    if (PRODUCT_DATA_MAP[productId]) return PRODUCT_DATA_MAP[productId];
    
    return {
      id: productId,
      name: productId > 100 ? 'Premium Coffee Blend' : 'Professional Coffee Machine',
      category: productId > 100 ? 'Coffee' : 'Fully Automatic Coffee Machines',
      shortDescription: 'This product represents our commitment to quality and excellence in every cup.',
      tags: ['premium', 'professional'],
      brand: 'Ambrosius Utama',
      mainImage: productId > 100 ? 'https://suzukicoffee.com.sg/wp-content/uploads/2020/06/Master-Blend-Beans.jpg' : 'https://www.bravilor.com/img/product/overview/Sego_12.png',
      thumbnails: [],
      detailedDescription: ['High quality product with exceptional durability.'],
      parentPage: productId > 100 ? 'coffee' : 'fully-automatic'
    } as ProductDetail;
  }, [productId]);

  const relatedProducts = useMemo(() => {
    return Object.values(PRODUCT_DATA_MAP)
      .filter(p => p.id !== product.id && p.parentPage === product.parentPage)
      .slice(0, 4);
  }, [product.id, product.parentPage]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-10">
          <span className="hover:text-gray-600 cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-600 cursor-pointer" onClick={() => onNavigate(product.parentPage)}>
            {product.parentPage === 'coffee' ? 'Coffee' : 'Fully Automatic Coffee Machines'}
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative border border-gray-100 p-8 flex items-center justify-center bg-white min-h-[400px]">
              <img src={product.mainImage} alt={product.name} className="max-w-full max-h-[350px] object-contain" />
            </div>
            {product.thumbnails.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.thumbnails.map((thumb, idx) => (
                  <div key={idx} className="border border-gray-100 p-2 cursor-pointer hover:border-gray-300 aspect-square flex items-center justify-center bg-gray-50">
                    <img src={thumb} alt={`${product.name} thumb ${idx}`} className="max-w-full max-h-full object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <button onClick={() => onNavigate(product.parentPage)} className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:underline">
              {product.category}
            </button>
            <h1 className="text-4xl font-bold text-[#1A365D]">{product.name}</h1>
            <p className="text-gray-500 text-xs leading-relaxed font-medium">{product.shortDescription}</p>
            
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span className="text-gray-500">Category:</span> <span className="text-blue-600 hover:underline cursor-pointer" onClick={() => onNavigate(product.parentPage)}>{product.category}</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span className="text-gray-500">Tag:</span> <span className="text-blue-600 hover:underline cursor-pointer">{product.tags.join(', ')}</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span className="text-gray-500">Brand:</span> <span className="text-blue-600 hover:underline cursor-pointer">{product.brand}</span>
              </div>
            </div>

            <button className="flex items-center space-x-2 bg-[#B19470] text-white px-6 py-3 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-[#a18460] transition-colors shadow-sm">
              <span>Download Katalog Produk</span>
            </button>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-100">
          <div className="flex space-x-12 -translate-y-[1px]">
            <button onClick={() => setActiveTab('description')} className={`py-4 text-[11px] font-bold uppercase tracking-widest border-t-2 ${activeTab === 'description' ? 'border-[#1A365D] text-[#1A365D]' : 'border-transparent text-gray-400'}`}>Description</button>
            <button onClick={() => setActiveTab('reviews')} className={`py-4 text-[11px] font-bold uppercase tracking-widest border-t-2 ${activeTab === 'reviews' ? 'border-[#1A365D] text-[#1A365D]' : 'border-transparent text-gray-400'}`}>Reviews (0)</button>
          </div>
          <div className="py-10">
            {activeTab === 'description' ? (
              <div className="text-xs text-gray-600 leading-relaxed font-medium space-y-4">
                {product.detailedDescription.map((item, idx) => <p key={idx}>{item}</p>)}
              </div>
            ) : <div className="text-xs text-gray-500 italic">No reviews yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
