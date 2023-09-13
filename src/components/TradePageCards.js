import React from "react";

function TradePageCards({cards, handleClick}){

  let mappedcards= cards.map((card)=> 
    card.forTrade === true ?
      <div
        key={card.id} 
        onClick={() => handleClick(card)}
        className="tradeCard">
          <h1>{card.cardName}</h1>
          <h2>{card.cardSet}</h2>
            <div>Is this card for trade? 
              <p className="ForTrade">Available for Trade</p>
            </div>
      </div> : null
  )
  
  return(
    <div>
      {mappedcards}
    </div>
  )
}

export default TradePageCards