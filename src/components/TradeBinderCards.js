import React from "react";

function TradeBinderCards({cards}){
let mappedCard = cards.map((card) => 
  <div 
    className="card" 
    key={card.id}>
      <p>
    {card.cardName}
      </p>
      <img 
        alt="binderCards"
        className="cardImage" 
        src={card.cardImage}>
      </img>
      <p>
        {card.cardSet}
      </p>
      <input 
        className="trade"
        type="checkbox" 
        defaultChecked={card.forTrade}/>
        <label>
          Available for trade?
        </label>
  
  </div>
  )
  return (
    <div>
      {mappedCard}
    </div>
  )
}

export default TradeBinderCards