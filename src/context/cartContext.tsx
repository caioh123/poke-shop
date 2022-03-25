import React, { createContext, useCallback, useContext, useState } from "react";
type ProductData = {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
};

export type CartContextData = {
  products: ProductData[];
  addToCart(item: ProductData): void;
  removeFromCart(index: number): void;
};

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ProductData[]>([]);

  const addToCart = useCallback(
    (product) => {
      setCart([...cart, product]);
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (index) => {
      cart.splice(index, 1);
      setCart([...cart]);
    },
    [cart]
  );
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
