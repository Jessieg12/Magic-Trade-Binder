import React from "react";
import "../comp-css/TradeBinderCards.css"

function TradeBinderCards({card}){
  return (
    <div className="card">
      <p>{card.cardName}</p>
      <img 
        alt="binderCards"
        className="cardImage" 
        src={card.cardImage}>
      </img>
      <p>{card.cardSet}</p>
      <input 
        className="trade"
        type="checkbox" 
        defaultChecked={card.forTrade}/>
        <label>Available for trade?</label>
    </div>
  )
}

export default TradeBinderCards