import React, { createContext, useState, useContext } from 'react';

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlistItem, setWishListItem] = useState([]);
  return (
    <WishListContext.Provider value={{ wishlistItem, setWishListItem }}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };
