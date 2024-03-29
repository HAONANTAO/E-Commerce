import React from "react";
import "./Offer.css";
import exclusive_img from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left"></div>
      <h1>Exclusive</h1>
      <h1>Offers For You</h1>
      <p>ONLY ON BEST SELLERS PRODUCTS</p>
      <button>Check Now</button>
      <div className="offers-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
