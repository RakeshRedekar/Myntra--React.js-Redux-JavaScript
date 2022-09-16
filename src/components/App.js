import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Cart from "./Cart";
import MainBody from "./MainBody";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/:userID" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
