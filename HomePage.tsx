import { Hero } from './Hero';
// Import the JSON data directly. Vite will handle the loading.
import productsData from './products.json';
import { ProductCard } from './ProductCard';

// Define a type for your product for better type safety
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
};

export function HomePage() {
  // The data is now available directly from the import.
  const products: Product[] = productsData;

  return (
    <>
      <Hero />
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}