import axios from "axios";
import React, { useEffect, useState } from "react";
import Cryptos from "../cryptos/Cryptos";
import "./FeaturedStyle.css";

const Featured = () => {
  const [coins, setCoin] = useState([]);

  // get data
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((Response) => {
        setCoin(Response.data);
        console.log(coins);
      });
  }, []);

  return (
    <>
      <div className="featured-container " id="featured">
        <p className="featured-text">
          Here Are The Most Tranding Crypto Curency
        </p>
        <section className="cards">
          {coins.map((coin) => (
            <Cryptos key={coin.id} item={coin} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Featured;
