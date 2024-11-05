import React from "react";

function Stock({ stock, addStock, removeStock }) {
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={(e) => {
          e.stopPropagation();
          if (addStock) {
            addStock(stock)
          } else removeStock(stock)
        }}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
