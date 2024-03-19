import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={(ev) => {
            setMenu(ev.target.textContent);
          }}>
          Shop
          <hr />
        </li>
        <li
          onClick={(ev) => {
            setMenu(ev.target.textContent);
          }}>
          Men
        </li>
        <li
          onClick={(ev) => {
            setMenu(ev.target.textContent);
          }}>
          Women
        </li>
        <li
          onClick={(ev) => {
            setMenu(ev.target.textContent);
          }}>
          Child
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
