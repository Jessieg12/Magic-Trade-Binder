import React, {useState, useEffect} from "react";
// import RandomCard from "./RandomCard";
import "../comp-css/MagicSlide.css"

// const cardListURL = "http://localhost:3007/randomCards"
const cardList = [
  "https://cards.scryfall.io/large/front/a/6/a66e5673-e34b-46e8-a0e4-55f3ee20f99a.jpg?1673148477", 
  "https://cards.scryfall.io/large/front/f/4/f4eec210-5df0-4fb8-8eb1-e616d9995acc.jpg?1562941011", 
  "https://cards.scryfall.io/large/front/7/9/7928bb14-7631-4830-a756-26d1ea832ba2.jpg?1562612395", 
  "https://cards.scryfall.io/large/front/7/7/7743b587-e498-4761-9173-e803c9eed86b.jpg?1675645086",
  "https://cards.scryfall.io/large/front/6/8/683868c2-caaa-4084-8dbf-4903792b9c0f.jpg?1676935857",
  "https://cards.scryfall.io/large/front/2/7/27f8ccb9-32b2-4562-a60f-843e82795984.jpg?1675198698"
]

const randomIndex = Math.floor(Math.random() * cardList.length);

let randomCard = (cardList[randomIndex])
console.log(randomCard)

function MagicSlide(){
  // let [cardImg, setCardImg] = useState([])

  // console.log(randomCard,"why y no work")
  
  return(
    <div>
      <img className="image" src={randomCard}/>
      {/* <RandomCard /> */}
    </div>
  )
}

export default MagicSlide

/*

function MagicSlide(){
  useEffect(() =>{
    fetch(cardListURL)
    .then((resp) => resp.json())
    .then((card) => randomCard(card))
  },[])

  function randomCard(card){
    const randomIndex = Math.floor(Math.random() * card.length)
    let randomCard = (card[randomIndex])
    return randomCard
  }

*/