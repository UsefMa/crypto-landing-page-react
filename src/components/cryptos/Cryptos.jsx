import React from "react";
import "./CryptoStyle.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Cryptos = ({ item }) => {
  return (
    <>
        
      <div className="cryptos-container">
        
        
        <img  src={item.image} alt="" className="coin-img" />
        <p> {item.name} </p>
        <p className="price"> Price : {item.current_price.toLocaleString()}$ </p>
        {item.price_change_percentage_24h < 0 ? (
          <span>
            
            <p className="red">{item.price_change_percentage_24h} <FaArrowDown /></p>
          </span>
        ) : (
          <span>
            
            <p className="green">{item.price_change_percentage_24h}<FaArrowUp /></p>
          </span>
        )}
      </div>
    </>
  );
};

export default Cryptos;
