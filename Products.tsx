import { ProductCard } from './ProductCard';
 const products = [
  {
    name: 'Premium Rabbits',
    description: 'Healthy, well-cared-for rabbits, perfect for breeding or as a source of lean protein.',
    imageUrl: 'https://images.unsplash.com/photo-1591824438708-ce405f35ba15?q=80&w=2070&auto=format&fit=crop',
    price: 'GHS 150.00',
  },
  {
    name: 'Free-Range Poultry',
    description: 'Our chickens are raised outdoors, resulting in flavorful, high-quality meat and eggs.',
    imageUrl: 'https://images.unsplash.com/photo-1569402403932-b00b34241a63?q=80&w=1964&auto=format&fit=crop',
    price: 'GHS 80.00',
  },
];

export function Products() {
  return (
    <section id="products" className="bg-earth-100 py-16 sm:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-earth-800 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-gray-500">
            Sustainably raised and carefully selected for the best quality.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}