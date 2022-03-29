import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    <Footer />
  </div>;
}

export default App;
