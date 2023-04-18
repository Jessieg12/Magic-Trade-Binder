import React from "react";
import "../comp-css/MakeTradeHome.css"

function MakeTradeHome({cards}){
    
    let mappedcards= cards.map((card)=> 
    <><p>{card.cardName}</p>
    <p>is this card for trade?
        {card.forTrade === false ? 
        <p className="NFT">Not for Trade</p> : 
        <p className="ForTrade">Available for Trade</p>}
    </p>
    </>)

    return(
        <div>
            <p>See a card that isn't for trade? Shoot me an offer anyways!</p>
            {mappedcards}
        </div>
    )
}

export default MakeTradeHome