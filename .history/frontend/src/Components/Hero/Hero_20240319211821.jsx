import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2> New Arrivals Only</h2>
      </div>
      <div>
        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="hand_icon" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
