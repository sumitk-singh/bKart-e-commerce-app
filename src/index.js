import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CartProvider } from './Contexts/cartContext'
import { WishListProvider } from './Contexts/wishListContext';
import { FilterProvider } from "./Contexts/filterContext";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
    <WishListProvider>
      <CartProvider>
     <Router>
    <App />
    </Router>
    </CartProvider>
    </WishListProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
