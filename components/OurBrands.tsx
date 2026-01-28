
import React from 'react';

const OurBrands: React.FC = () => {
  const categories = [
    { name: "Capsule Machine", count: 3 },
    { name: "Coffee", count: 10 },
    { name: "Coffee Grinder", count: 3 },
    { name: "Fully Automatic", count: 9 },
    { name: "Juicer", count: 2 },
    { name: "Semi Automatic", count: 5 },
    { name: "Syrup", count: 13 },
    { name: "Tea", count: 5 }
  ];

  const brands = [
    { name: "Schaerer", logo: "https://www.schaerer.com/fileadmin/templates/images/logo.png" },
    { name: "KaffaPro", logo: "https://kaffapro.id/wp-content/uploads/2021/08/logo-kaffapro-300x75.png" },
    { name: "Bravilor Bonamat", logo: "https://www.bravilor.com/img/brand/logo_bravilor_bonamat.png" },
    { name: "Reneka", logo: "https://www.reneka.com/wp-content/uploads/2018/06/logo-reneka.png" },
    { name: "La San Marco", logo: "https://lasanmarco.com/img/logo-sm.png" },
    { name: "Fiorenzato", logo: "https://www.fiorenzato.it/wp-content/uploads/2021/11/FIORENZATO-LOGO-NERO.png" },
    { name: "Robert Timms", logo: "https://www.roberttimms.com.au/wp-content/uploads/2019/12/logo-robert-timms.png" },
    { name: "Suzuki Coffee", logo: "https://suzukicoffee.com.sg/wp-content/uploads/2020/06/Suzuki_Coffee_Logo_Web.png" },
    { name: "Mist Valley", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Y8B5WqY8oX8n5O7X6Uv6H6K7_Yy3X-kX4_A&s" },
    { name: "il Doge", logo: "https://ildoge.it/wp-content/uploads/2021/03/logo-ildoge-1.png" },
    { name: "Zummo", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A7p8Pz-C5S9l6n7z_vO1_zXvYy3X-kX4_A&s" }
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen">
      {/* Header Banner - Spacing adjusted to py-8 to match other pages */}
      <div className="bg-[#8B2332] py-8">
        <h1 className="text-white text-center font-bold text-2xl uppercase tracking-widest">Our Brands</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-8">
            {/* Search Box */}
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#8B2332]"
              />
              <button className="bg-[#333333] p-2 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Categories</h2>
              <ul className="space-y-3">
                {categories.map((cat, idx) => (
                  <li key={idx} className="group">
                    <a href="#" className="text-sm font-medium text-teal-800 hover:text-[#8B2332] transition-colors flex items-center">
                      <span className="underline group-hover:no-underline">{cat.name}</span>
                      <span className="ml-1 text-gray-500 font-normal">({cat.count})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Brands Grid */}
          <main className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {brands.map((brand, idx) => (
                <div key={idx} className="flex flex-col items-center justify-between h-40">
                  <div className="flex-1 flex items-center justify-center w-full px-4">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="max-h-20 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <a href="#" className="mt-4 text-sm font-bold text-gray-800 underline hover:text-[#8B2332] uppercase tracking-wider">
                    {brand.name}
                  </a>
                </div>
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default OurBrands;
