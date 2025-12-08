import { ProductCard } from './ProductCard';
import { products } from './data';

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