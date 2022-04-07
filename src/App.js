import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignupPage from "./pages/AuthPage/SignupPage";

function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Product' element={<ProductPage />} />
      <Route path='/Cart' element={<CartPage />} />
      <Route path='/Wishlist' element={<WishlistPage />} />
      <Route path='/Login' element={<LoginPage />} />
      <Route path= '/Signup' element={<SignupPage/>}/>
    </Routes>
    <Footer />
  </div>;
}

export default App;
