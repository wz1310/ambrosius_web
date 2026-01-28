
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoCards from './components/PromoCards';
import BrandCarousel from './components/BrandCarousel';
import ProductSection from './components/ProductSection';
import ArticleSection from './components/ArticleSection';
import AboutUs from './components/AboutUs';
import ForBusinesses from './components/ForBusinesses';
import OurBrands from './components/OurBrands';
import Highlights from './components/Highlights';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import CoffeePage from './components/CoffeePage';
import FullyAutomaticPage from './components/FullyAutomaticPage';
import ProductDetailPage from './components/ProductDetailPage';
import SearchOverlay from './components/SearchOverlay';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import ScrollToTop from './components/ScrollToTop';

type Page = 'home' | 'about' | 'businesses' | 'brands' | 'highlights' | 'careers' | 'contact' | 'coffee' | 'fully-automatic' | 'product-detail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToProduct = (id: number) => {
    setSelectedProductId(id);
    setCurrentPage('product-detail');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setCurrentPage('brands')} />
            <PromoCards 
              onExploreCoffee={() => setCurrentPage('coffee')}
              onExploreMachinery={() => setCurrentPage('fully-automatic')}
            />
            <BrandCarousel />
            <ProductSection onProductClick={navigateToProduct} />
            <ArticleSection />
          </>
        );
      case 'about':
        return <AboutUs />;
      case 'businesses':
        return <ForBusinesses />;
      case 'brands':
        return <OurBrands />;
      case 'highlights':
        return <Highlights />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <ContactUs />;
      case 'coffee':
        return <CoffeePage onNavigate={setCurrentPage} onProductClick={navigateToProduct} />;
      case 'fully-automatic':
        return <FullyAutomaticPage onProductClick={navigateToProduct} onNavigate={setCurrentPage} />;
      case 'product-detail':
        return <ProductDetailPage productId={selectedProductId || 1} onNavigate={setCurrentPage} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        onSearchClick={() => setIsSearchOpen(true)}
      />
      
      <main className="flex-grow">
        <div key={currentPage} className="animate-page">
          {renderContent()}
        </div>
      </main>

      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      
      <Footer />
      <ScrollToTop />
      <GeminiAssistant />
    </div>
  );
};

export default App;
