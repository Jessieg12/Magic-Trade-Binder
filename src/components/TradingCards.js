import React, { useState } from "react";
import "../comp-css/TradingCards.css"

function TradingCards({tradeCards}){
  let [tradingCardName, setTradingCardname] = useState('')

  let mappedTradeCards = tradeCards.map((card) => <div key={card.id}>{card.cardName}</div>)
  
  function handleSubmit(e){
    e.preventDefault()
    console.log(e)
  }

  return(
    <div className="trades">
      <h1 className="selectedCards">Card(s) Selected to be traded!</h1>
      {mappedTradeCards}
      <h2>What would you like to trade?</h2>
        <div>Please fill out the following trade form.</div>
        <form onSubmit={handleSubmit}>
          <p>Please enter the card name</p>
            <input
            type="text"
            value={tradingCardName}
            onChange={(e) => setTradingCardname(e.target.value)}
            placeholder="Enter Card Name"> 
          </input>
          <input type="submit" value={'Submit trade!'}/>
        </form>
    </div>
  )
}

export default TradingCards