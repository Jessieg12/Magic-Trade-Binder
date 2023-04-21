import React, { useState } from "react";
import "../comp-css/TradingCards.css"

function TradingCards({tradeCards, statement, setTradeCards}){
  let [tradingCardName, setTradingCardname] = useState('')
  let [userName, setUserName] = useState('')

  let mappedTradeCards = tradeCards.map((card) => <div key={card.id}>{card.cardName}</div>)
  
  function handleSubmit(e){
    e.preventDefault()
    setTradingCardname('')
    setUserName('')
    setTradeCards([])
    e.target.reset()
    fetch("http://localhost:3007/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commitedTrade: `${userName} wants to trade ${tradingCardName} for ${statement}`
      }),
    })
      .then((r) => r.json())
      .then(alert("Trade submitted!"))
    }



  return(
    <div className="trades">
      <div className="selectedcard">
      <h1 className="selectedCards">Card(s) Selected to be traded shown below!</h1>
      {mappedTradeCards}
      </div>
      <div className="tradecard"> 
      <h2>What would you like to trade?</h2>
        <div>Please fill out the following trade form:</div>
        <form id="form" onSubmit={handleSubmit}>
          <p>Please enter the card name(s) you wish to trade</p>
            <input
            type="text"
            value={tradingCardName}
            onChange={(e) => setTradingCardname(e.target.value)}
            placeholder="Enter Card Name"> 
            </input>
          <p>Please enter your user Name</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your User Name"> 
            </input>
            <br></br>
            {statement.length && tradingCardName.length && userName.length > 0 ? 
            <input className="submitbutton" type="submit" value={'Submit trade!'}/> : 
            <p>Please complete the form above!</p>}
        </form>
        {statement.length && tradingCardName.length && userName.length > 0 ? 
        <p className="tradeinfo">{userName} would like to trade {tradingCardName} for {statement}</p> : 
        <p className="tradeinfo">Trade information will display here!</p>}
      </div>
    </div>
  )
}

export default TradingCards