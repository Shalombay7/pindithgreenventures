import { Product, PRODUCT_CATEGORIES } from './types';

// Using a placeholder video that evokes nature/farming vibes
export const HERO_VIDEO_URL = "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38af135c6663d1597&profile_id=165&oauth2_token_id=57447761";
export const WHATSAPP_NUMBER = "233244777504"; // Updated business number

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Californian Rabbit',
    category: PRODUCT_CATEGORIES[0], // 'Rabbit'
    price: 15000,
    description: 'Premium breed known for fast growth and excellent meat quality. Perfect for breeding stock.',
    image: '/images/rabbits/californian-rabbit.jpg',
    clip: '/images/rabbits/rabbit v1.mp4',
    available: true,
  },
  {
    id: '2',
    name: 'Dutch Rabbit Pair',
    category: PRODUCT_CATEGORIES[0], // 'Rabbit'
    price: 25000,
    description: 'Distinctive markings and docile temperament. Excellent for pets or small-scale breeding.',
    image: '/images/rabbits/dutch-rabbit.jpg', // Placeholder image
    clip: '/images/rabbits/rabbit v2.mp4',
    available: false,
  },
  {
    id: '3',
    name: 'Mature Broilers (Kg)',
    category: PRODUCT_CATEGORIES[1], // 'Poultry'
    price: 3500,
    description: 'Healthy, organically fed broilers. Price per kg live weight. Tender and rich in flavor.',
    image: '/images/poultry/broiler-chicken.jpg',
    available: true,
  },
  {
    id: '4',
    name: 'Organic Layers',
    category: PRODUCT_CATEGORIES[1], // 'Poultry'
    price: 4500,
    description: 'Point-of-lay hens raised in free-range environments. High egg production capability.',
    image: '/images/poultry/rhode-island-red.jpg',
    available: true,
  },
  {
    id: '5',
    name: 'Giant Flemish Rabbit',
    category: PRODUCT_CATEGORIES[0], // 'Rabbit'
    price: 30000,
    description: 'The gentle giant of the rabbit world. Impressive size and calm nature.',
    image: '/images/rabbits/giant-flemish.jpeg', // Moved to rabbits folder and renamed for clarity
    available: true,
  },
  {
    id: '6',
    name: 'Quail Crate (30 Eggs)',
    category: PRODUCT_CATEGORIES[1], // 'Poultry'
    price: 1800,
    description: 'Fresh, nutrient-dense quail eggs. Great for children and immune boosting.',
    image: '/images/poultry/quail-eggs.jpg',
    available: true,
  }
];