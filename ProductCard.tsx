type ProductCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
};

export function ProductCard({ name, description, imageUrl, price }: ProductCardProps) {
  return (
    <a href="#" className="group block overflow-hidden rounded-lg border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-56 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={`Image of ${name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-earth-800">{name}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <p className="mt-4 text-lg font-semibold text-pindith-700">{price}</p>
      </div>
    </a>
  );
}