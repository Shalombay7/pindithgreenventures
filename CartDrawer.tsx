import { useCart } from './CartContext';
import { useState } from 'react';
import { Trash2 } from 'lucide-react'; // A popular icon library, you may need to install `lucide-react`

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [view, setView] = useState<'cart' | 'confirmation'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');

  const handleWhatsAppCheckout = () => {
    if (!customerName || !customerPhone || !deliveryAddress) {
      alert('Please fill in all delivery details.');
      return;
    }

    let message = `*New Order from PinDith Green Ventures Website*\n\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${customerPhone}\n`;
    message += `Delivery Address: ${deliveryAddress}\n\n`;
    if (deliveryNote) {
      message += `Delivery Note: ${deliveryNote}\n\n`;
    }
    message += `*Order Summary:*\n`;

    cartItems.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - GHS ${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n*Total: GHS ${totalPrice.toFixed(2)}*`;
    const whatsappUrl = `https://wa.me/233244123456?text=${encodeURIComponent(message)}`; // Replace with your Ghana WhatsApp number
    window.open(whatsappUrl, '_blank');
    clearCart();
    handleClose();
  };

  const handleClose = () => {
    onClose();
    // Reset view to cart after a short delay to allow animation to finish
    setTimeout(() => setView('cart'), 300);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-earth-800">Your Order</h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-800 text-2xl font-light">&times;</button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <h3 className="text-lg font-semibold text-earth-800">Your Cart is Empty</h3>
              <p className="mt-2 text-gray-500">Looks like you haven't added any products yet.</p>
              <button onClick={handleClose} className="mt-4 rounded bg-pindith-600 px-6 py-2 text-sm font-medium text-white hover:bg-pindith-700">
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {/* Cart Items */}
                {view === 'cart' && (
                  <>
                    {cartItems.map(item => (
                      <div key={item.name} className="flex items-start gap-4">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded object-cover" />
                        <div className="flex-grow">
                          <p className="font-bold text-earth-800">{item.name}</p>
                          <p className="text-sm text-pindith-700">GHS {item.price.toFixed(2)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="border rounded-md px-2">-</button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="border rounded-md px-2">+</button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.name)} className="text-gray-400 hover:text-red-500">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    {/* Delivery Form */}
                    <div className="border-t pt-4 mt-4">
                      <h3 className="text-lg font-semibold mb-3">Delivery Details</h3>
                      <div className="space-y-3">
                        <input type="text" placeholder="Your Name" value={customerName} onChange={e => setCustomerName(e.target.value)} className="w-full p-2 border rounded" required />
                        <input type="tel" placeholder="Phone Number (e.g., 0244123456)" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} className="w-full p-2 border rounded" required />
                        <textarea placeholder="Delivery Address / Digital Address" value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} className="w-full p-2 border rounded" rows={2} required></textarea>
                        <textarea placeholder="Optional: Delivery Note (e.g. call before arriving)" value={deliveryNote} onChange={e => setDeliveryNote(e.target.value)} className="w-full p-2 border rounded" rows={2}></textarea>
                      </div>
                    </div>
                  </>
                )}

                {view === 'confirmation' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-500 uppercase text-sm">Order For</h3>
                      <p>{customerName}</p>
                      <p>{customerPhone}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-500 uppercase text-sm">Deliver To</h3>
                      <p>{deliveryAddress}</p>
                      {deliveryNote && <p className="text-sm text-gray-500">Note: {deliveryNote}</p>}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-500 uppercase text-sm">Items</h3>
                      {cartItems.map(item => (
                        <div key={item.name} className="flex justify-between text-sm py-1">
                          <span>{item.name} x {item.quantity}</span>
                          <span>GHS {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => setView('cart')} className="text-sm text-pindith-700 hover:underline">
                      &larr; Back to edit
                    </button>
                  </div>
                )}
              </div>

              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Subtotal</span>
                  <span className="text-xl font-bold text-pindith-700">GHS {totalPrice.toFixed(2)}</span>
                </div>
                {view === 'cart' ? (
                  <button
                    onClick={() => {
                      if (!customerName || !customerPhone || !deliveryAddress) {
                        alert('Please fill in all required delivery details.');
                        return;
                      }
                      setView('confirmation');
                    }}
                    className="w-full rounded bg-pindith-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pindith-700"
                  >
                    Review & Confirm Order
                  </button>
                ) : (
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-600 flex items-center justify-center gap-2"
                  >
                    Send Order to WhatsApp
                  </button>
                )}
                <p className="mt-2 text-center text-xs text-gray-500">No online payment. You will finalize your order securely on WhatsApp.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}