import React from 'react';
import { Product } from '../types';
import { Button } from './Button';
import { Plus, Check, Share2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  added?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, added = false }) => {
  const isOutOfStock = !product.available;

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at PinDith Green Ventures! Price: ₵${product.price.toLocaleString()}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for desktop
      navigator.clipboard.writeText(`${product.name} - ₵${product.price.toLocaleString()} at PinDith Green Ventures`);
      alert("Product details copied to clipboard!");
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-earth-100 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover object-center transition-transform duration-700 ease-in-out ${isOutOfStock ? 'grayscale opacity-75' : 'group-hover:scale-110'}`}
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-pindith-800 text-xs font-bold rounded-full shadow-sm uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Share Button */}
        <button 
          onClick={handleShare}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-gray-600 hover:text-pindith-600 transition-colors"
          title="Share Product"
        >
          <Share2 className="w-4 h-4" />
        </button>

        {/* Availability Badge - positioned below Share button now */}
        <div className="absolute top-14 right-3">
          {isOutOfStock ? (
            <span className="px-3 py-1 bg-red-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-sm uppercase tracking-wider">
              Sold Out
            </span>
          ) : (
            <span className="px-3 py-1 bg-pindith-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-sm uppercase tracking-wider">
              In Stock
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-lg font-bold leading-tight transition-colors ${isOutOfStock ? 'text-gray-500' : 'text-earth-800 group-hover:text-pindith-700'}`}>
            {product.name}
          </h3>
          <span className={`text-lg font-bold whitespace-nowrap ml-2 ${isOutOfStock ? 'text-gray-400' : 'text-pindith-700'}`}>
            ₵{product.price.toLocaleString()}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
          {product.description}
        </p>

        <Button 
          variant={isOutOfStock ? "outline" : (added ? "secondary" : "primary")} 
          className={`w-full gap-2 ${isOutOfStock ? '!border-gray-300 !text-gray-400 !bg-gray-50 hover:!bg-gray-50 shadow-none cursor-not-allowed' : ''}`}
          onClick={() => !isOutOfStock && onAddToCart(product)}
          disabled={added || isOutOfStock}
        >
          {isOutOfStock ? (
            "Sold Out"
          ) : added ? (
            <>
              <Check className="w-4 h-4" /> Added to Cart
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" /> Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};