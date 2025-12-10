import React, { createContext, useContext, ReactNode, useMemo, useReducer } from 'react';

type CartItem = {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'UPDATE_QUANTITY'; payload: { productName: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { productName: string } }
  | { type: 'CLEAR_CART' };

type CartContextType = {
  cartItems: CartItem[];
  // Dispatch is not exposed directly, but through semantic functions
  addToCart: (product: Omit<CartItem, 'quantity'>) => void; // Keep the public API the same
  updateQuantity: (productName: string, quantity: number) => void; // Keep the public API the same
  removeFromCart: (productName: string) => void; // Keep the public API the same
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.find((item) => item.name === action.payload.name);
      if (existingItem) {
        return state.map((item) =>
          item.name === action.payload.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return state.filter((item) => item.name !== action.payload.productName);
      }
      return state.map((item) =>
        item.name === action.payload.productName ? { ...item, quantity: action.payload.quantity } : item
      );
    }
    case 'REMOVE_ITEM': {
      return state.filter((item) => item.name !== action.payload.productName);
    }
    case 'CLEAR_CART': {
      return [];
    }
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const updateQuantity = (productName: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productName, quantity } });
  };

  const removeFromCart = (productName: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productName } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const itemCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    itemCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}