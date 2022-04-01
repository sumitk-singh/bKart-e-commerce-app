import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
