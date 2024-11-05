import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [boughtStocks, setBoughtStocks] = useState([])
  const [category, setCategory] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:3001/stocks")
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])
  
  let renderedStocks = stocks.filter((stock) => {
    if (stock.type === category) {
      return stock
    } else if (category === "") {
      return stock
    }
  })


  function handleAddStock(bStock) {
    setBoughtStocks([...boughtStocks, bStock])
  }

  function handleRemoveStock(rStock) {
    const currentStocks = boughtStocks.filter(st => st.id !== rStock.id)
    setBoughtStocks(currentStocks)
  }

  function handleFilter(category) {
    setCategory(category)
  }
  
  function handleAlphab(){
    const alphabStocks = [...stocks].sort((a, b) => a.name.localeCompare(b.name))
    setStocks(alphabStocks)
  }

  function handlePrice() {
    const prices = [...stocks].sort((a, b) => {
      if (a.price > b.price) {
        return -1
      } else if (b.price > a.price){
        return 1
      } else return 0
    })
    console.log(prices)
    setStocks(prices)
  }
  return (
    <div>
      <SearchBar onFilter={handleFilter} onAlphab={handleAlphab} onPrice={handlePrice}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={renderedStocks} addStock={handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks} removeStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
