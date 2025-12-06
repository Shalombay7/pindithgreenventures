import React, { useMemo } from 'react';
import { CartItem } from '../types';
import { Button } from './Button';
import { WHATSAPP_NUMBER } from '../constants';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemove 
}) => {
  
  const totalAmount = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = `Hello PinDith Green Ventures! 👋\nI would like to place an order:\n\n`;
    
    cart.forEach(item => {
      message += `• ${item.quantity}x ${item.name} @ ₵${item.price.toLocaleString()}\n`;
    });

    message += `\n*Total Amount: ₵${totalAmount.toLocaleString()}*`;
    message += `\n\nPlease confirm availability and delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white">
          <h2 className="text-xl font-bold text-earth-800 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-pindith-600" />
            Your Cart
            <span className="bg-pindith-100 text-pindith-800 text-xs font-bold px-2 py-1 rounded-full">
              {cart.reduce((a, b) => a + b.quantity, 0)} items
            </span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-400">
              <ShoppingBag className="w-16 h-16 mb-4 text-gray-200" />
              <p className="text-lg font-medium text-gray-600">Your cart is empty</p>
              <p className="text-sm">Add some healthy rabbits or poultry to get started!</p>
              <Button variant="outline" className="mt-6" onClick={onClose}>
                Browse Products
              </Button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-xl bg-white"
                />
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-earth-800 line-clamp-1">{item.name}</h4>
                    <div className="flex justify-between items-baseline mt-1">
                      <p className="text-xs text-gray-500">₵{item.price.toLocaleString()} x {item.quantity}</p>
                      <p className="text-sm font-bold text-pindith-700">₵{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3 text-gray-600" />
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        <Plus className="w-3 h-3 text-gray-600" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-red-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <div className="space-y-2 pb-4 border-b border-gray-200">
              <div className="flex justify-between items-center text-gray-600">
                <span>Subtotal</span>
                <span>₵{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xl font-bold text-earth-800">
              <span>Total</span>
              <span>₵{totalAmount.toLocaleString()}</span>
            </div>
            
            <p className="text-xs text-gray-500 text-center">
              Checkout is completed securely via WhatsApp. No payment is taken here.
            </p>
            
            <Button 
              variant="primary" 
              className="w-full py-4 text-lg shadow-xl shadow-pindith-500/20"
              onClick={handleCheckout}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Checkout on WhatsApp
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};