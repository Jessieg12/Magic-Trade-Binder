import React from "react";
import TradeBinderCards from "./TradeBinderCards";
import "../comp-css/TradeBinder.css"

function TradeBinder({cards}){
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
      <TradeBinderCards cards={cards}/>
    </div>
  )
}

export default TradeBinder