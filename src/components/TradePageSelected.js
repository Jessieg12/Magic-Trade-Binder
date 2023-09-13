import React from "react";
import TradePageSelectedForm from "./TradePageSelectedForm";
import "../comp-css/TradePageSelected.css"

function TradePageSelected({tradeCards, clickedCards, setTradeCards}){

  let mappedTradeCards = tradeCards.map((card) => <div key={card.id}>{card.cardName}</div>)

  function handleClick(e){
    e.preventDefault()
    setTradeCards([])
  }

  return(
    <div className="trades">
      <div className="selectedcard">
      <h1 className="selectedCards">Card(s) Selected to be traded shown below!</h1>
      {mappedTradeCards}
      <br></br>
      <button onClick={handleClick}>Reset card(s) selected</button>
      </div>
      <div className="tradecard"> 
      <h2>What would you like to trade?</h2>
        <div>Please fill out the following trade form:</div>
    <TradePageSelectedForm setTradeCards={setTradeCards} clickedCards={clickedCards}/>
      </div>
    </div>
  )
}

export default TradePageSelected