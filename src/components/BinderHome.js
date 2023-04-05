import React, { useEffect, useState } from "react";
import NewCardForm from "./NewCardForm";
import "../comp-css/BinderHome.css"
import { tsConstructSignatureDeclaration } from "@babel/types";

/*
NOTE:
I would like to implement a way to Alphabetize the card names as they are being fetched!!
*/


// let URL = 'http://localhost:3007/binder'

function BinderHome({cards}){
  // let [cards, setCards] = useState([])
  // useEffect(() =>{
  //   fetch(URL)
  //     .then((resp) => resp.json())
  //     .then((cards) => setCards(cards))
  // },[])

  console.log(cards, "BinderHome")
  let mappedCard = cards.map((card) => 
  <div 
    className="card" 
    key={card.id}>
      
    {card.cardName}
  
      <img 
        alt="binderCards"
        className="cardImage" 
        src={card.image}>
      </img>
      <p>
        {card.set}
      </p>
      <input 
        className="trade"
        type="checkbox" 
        defaultChecked={card.trade}/>
        <label>
          Available for trade?
        </label>
  
  </div>
  )
  return(
    <div>
      <NewCardForm />
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

export default BinderHome


/*
Recycled code for future use if needed


// let cards = [{
//   "id": 0, 
//   "cardName": "Vampiric Tutor", 
//   "image": "https://cards.scryfall.io/large/front/d/8/d8337172-e15d-4e09-b3de-dc7b5bf006a7.jpg?1637978678", 
//   "set": "The List",
//   "trade": false
// },
// {
//   "id": 1, 
//   "cardName": "Expropriate", 
//   "image": "https://cards.scryfall.io/large/front/4/6/46423a22-781b-4cb0-b3a9-9bf888b4f82a.jpg?1573507481", 
//   "set": "Mystery Booster",
//   "trade": true
// },
// {
//   "id": 2, 
//   "cardName": "Karn Liberated", 
//   "image": "https://cards.scryfall.io/large/front/c/d/cd1deda0-c99d-4570-a5dd-f51eb5d12570.jpg?1562267420", 
//   "set": "Modern Masters 2015",
//   "trade": true
// }
// ]



// let mappedCard = cards.map((card) => 
// <div 
//   className="card" 
//   key={card.id}>
    
//   {card.cardName}

//     <img 
//       className="cardImage" 
//       src={card.image}>
//     </img>
//     <p>
//       {card.set}
//     </p>
//     <input 
//       type="checkbox" 
//       defaultChecked={card.trade}/>
//       <label>
//         Available for trade?
//       </label>

// </div>)

// console.log(cards)

*/