import React from "react";

function TradePageCards({cards, handleClick}){

  let mappedcards= cards.map((card)=> 
  <div
  key={card.id} 
  onClick={() => handleClick(card)}
  className="tradeCard">
      <h1>{card.cardName}</h1>
      <h2>{card.cardSet}</h2>
      <div>Is this card for trade?
      {card.forTrade === false ? 
      <p className="NFT">Not for Trade</p> : 
      <p className="ForTrade">Available for Trade</p>}
      </div>
  </div>
  )
  
  return(
    <div>
      {mappedcards}
    </div>
  )
}

export default TradePageCards