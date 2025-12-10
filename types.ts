export const PRODUCT_CATEGORIES = ['Rabbit', 'Poultry', 'Other'] as const;

export interface Product {
  id: string;
  name: string;
  category: typeof PRODUCT_CATEGORIES[number];
  price: number;
  description: string;
  image: string;
  clip?: string; // Optional property for a video clip URL
  available: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
