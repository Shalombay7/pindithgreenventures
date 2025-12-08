import { useState, useEffect } from 'react';
import { Hero } from './Hero';

// Define a type for your product for better type safety
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
};

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // The file is in `public`, so we can fetch it from the root
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching products.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <Hero />
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        {isLoading && <p className="text-center">Loading products...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-medium text-green-700">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}