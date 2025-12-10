import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { StickyCartBar } from './StickyCartBar';
import { HomePage } from './HomePage';
import { ProductDetailPage } from './ProductDetailPage';
import { ScrollToTop } from './ScrollToTop';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header onCartClick={() => setIsCartOpen(true)} />
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <StickyCartBar onCheckoutClick={() => setIsCartOpen(true)} />
      </>
    </BrowserRouter>
  );
}

export default App;