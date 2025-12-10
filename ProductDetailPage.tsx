import { useParams, Link } from 'react-router-dom';
import productsData from './products.json';
import { useCart } from './CartContext';
import { Product } from './types';
import { ProductCard } from './ProductCard';

export function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  // Explicitly type productsData to ensure it conforms to the Product interface
  const product = (productsData as Product[]).find(p => p.id === productId);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="mt-4 text-pindith-700 hover:underline">
          &larr; Back to all products
        </Link>
      </div>
    );
  }

  const { name, description, price, image, available, category } = product;

  // Find related products from the same category, excluding the current one.
  const relatedProducts = (productsData as Product[])
    .filter(p => p.category === category && p.id !== productId)
    .slice(0, 3); // Show up to 3 related products


  const handleDirectWhatsAppOrder = () => {
    let message = `*Direct Order from PinDith Green Ventures*\n\n`;
    message += `I'm interested in ordering the following item:\n\n`;
    message += `- ${name} - GHS ${price.toFixed(2)}\n\n`;
    message += `Please let me know the next steps.`;

    const whatsappUrl = `https://wa.me/233244123456?text=${encodeURIComponent(message)}`; // Replace with your number
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    if (!available) return;
    addToCart(product);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={image} alt={name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold text-earth-800">{name}</h1>
          {available ? (
            <p className="text-2xl font-semibold text-pindith-700 mt-2">GHS {price.toFixed(2)}</p>
          ) : (
            <p className="mt-2 text-2xl font-semibold text-red-600">Currently Out of Stock</p>
          )}
          <p className="mt-4 text-gray-600">{description}</p>
          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={handleAddToCart}
              disabled={!available}
              className="w-full rounded bg-pindith-600 px-12 py-3 text-lg font-medium text-white shadow hover:bg-pindith-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Add to My Cart
            </button>
            <button
              onClick={handleDirectWhatsAppOrder}
              disabled={!available}
              className="w-full rounded border border-pindith-600 bg-white px-12 py-3 text-lg font-medium text-pindith-700 shadow-sm hover:bg-pindith-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300"
            >
              Quick Order via WhatsApp
            </button>
            {available && (
              <p className="text-center text-xs text-gray-500">
                You'll confirm delivery and payment details directly with us on WhatsApp.
                <br />
                No online payment required.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-earth-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map(related => <ProductCard key={related.id} product={related} />)}
          </div>
        </div>
      )}
    </div>
  );
}