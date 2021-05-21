import React from "react";

const CoinInfo = () => {
  return (
    <div className="coin-container coin-info">
      <div className="coin-row ">
        <div className="coin">
          <h1 className="name">Name</h1>
          <h1 className="symbol">Symbol</h1>
          <h1 className="price">Price</h1>
          <h1 className="volume">Volume</h1>
          <h1 className="percentage">Percentage</h1>
          <h1 className="marketcap">Market-Cap</h1>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
