import { useState, useMemo } from 'react';
import productsData from './products.json';
import { ProductCard } from './ProductCard';
import { Product } from './types';
import { WHATSAPP_NUMBER } from './constants';

export function HomePage() {
  const products = productsData as Product[];
  const whatsappBase = `https://wa.me/${WHATSAPP_NUMBER}`;
  const kibabMessage = encodeURIComponent(
    "Hello PinDith Green Ventures, I'd like to order rabbit kibab. Please share pricing and next steps."
  );
  const consultationMessage = encodeURIComponent(
    "Hello PinDith Green Ventures, I'd like a health consultation. Please let me know the next steps."
  );
  const generalOrderMessage = encodeURIComponent(
    "Hello PinDith Green Ventures, I'd like to place a rabbit order. Please share pricing and next steps."
  );

  // Dynamically generate categories from the product data for filtering.
  // This is more robust than using a hardcoded list.
  const availableCategories = useMemo(() => {
    const categories = new Set(products.map(p => p.category));
    const ordered = ['Rabbit', 'All', ...Array.from(categories).filter(c => c !== 'Rabbit')];
    return ordered;
  }, [products]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Rabbit');
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
      <section className="py-16 px-4 bg-gradient-to-b from-pindith-50/50 to-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-earth-800">
              Welcome to pindith Green venture
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              PinDith Green Ventures supplies healthy rabbits for raising, breeding, and farming, plus made-to-order rabbit kibab for unforgettable flavor.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row md:justify-start justify-center gap-3">
              <a
                href={`${whatsappBase}?text=${kibabMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded bg-pindith-600 px-8 py-3 text-lg font-medium text-white shadow hover:bg-pindith-700 transition"
              >
              Order Rabbit Kibab
            </a>
            <a
              href="#products"
              className="inline-block rounded border border-pindith-600 bg-white px-8 py-3 text-lg font-medium text-pindith-700 shadow-sm hover:bg-pindith-50 transition"
            >
              Buy Rabbits for Farming
            </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Freshly prepared, hygienic processing, and delivery options available.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/hero/rabbit-bbq.svg"
              alt="Rabbit barbecue on the grill"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-earth-800">Rabbit Products</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Our rabbits are available for raising, breeding, and farming. Other products are available on request.
        </p>

        {/* Category Filters */}
        <div className="my-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search rabbits for farming..."
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
              No rabbits found in this category.
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sm text-gray-600">Need general health guidance?</p>
          <a
            href={`${whatsappBase}?text=${consultationMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded border border-earth-700 bg-earth-800 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-earth-700 transition"
          >
            Health Consultation
          </a>
        </div>
      </section>

      {/* Rabbit Gallery */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="text-2xl font-bold text-earth-800 text-center">Rabbit Highlights</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Breeding stock, farm‑ready rabbits, and our signature barbecue.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/rabbits/new-zealand-white.svg"
              alt="New Zealand White rabbit"
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/rabbits/dutch-rabbit.svg"
              alt="Dutch rabbit"
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/rabbits/giant-flemish.svg"
              alt="Giant Flemish rabbit"
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/hero/rabbit-bbq.svg"
              alt="Rabbit barbecue"
              className="h-48 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg bg-white shadow-sm border border-pindith-100 p-4 text-center">
            <p className="text-2xl font-bold text-earth-800">250+</p>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div className="rounded-lg bg-white shadow-sm border border-pindith-100 p-4 text-center">
            <p className="text-2xl font-bold text-earth-800">4.8★</p>
            <p className="text-sm text-gray-600">Customer Rating</p>
          </div>
          <div className="rounded-lg bg-white shadow-sm border border-pindith-100 p-4 text-center">
            <p className="text-2xl font-bold text-earth-800">24/7</p>
            <p className="text-sm text-gray-600">Response Time</p>
          </div>
          <div className="rounded-lg bg-white shadow-sm border border-pindith-100 p-4 text-center">
            <p className="text-2xl font-bold text-earth-800">Nationwide</p>
            <p className="text-sm text-gray-600">Delivery Coverage</p>
          </div>
        </div>
      </section>

      {/* Trust & Convenience */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-5">
            <h3 className="text-lg font-semibold text-earth-800">Hygienic Processing</h3>
            <p className="mt-2 text-sm text-gray-700">Clean handling, inspected rabbits, and careful packaging.</p>
          </div>
          <div className="rounded-lg border border-amber-100 bg-amber-50/60 p-5">
            <h3 className="text-lg font-semibold text-earth-800">Transparent Pricing</h3>
            <p className="mt-2 text-sm text-gray-700">Clear rabbit pricing and kibab portions shared on WhatsApp.</p>
          </div>
          <div className="rounded-lg border border-sky-100 bg-sky-50/60 p-5">
            <h3 className="text-lg font-semibold text-earth-800">Delivery Options</h3>
            <p className="mt-2 text-sm text-gray-700">Choose pickup or delivery based on your location.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`${whatsappBase}?text=${generalOrderMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded bg-pindith-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-pindith-700 transition"
          >
            Chat to Order Rabbits
          </a>
        </div>
      </section>

      {/* Rabbit Meat Benefits */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-2xl border border-pindith-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-earth-800">Benefits of Rabbit Meat</h2>
          <p className="mt-2 text-sm text-gray-600">
            A clean, lean choice for families and fitness‑minded customers.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-4">
              <h3 className="font-semibold text-earth-800">Lean Protein</h3>
              <p className="mt-2 text-sm text-gray-700">
                Naturally lean and rich in high‑quality protein.
              </p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50/60 p-4">
              <h3 className="font-semibold text-earth-800">Lower Fat</h3>
              <p className="mt-2 text-sm text-gray-700">
                Lower fat content compared to many red meats.
              </p>
            </div>
            <div className="rounded-lg border border-sky-100 bg-sky-50/60 p-4">
              <h3 className="font-semibold text-earth-800">Heart‑Friendly</h3>
              <p className="mt-2 text-sm text-gray-700">
                A lighter option that supports a balanced diet.
              </p>
            </div>
            <div className="rounded-lg border border-pindith-100 bg-pindith-50/60 p-4">
              <h3 className="font-semibold text-earth-800">Delicious Flavor</h3>
              <p className="mt-2 text-sm text-gray-700">
                Mild taste that pairs perfectly with barbecue spices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-earth-800 mb-6 text-center">Quick Answers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-earth-800">How do I place an order?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Click any WhatsApp button, send your request, and we’ll confirm price, quantity, and delivery.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-earth-800">Do you offer delivery?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Yes. We offer pickup and delivery options depending on your location.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-earth-800">Are the rabbits healthy?</h3>
            <p className="mt-2 text-sm text-gray-700">
              We prioritize hygienic care and healthy rabbits, with guidance available on request.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-earth-800">Can I request a custom order?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Absolutely. Share your needs on WhatsApp and we’ll guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-1/2 z-40 w-[92%] -translate-x-1/2 sm:hidden">
        <a
          href={`${whatsappBase}?text=${kibabMessage}`}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center rounded-full bg-pindith-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-pindith-700 transition"
        >
          Order Rabbit Kibab
        </a>
      </div>
    </div>
  );
}
