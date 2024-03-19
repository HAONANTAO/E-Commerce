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
      </div>
    </div>
  );
};

export default Hero;
