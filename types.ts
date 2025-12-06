export interface Product {
  id: string;
  name: string;
  category: 'Rabbit' | 'Poultry' | 'Other';
  price: number;
  description: string;
  image: string;
  available: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
