import React, { useState, useEffect } from 'react';
import { PRODUCTS, HERO_VIDEO_URL } from './constants';
import { Product, CartItem } from './types';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Button } from './components/Button';
import { ShareWidget } from './components/ShareWidget';
import { Toast } from './components/Toast';
import { ShoppingBag, Phone, Rabbit, Wheat } from 'lucide-react';

const CATEGORIES = ['All', 'Rabbit', 'Poultry'] as const;

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<typeof CATEGORIES[number]>('All');
  
  // Notification states
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Trigger visual feedback instead of opening drawer
    setToastMessage(`${product.name} added to cart`);
    setIsCartAnimating(true);
  };

  // Reset cart animation
  useEffect(() => {
    if (isCartAnimating) {
      const timer = setTimeout(() => setIsCartAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isCartAnimating]);

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const filteredProducts = categoryFilter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === categoryFilter);

  return (
    <div className="min-h-screen font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-pindith-600 p-1.5 rounded-lg">
              <Rabbit className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-pindith-800 tracking-tight">PinDith<span className="text-amber-500">Green</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              className={`relative p-2 hover:bg-gray-100 rounded-full transition-all duration-300 ${isCartAnimating ? 'scale-125 bg-gray-100' : ''}`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className={`w-6 h-6 text-gray-700 ${isCartAnimating ? 'text-pindith-600' : ''}`} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] lg:h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1599307406326-805c87c067d0?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-pindith-900/90 via-pindith-900/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-400/20 backdrop-blur-sm border border-amber-400/50 text-amber-300 font-semibold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Premium Livestock & Poultry
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Fresh from <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Nature's Heart</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            We provide top-quality rabbits and poultry for consumption and breeding. Experience the organic difference with PinDith Green Ventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button size="lg" className="rounded-full px-8" onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})}>
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-pindith-900">
              <Phone className="w-4 h-4 mr-2" /> Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-10 bg-white sticky top-16 z-30 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-center gap-3">
             {CATEGORIES.map((cat) => (
               <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`
                  px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base
                  ${categoryFilter === cat 
                    ? 'bg-pindith-700 text-white shadow-lg shadow-pindith-700/30' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                `}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-earth-800">Available Stock</h2>
          <span className="text-sm text-gray-500 hidden sm:block">Showing {filteredProducts.length} items</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              added={cart.some(item => item.id === product.id)}
            />
          ))}
        </div>
      </section>

      {/* Features/Info Section */}
      <section className="bg-pindith-50 py-20 border-y border-pindith-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-pindith-100">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Rabbit className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-pindith-800 mb-3">Premium Breeds</h3>
              <p className="text-gray-600">Our rabbits are selected from the finest genetic lines for size, health, and temperament.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-pindith-100">
              <div className="w-12 h-12 bg-pindith-100 rounded-2xl flex items-center justify-center mb-6">
                <Wheat className="w-6 h-6 text-pindith-600" />
              </div>
              <h3 className="text-xl font-bold text-pindith-800 mb-3">Organic Feed</h3>
              <p className="text-gray-600">All our livestock are raised on 100% organic, nutrient-rich feed without harmful additives.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-pindith-100">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-pindith-800 mb-3">Easy Ordering</h3>
              <p className="text-gray-600">Select your products and checkout seamlessly via WhatsApp. We handle the rest personally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">PinDith Green Ventures</h2>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">Providing sustainable protein sources for healthy living through premium rabbit and poultry farming.</p>
              
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} PinDith Green Ventures.<br/>All rights reserved.
              </div>
            </div>
            
            <ShareWidget />
          </div>
        </div>
      </footer>

      {/* Interactive Elements */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <WhatsAppFloat />
      
      <Toast 
        message={toastMessage || ''} 
        isVisible={!!toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
};

export default App;