import React, { useEffect } from "react";
const cardListURL = "http://localhost:3007/randomCards"

function RandomCard(){
  useEffect(() =>{
    fetch(cardListURL)
    .then((resp) => resp.json())
    .then((cards) => randomCards(cards))
  },[])

  
  function randomCards(cards){
   let randomIndex = Math.floor(Math.random() * cards.length);
   let randomCard = (cards[randomIndex])

      return (
        <>
        <img className="image" src={randomCard.cardImage}/>
         </>
         )
}
}

export default RandomCard