import { Product } from './types';

// Using a placeholder video that evokes nature/farming vibes
export const HERO_VIDEO_URL = "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38af135c6663d1597&profile_id=165&oauth2_token_id=57447761";
export const WHATSAPP_NUMBER = "233244777504"; // Updated business number

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'New Zealand White Rabbit',
    category: 'Rabbit',
    price: 15000,
    description: 'Premium breed known for fast growth and excellent meat quality. Perfect for breeding stock.',
    image: 'https://images.unsplash.com/photo-1585110396063-7eb89899c759?auto=format&fit=crop&q=80&w=800',
    available: true,
  },
  {
    id: '2',
    name: 'Dutch Rabbit Pair',
    category: 'Rabbit',
    price: 25000,
    description: 'Distinctive markings and docile temperament. Excellent for pets or small-scale breeding.',
    image: 'https://images.unsplash.com/photo-1559209172-0ff8f6d49484?auto=format&fit=crop&q=80&w=800',
    available: false,
  },
  {
    id: '3',
    name: 'Mature Broilers (Kg)',
    category: 'Poultry',
    price: 3500,
    description: 'Healthy, organically fed broilers. Price per kg live weight. Tender and rich in flavor.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800',
    available: true,
  },
  {
    id: '4',
    name: 'Organic Layers',
    category: 'Poultry',
    price: 4500,
    description: 'Point-of-lay hens raised in free-range environments. High egg production capability.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800',
    available: true,
  },
  {
    id: '5',
    name: 'Giant Flemish Rabbit',
    category: 'Rabbit',
    price: 30000,
    description: 'The gentle giant of the rabbit world. Impressive size and calm nature.',
    image: 'https://images.unsplash.com/photo-1473631165492-49f3e433436d?auto=format&fit=crop&q=80&w=800',
    available: true,
  },
  {
    id: '6',
    name: 'Quail Crate (30 Eggs)',
    category: 'Poultry',
    price: 1800,
    description: 'Fresh, nutrient-dense quail eggs. Great for children and immune boosting.',
    image: 'https://images.unsplash.com/photo-1599307406326-805c87c067d0?auto=format&fit=crop&q=80&w=800',
    available: true,
  }
];