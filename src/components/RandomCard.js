import React, { useEffect, useState } from "react";
const cardListURL = "http://localhost:3007/randomCards"

function RandomCard(){
  useEffect(() =>{
    fetch(cardListURL)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
  },[])
  // let [cards, setCards] = useState([])
  // useEffect(() =>{
  //   fetch(cardListURL)
  //   .then((resp) => resp.json())
  //   .then((cards) => setCards(cards))
  // },[])

  
  // function randomCards(cards){
  //   let newArray = [...cards, newCards]
  //   let randomIndex = Math.floor(Math.random() * newArray.length)
  //   console.log(newCards)
  //   console.log(randomIndex, "random")
  // }

  return(
    <></>
  )
//   function randomCards(cards){
//     console.log(cards)
//    let randomIndex = Math.floor(Math.random() * cards.length);
//    let randomCard = (cards[randomIndex])

//       return (
//         <>
//         <img className="image" src={randomCard.cardImage}/>
//          </>
//          )
// }
}

export default RandomCard