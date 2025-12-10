import { useState, useMemo } from 'react';
import productsData from './products.json';
import { ProductCard } from './ProductCard';
import { Product } from './types';

export function HomePage() {
  const products = productsData as Product[];

  // Dynamically generate categories from the product data for filtering.
  // This is more robust than using a hardcoded list.
  const availableCategories = useMemo(() => {
    const categories = new Set(products.map(p => p.category));
    return ['All', ...Array.from(categories)];
  }, [products]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        return selectedCategory === 'All' || product.category === selectedCategory;
      })
      .filter(product => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [products, selectedCategory, searchTerm]);
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-pindith-50/50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-earth-800">
          Quality Livestock from PinDith Green Ventures
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your trusted source for premium rabbits and poultry. We are dedicated to sustainable and ethical farming practices.
        </p>
        <a
          href="#products"
          className="mt-8 inline-block rounded bg-pindith-600 px-8 py-3 text-lg font-medium text-white shadow hover:bg-pindith-700 transition"
        >
          Browse Our Products
        </a>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-earth-800">Our Products</h2>

        {/* Category Filters */}
        <div className="my-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-pindith-500 focus:outline-none"
          />
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {availableCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-pindith-600 text-white shadow'
                  : 'bg-white text-pindith-700 hover:bg-pindith-50 border border-pindith-200'
              }`}
            >
              {category}
            </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-8">
              No products found in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}