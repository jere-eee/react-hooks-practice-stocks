import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer({boughtStocks, removeStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      {boughtStocks.map((bStock) => (
        <Stock stock={bStock} key={bStock.id} removeStock={removeStock}/>
      ))}
    </div>
  );
}

export default PortfolioContainer;
