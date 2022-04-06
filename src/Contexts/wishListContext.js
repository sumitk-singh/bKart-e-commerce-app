import React, { createContext, useContext, useReducer } from 'react';

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const initialState = {
    products: []
  };

  const [wishListState, wishListDispatch] = useReducer(WishListReducer, initialState);

  function WishListReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
      case "ADD_TO_WISHLIST":
        // console.log("WISHLIST",payload);
        return {
          ...state,
          products: payload
        }
      case "REMOVE_FROM_WISHLIST":
        console.log("REMOVE_FROM_WISHLIST")
        return {

          ...state,
          products: payload

        }
      default:
        return [];

    }
  }

  // Add to wishList
  const addToWishList = ({ product }) => {

    // console.log("cartProduct",product);
    const index = wishListState.products.findIndex((item) => item._id === product._id);
    if (index === -1) {
      const updatedWishlist = wishListState.products.concat(product);
      wishListDispatch({
        type: "ADD_TO_WISHLIST",
        payload: updatedWishlist
      }
      );
    }
  };

  //Remove form wishList
  const removeFromWishlist = (id) => {

    const newItems = wishListState.products.filter((item) => item._id !== id);
    console.log(newItems);
    wishListDispatch(
      {
        type: "REMOVE_FROM_WISHLIST",
        payload: newItems
      }
    );
    //  console.log("wishListState",initialState);

  }


  const wishlistItems = wishListState.products;

  return (
    <WishListContext.Provider value={{ wishlistItems, wishListDispatch, addToWishList, removeFromWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };
