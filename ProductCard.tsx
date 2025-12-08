import { Link } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="group block h-full">
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* You can add an image here later if you want */}
        {/* <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" /> */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-pindith-700 transition-colors">{product.name}</h3>
        </div>
        <p className="text-lg font-medium text-green-700 mt-2">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}