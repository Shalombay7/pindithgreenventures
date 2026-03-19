import { Product, PRODUCT_CATEGORIES } from './types';

// Using a placeholder video that evokes nature/farming vibes
export const HERO_VIDEO_URL = "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38af135c6663d1597&profile_id=165&oauth2_token_id=57447761";
export const WHATSAPP_NUMBER = "204520055"; // Updated business number

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'New Zealand White Rabbit',
    slug: 'new-zealand-white-rabbit',
    category: PRODUCT_CATEGORIES[0], // 'Rabbit'
    price: 350,
    description: 'Premium breed known for fast growth and excellent meat quality. Perfect for breeding stock.',
    image: '/images/rabbits/new-zealand-white.jpg',
    clip: '/images/rabbits/rabbit-v1.mp4',
    available: true,
  },
  {
    id: '2',
    name: 'Dutch Rabbit Pair',
    slug: 'dutch-rabbit-pair',
    category: PRODUCT_CATEGORIES[0], // 'Rabbit'
    price: 350,
    description: 'Distinctive markings and docile temperament. Excellent for pets or small-scale breeding.',
    image: '/images/rabbits/dutch-rabbit.jpg',
    clip: '/images/rabbits/rabbit-v2.mp4',
    available: false,
  },
  {
    id: '5',
    name: 'Giant Flemish Rabbit',
    slug: 'giant-flemish-rabbit',
    category: PRODUCT_CATEGORIES[0], // 'Rabbit'
    price: 350,
    description: 'The gentle giant of the rabbit world. Impressive size and calm nature.',
    image: '/images/rabbits/giant-flemish.jpg',
    available: true,
  },
  }
];
