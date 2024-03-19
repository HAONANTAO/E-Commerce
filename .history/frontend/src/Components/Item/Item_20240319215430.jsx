import React from "react";
import "./Item.css";
const Item = (props) => {
  // 根据传入prop进行渲染
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new"></div>
        <div className="item-price-new"></div>
      </div>
    </div>
  );
};

export default Item;
