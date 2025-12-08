import { useParams, Link } from 'react-router-dom';
import { products } from './data';
import { useCart } from './CartContext';

export function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === productId);

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

  const { name, description, imageUrl, price } = product;

  const handleDirectWhatsAppOrder = () => {
    const priceAsNumber = parseFloat(price.replace('GHS ', ''));
    let message = `*Direct Order from PinDith Green Ventures*\n\n`;
    message += `I'm interested in ordering the following item:\n\n`;
    message += `- ${name} - ${price}\n\n`;
    message += `Please let me know the next steps.`;

    const whatsappUrl = `https://wa.me/233244123456?text=${encodeURIComponent(message)}`; // Replace with your number
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    const priceAsNumber = parseFloat(price.replace('GHS ', ''));
    addToCart({ name, price: priceAsNumber, imageUrl });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={imageUrl} alt={name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold text-earth-800">{name}</h1>
          <p className="text-2xl font-semibold text-pindith-700 mt-2">{price}</p>
          <p className="mt-4 text-gray-600">{description}</p>
          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={handleAddToCart}
              className="w-full rounded bg-pindith-600 px-12 py-3 text-lg font-medium text-white shadow hover:bg-pindith-700"
            >
              Add to My Cart
            </button>
            <button
              onClick={handleDirectWhatsAppOrder}
              className="w-full rounded border border-pindith-600 bg-white px-12 py-3 text-lg font-medium text-pindith-700 shadow-sm hover:bg-pindith-50"
            >
              Quick Order via WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500">
              You'll confirm delivery and payment details directly with us on WhatsApp.
              <br />
              No online payment required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}