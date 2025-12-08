import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

type CartItem = {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (productName: string, quantity: number) => void;
  removeFromCart: (productName: string) => void;
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

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productName);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === productName ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (productName: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== productName));
  };

  const clearCart = () => setCartItems([]);

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