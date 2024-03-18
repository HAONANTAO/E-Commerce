import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Child</li>
      </ul>
      <div className="nav-login-cart">
        <button type="">Login</button> <img src={logo} alt="nav-logo" />
      </div>
    </div>
  );
};

export default Navbar;
