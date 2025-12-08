import { useCart } from './CartContext';

type StickyCartBarProps = {
  onCheckoutClick: () => void;
};

export function StickyCartBar({ onCheckoutClick }: StickyCartBarProps) {
  const { itemCount, totalPrice } = useCart();

  if (itemCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-earth-800 text-white p-4 shadow-lg z-40 transform transition-transform duration-300 animate-in slide-in-from-bottom">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div>
          <span className="font-bold">{itemCount} item{itemCount > 1 ? 's' : ''}</span>
          <span className="mx-2">|</span>
          <span className="font-semibold">GHS {totalPrice.toFixed(2)}</span>
        </div>
        <button onClick={onCheckoutClick} className="rounded bg-pindith-600 px-6 py-2 text-sm font-medium shadow hover:bg-pindith-700">
          View Cart & Checkout
        </button>
      </div>
    </div>
  );
}