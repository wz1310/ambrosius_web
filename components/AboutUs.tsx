
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header Bar */}
      <div className="bg-[#004D4D] py-8">
        <h1 className="text-white text-center font-bold text-2xl uppercase tracking-widest">About Us</h1>
      </div>

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop')` }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Beverage Forward, World Class Taste</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
            PT Ambrosius Utama Indonesia – Your trusted beverage solution partner, empowering your business with the finest coffee machines and beverage products.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">What Drives Us</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', desc: 'Delivering top-quality products and outstanding service.' },
              { title: 'Innovation', desc: 'Providing cutting-edge beverage technology and solutions.' },
              { title: 'Customer-First', desc: 'Putting your business growth and satisfaction first.' },
              { title: 'Integrity', desc: 'Building trusted partnerships based on transparency.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <h3 className="text-gray-900 font-bold text-lg mb-4 uppercase tracking-wider">{value.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=1000&auto=format&fit=crop" 
                alt="Handshake" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Journey to Excellence</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-medium">
                <p>
                  Founded in 2017, PT Ambrosius Utama Indonesia was inspired by the Latin word <span className="italic font-bold">Ambrosius</span>—which means enduring and exceptional. Since day one, we've been committed to delivering outstanding beverage solutions that empower businesses across Indonesia.
                </p>
                <p>
                  With every cup we serve, we bring innovation, trust, and seamless operations to help our clients grow—taste by taste.
                </p>
              </div>
              <button className="bg-[#8B2332] text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-red-900 transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* More Than Supplier Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">We Are More Than Just a Coffee Supplier</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-medium">
                <p>
                  At Ambrosius Utama Indonesia, we don't just sell machines and beans—we build long-term partnerships with businesses that brew coffee for a living.
                </p>
                <p>
                  With years of experience in the coffee industry, we understand what it takes to run a successful coffee operation. Whether you're a café, hotel, roastery, or coworking space, our mission is to equip you with the right tools and support to grow your coffee business sustainably.
                </p>
              </div>
              <button className="bg-[#8B2332] text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-red-900 transition-colors">
                Get In Touch
              </button>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop" 
                alt="Coffee Roasting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
