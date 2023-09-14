import React from "react";
import TradePageSelectedForm from "./TradePageSelectedForm";
import "../comp-css/TradePageSelected.css"

function TradePageSelected({tradeCards, setTradeCards, onAddComment}){

  let mappedTradeCards = tradeCards.map((card) => <div key={card.id}>{card.cardName}</div>)

  function handleClick(){
    setTradeCards([])
  }

  return(
    <div className="trades">
      <div className="selectedcard">
      <h1 className="selectedCards">Card(s) selected to be traded shown below!</h1>
      {mappedTradeCards}
      <br></br>
      <button onClick={handleClick}>Reset card(s) selected</button>
      </div>
      <div className="tradecard"> 
      <h2>What would you like to trade?</h2>
        <div>Please fill out the following trade form:</div>
    <TradePageSelectedForm setTradeCards={setTradeCards} tradeCards={tradeCards} onAddComment={onAddComment}/>
      </div>
    </div>
  )
}

export default TradePageSelected