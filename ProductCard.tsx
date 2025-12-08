import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
};

export function ProductCard({ id, name, description, imageUrl, price }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the link navigation
    e.stopPropagation(); // Stop event from bubbling up to the <a> tag
    const priceAsNumber = parseFloat(price.replace('GHS ', ''));
    addToCart({ name, price: priceAsNumber, imageUrl });
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/products/${id}`} className="block">
        <div className="h-56 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={`Image of ${name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-earth-800">{name}</h3>
        <p className="mt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-pindith-700">{price}</p>
          <button onClick={handleAddToCart} className="rounded bg-pindith-600 px-5 py-2 text-sm font-medium text-white hover:bg-pindith-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}