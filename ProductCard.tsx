import { Link } from 'react-router-dom';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, name, image, price, available } = product;

  return (
    <Link to={`/product/${id}`} className="group relative block border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      {!available && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Out of Stock</div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-earth-700 group-hover:text-pindith-700">{name}</h3>
        <p className="text-pindith-700 mt-1">GHS {price.toFixed(2)}</p>
      </div>
    </Link>
  );
}