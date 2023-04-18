import React, { useState } from "react";
import "../comp-css/MakeTradeHome.css"

function MakeTradeHome({cards}){

    let [tradeCards, setTradeCards] = useState([])

    function handleClick(card){
        
        if(!tradeCards.includes(card)){
            const updatedTradeCards = [...tradeCards, card]
        setTradeCards(updatedTradeCards)
        }
    }
    
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
            <p className="tradeHomeTitle">See a card that isn't for trade? Shoot me an offer anyways!</p>
            {mappedcards}
        </div>
    )
}

export default MakeTradeHome