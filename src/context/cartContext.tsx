import React, { createContext, useCallback, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  //   const addToCart = (product: any) => {
  //     setCart([...cart, product]);
  //     const productInCart = cart.find((p) => p.id === product.id);
  //     console.log(productInCart);

  // if (productInCart) {
  //   console.log("PRODUTO EXISTE");
  //   const poke = cart.map((cartItem) => {
  //     if (cartItem.id === productInCart.id) {
  //       productInCart.quantity += 1;
  //     }
  //     return cartItem;
  //   });
  //   setCart(poke);
  // } else {
  //   console.log("PRODUTO NAO EXISTE");
  //   setCart([...cart, { ...product, quantity: 1 }]);
  // }
  //   };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
