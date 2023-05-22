import React, { useEffect, useState } from "react";
import TradePageSelected from "./TradePageSelected";
import TradePageCards from "./TradePageCards";
import "../comp-css/TradePage.css"

function TradePage({cards}){
    let [tradeCards, setTradeCards] = useState([])
    let [statement, setStatement] = useState([])

    function handleClick(card){    
     if(!tradeCards.includes(card)){
     const updatedTradeCards = [...tradeCards, card]
     setTradeCards(updatedTradeCards)
    }
	}

	useEffect(() => {
		let newArray = []
		tradeCards.map((card) => newArray.push(card.cardName))
		setStatement(newArray)
	},[tradeCards])

    return(
     <div>
      <p className="tradeHomeTitle">See a card that isn't for trade? Shoot me an offer anyways!</p>
	  <p className="clickCards">Click on the card(s) you want for trade</p>
      <TradePageCards cards={cards} handleClick={handleClick}/>
	  <TradePageSelected setTradeCards={setTradeCards} statement={statement} tradeCards={tradeCards}/>
    </div>
    )
}

export default TradePage