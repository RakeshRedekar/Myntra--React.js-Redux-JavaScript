import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Cart from "./Cart";
import Footer from "./Footer";
import Login from "./Login";
import MainBody from "./MainBody";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import Sale from "./Sale";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <div id="main">
          <Navbar />
          <Sale />
          <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path="/:userID" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <Login set={setUser} />
      )}
    </>
  );
};

export default App;
