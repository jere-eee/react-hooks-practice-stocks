import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stocks.map((stock) => (
        <Stock stock={stock} key={stock.id} addStock={addStock}/>
      ))}
    </div>
  );
}

export default StockContainer;
