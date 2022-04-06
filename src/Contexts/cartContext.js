import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const initialState = {
    products: []
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  function cartReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
      case "ADD_TO_CART":
        console.log("CART", payload);
        return {
          ...state,
          products: payload
        }
      case "REMOVE_FROM_CART":
        console.log("REMOVE_FROM_CART")
        return {

          ...state,
          products: payload
          //  state.filter(ele => ele !== action.payload)
          // payload
        }
      default:
        return [];

    }
  }

  // Add to wishList
  const addToCart = ({ product }) => {
    const index = cartState.products.findIndex((item) => item._id === product._id);
    if (index === -1) {
      const updateCartList = cartState.products.concat(product);
      console.log("amit", cartState);
      cartDispatch({
        type: "ADD_TO_CART",
        payload: updateCartList
      }
      );
    }
  };

  //Remove form cart
  const removeFromCart = (id) => {
    const newItems = cartState.products.filter((item) => item._id !== id);
    console.log(newItems);
    cartDispatch(
      {
        type: "REMOVE_FROM_CART",
        payload: newItems
      }
    );
    console.log("cartState", initialState);
  }

  const cartItems = cartState.products;
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
