import React from "react";
import "../comp-css/TradingCards.css"

function TradingCards({tradeCards}){

  let mappedTradeCards = tradeCards.map((card) => <div key={card.id}>{card.cardName}</div>)


  return(
    <div className="trade">
      <p>Card(s) Selected to be traded!</p>
      {mappedTradeCards}
      <p>What would you like to trade?</p>
    </div>
  )
}

export default TradingCards