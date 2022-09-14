import React, { useEffect } from "react";
import "../styles/App.css";
import MainBody from "./MainBody";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <MainBody />
    </div>
  );
};

export default App;
