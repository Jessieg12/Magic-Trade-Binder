import React from "react";
import "../comp-css/MagicSlide.css"

function MagicSlide(){
  

  
  return(
    <div>
      <img alt="RandomCard" className="image" src="https://backs.scryfall.io/large/2/2/222b7a3b-2321-4d4c-af19-19338b134971.jpg?1677416389"/>
     
    </div>
  )
}

export default MagicSlide

/*

  // const cardListURL = "http://localhost:3007/binder"

 // let [card, setCard] = useState([])
  // useEffect(() =>{
  //   fetch(cardListURL)
  //   .then((resp) => resp.json())
  //   .then((data) => setCard(data))
  // },[])
  // // let [cards, setCards] = useState([])
  // // useEffect(() =>{
  // //   fetch(cardListURL)
  // //   .then((resp) => resp.json())
  // //   .then((cards) => setCards(cards))
  // // },[])

  // useEffect(() =>{

  //   let randomCard = (Math.floor(Math.random() * card.length))
  // console.log(card[randomCard].image)
  // },[])

const cardListURL = "http://localhost:3007/binder"

function RandomCard(){
  let [card, setCard] = useState([])
  useEffect(() =>{
    fetch(cardListURL)
    .then((resp) => resp.json())
    .then((data) => setCard(data))
  },[])
  // let [cards, setCards] = useState([])
  // useEffect(() =>{
  //   fetch(cardListURL)
  //   .then((resp) => resp.json())
  //   .then((cards) => setCards(cards))
  // },[])

  let randomCard = card.Math.floor(Math.random() * card.length)
  console.log(randomCard)

src={() =>handleRandomCard()}

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

  // const cardListURL = "http://localhost:3007/randomCards"
// const cardList = [
//   "https://cards.scryfall.io/large/front/a/6/a66e5673-e34b-46e8-a0e4-55f3ee20f99a.jpg?1673148477", 
//   "https://cards.scryfall.io/large/front/f/4/f4eec210-5df0-4fb8-8eb1-e616d9995acc.jpg?1562941011", 
//   "https://cards.scryfall.io/large/front/7/9/7928bb14-7631-4830-a756-26d1ea832ba2.jpg?1562612395", 
//   "https://cards.scryfall.io/large/front/7/7/7743b587-e498-4761-9173-e803c9eed86b.jpg?1675645086",
//   "https://cards.scryfall.io/large/front/6/8/683868c2-caaa-4084-8dbf-4903792b9c0f.jpg?1676935857",
//   "https://cards.scryfall.io/large/front/a/d/adea296b-b320-4588-9d6e-cbb5db7c39e3.jpg?1674174198",
//   "https://cards.scryfall.io/large/front/b/9/b91dadcb-31e9-43b0-b425-c9311af3e9d7.jpg?1599708272",
//   "https://cards.scryfall.io/large/front/8/d/8d94b8ec-ecda-43c8-a60e-1ba33e6a54a4.jpg?1562616128",
//   "https://cards.scryfall.io/large/front/8/5/851f8d1f-163c-4c4f-beee-431b64ec8a99.jpg?1626100364",
//   "https://cards.scryfall.io/large/front/5/4/547888c3-a9a6-4413-b29a-6bcd8a9279bf.jpg?1657065647",
//   "https://cards.scryfall.io/large/front/0/3/034b8d6d-95ea-434a-967a-e6675a7ce88a.jpg?1594736791",
//   "https://cards.scryfall.io/large/front/2/6/26fecfd4-40c1-4ed3-bf58-22c7b98699a9.jpg?1670943073",
//   "https://cards.scryfall.io/large/front/9/4/9476fe67-d2d3-4835-8ba6-2a17d18cc141.jpg?1651655539",
//   "https://cards.scryfall.io/large/front/a/b/abf8df47-405c-42d8-be9e-0f0d0a49589b.jpg?1562931285",
//   "https://cards.scryfall.io/large/front/4/c/4ce5b167-df7a-499e-8dcc-7aec2e28b382.jpg?1610161645"
// ]

  
  // let newArray= []

  // let mappedCard = cards.map((card) => 
  //  newArray.push(card)
  // )

  // let newOutPut = (Math.floor(Math.random() * newArray.length))

  // let sloop = setInterval(() => {
  //   console.log(cards[newOutPut].image)

  // }, 1000)

  // setTimeout(sloop)
  // let mappedCars = cards.map((card) => 
  //   card.id
  // )

  
  

//  let array = mappedCards[Math.floor(Math.random() * cards.length)]
//  console.log(array)
//  console.log(array.image)
  // let [cards, setCards] = useState([])
  // let [index, setIndex] = useState([])

  // useEffect(() => {
  //   fetch(cardListURL)
  //   .then((resp) => resp.json())
  //   .then((card) => setCards(card))
  // },[])

// useEffect(() =>{
//     setIndex(Math.floor(Math.random() * cards.length))
//   },[])

  // let index = JSON.stringify(cards[(Math.floor(Math.random() * cards.length))])

  // // const renderImage = index.image
  // console.log(index)

  // const randomCard = <img alt="RandomCard" className="image" src={renderImage} />
  

  // let cardRender = cards[index].cardImage
    // let randomCard = cards[index]

    //  let mappedCard = cardInfo.find((card) => card[Math.floor(Math.random() * card.length)])

  // let randomCard = cardInfo[random]
  // console.log(randomCard)
  // console.log(randomCard,"why y no work")

  // function handleRandomCard(){
  //   return cards[index].cardImage
  // }

   { <img alt="RandomCard" className="image" src={randomCardSelected} /> }
     // let [randomCard, setRandomCard] = useState([])
  
  // const randomElement = cards[Math.floor(Math.random() * cards.length)]

  // let rCard = cards[string]
  // useEffect(() => {
  //   setRandomCard(rCard)
  //   console.log(randomCard)
  // },[])
  // console.log(randomCard)

    // let [randomCard, setRandomCard] = useState([])
  
  // const randomElement = cards[Math.floor(Math.random() * cards.length)]

  // let rCard = cards[string]
  // useEffect(() => {
  //   setRandomCard(rCard)
  //   console.log(randomCard)
  // },[])
  // console.log(randomCard)

  let thisCard = {
  "id": 1, 
  "cardName": "Expropriate ", 
  "image": "https://cards.scryfall.io/large/front/4/6/46423a22-781b-4cb0-b3a9-9bf888b4f82a.jpg?1573507481", 
  "set": "Mystery Booster",
  "trade": true
}

*/

//