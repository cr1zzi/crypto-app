import React, { useState, useEffect } from "react";
import "./App.css";
import SingleCoin from "./Components/SingleCoin";
import CoinInfo from "./Components/CoinInfo";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //filter coins and display
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coin-text">Crypto-info</h1>
        <form>
          <input
            placeholder="Search a cryptocurrency . . ."
            type="text"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <CoinInfo />
      {filteredCoins.map((coin) => {
        return (
          <SingleCoin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
