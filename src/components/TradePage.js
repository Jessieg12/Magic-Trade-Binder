import React, { useState } from "react";
import TradePageSelected from "./TradePageSelected";
import TradePageCards from "./TradePageCards";
import "../comp-css/TradePage.css"

function TradePage({cards, onAddComment}){
  const [tradeCards, setTradeCards] = useState([])

  function handleClick(card){    
    if(!tradeCards.includes(card)){
    setTradeCards([...tradeCards, card])
  }}

  return(
    <div>
      <p className="tradeHomeTitle">Shown below are cards up for trade!</p>
	    <p className="clickCards">Click on the card(s) you want for trade</p>
      <TradePageCards cards={cards} tradeCards={tradeCards} handleClick={handleClick}/>
	    <TradePageSelected setTradeCards={setTradeCards} tradeCards={tradeCards} onAddComment={onAddComment}/>
    </div>
    )
}

export default TradePage