import React from "react";
import TradeBinderCards from "./TradeBinderCards";
import "../comp-css/TradeBinder.css"

function TradeBinder({cards}){
  let mappedCard = cards.map((card) => 
    <TradeBinderCards key={card.id} card={card} />)

  return(
    <div>
      <p className="binderTitle">Binder Home!</p>
      <div>
        <p className="legend">
          Legend:
          <li>
            Cards with the checkbox checked are available for trade!
          </li>
          <li>
            Cards without the checkbox are not for trade!
          </li>
        </p>
      </div>
      {mappedCard}
    </div>
  )
}

export default TradeBinder