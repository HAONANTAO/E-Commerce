import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">New Arrivals Only</div>
      <div className="hero-right">
        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src="" alt="">
      </div>
    </div>
  );
};

export default Hero;
