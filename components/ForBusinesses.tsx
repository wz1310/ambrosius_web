
import React from 'react';

const ForBusinesses: React.FC = () => {
  const businessSectors = [
    {
      title: "Hospitality",
      subtitle: "Solutions",
      image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-1"
    },
    {
      title: "Food Service",
      subtitle: "Solutions",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-1"
    },
    {
      title: "Workspaces",
      subtitle: "Solutions",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-2"
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Title Header */}
      <div className="bg-[#004D4D] py-8">
        <h1 className="text-white text-center font-bold text-2xl uppercase tracking-widest">For Businesses</h1>
      </div>

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1600&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            From Hospitality to Workspaces, We've Got You Covered
          </h2>
        </div>
      </section>

      {/* Business Sectors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessSectors.map((sector, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden group cursor-pointer h-[350px] transition-all duration-500 rounded-sm ${sector.span}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${sector.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-center leading-none">
                    {sector.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] mt-2">
                    {sector.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBusinesses;
