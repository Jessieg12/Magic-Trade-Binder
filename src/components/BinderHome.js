import React from "react";
import "../comp-css/BinderHome.css"

let cards = [{
  "id": 0, 
  "cardName": "Vampiric Tutor", 
  "image": "https://cards.scryfall.io/large/front/d/8/d8337172-e15d-4e09-b3de-dc7b5bf006a7.jpg?1637978678", 
  "set": "The List"
},
{
  "id": 1, 
  "cardName": "Expropriate", 
  "image": "https://cards.scryfall.io/large/front/4/6/46423a22-781b-4cb0-b3a9-9bf888b4f82a.jpg?1573507481", 
  "set": "Mystery Booster"
},
{
  "id": 2, 
  "cardName": "Karn Liberated", 
  "image": "https://cards.scryfall.io/large/front/c/d/cd1deda0-c99d-4570-a5dd-f51eb5d12570.jpg?1562267420", 
  "set": "Modern Masters 2015"
}
]

let mappedCard = cards.map((card) => 
<div className="card" key={card.id}>
  {card.cardName}
  <img className="cardImage" src={card.image}></img>
</div>)

console.log(cards)

function BinderHome(){
  return(
    <div>
      <p className="binderTitle">Binder Home!</p>
      {mappedCard}

    </div>
  )
}

export default BinderHome