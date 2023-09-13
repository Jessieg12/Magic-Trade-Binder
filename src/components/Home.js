import React from "react";
import "../comp-css/Home.css"

function Home({ cards }) {
  const randomIndex = Math.floor(Math.random() * cards.length)
  const randomCard = cards[randomIndex]

  return (
    <div>
      <p className="title">
        <span className="emoji">🧙🏻‍♂</span> 
      
      Welcome to my Trade Binder! 
      
       <span className="emoji">🧙🏻‍♂</span> 
      </p>
      {randomCard ? (
      <div>
        <img src={randomCard.cardImage} className="image" alt={randomCard.cardName} />
      </div>
      ) : (
        <div>
          <h1 className="image" >Now Loading Random Card Image...</h1>
          <img alt="RandomCard" className="image" src="https://backs.scryfall.io/large/2/2/222b7a3b-2321-4d4c-af19-19338b134971.jpg?1677416389"/>
        </div>
      )}
    </div>
  )
}

export default Home