// CartContext.js
import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //   const [notification, setNotification] = useState(null);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    // setNotification(`${item[0].title.slice(0, 10)} has been added to the cart`);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        // , notification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
