import React, { useState } from "react";
import "./Offer.css";

function Offer() {
  const [offerStyle, setStyle] = useState({ display: "none" });
  const handleShow = () => {
    setStyle({
      display: `${offerStyle.display == "block" ? "none" : "block"}`,
    });
  };
  return (
    <div className="offer">
      <h2 onClick={handleShow}>~ Flat 300Rs OFF ~</h2>
      <div style={offerStyle} className="offerContaint">
        <div className="offerDetails">
          <div className="OfferDetailText">
            <h4>300Rs OFF + FREE SHIPPING</h4>
            <p>
              Coupon Code : <span>MYNTRA 300</span>
            </p>
            <p>Applicable on your first order</p>
          </div>
          <div className="OfferDetailImage">
            <img src="public\Offer.png"></img>
            <button>Buy Product</button>
          </div>
        </div>
        <ul className="offerList">
          <li>Genuine Products</li>
          <li>Try and Buy</li>
          <li>Easy Exchange & Returns</li>
        </ul>
      </div>
    </div>
  );
}

export default Offer;
