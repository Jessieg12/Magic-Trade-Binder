import React, {useState} from "react";
import "../comp-css/TradePageSelectedForm.css"

function TradePageSelectedForm({setTradeCards, tradeCards, onAddComment}){
  const [tradingCardName, setTradingCardname] = useState('')
  const [userName, setUserName] = useState('')

  let selectedCardNames = tradeCards.map((card) => card.cardName)
  let selectedCardNamesString = selectedCardNames.join(", ")

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3007/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        committedTrade: `${userName} wants to trade ${tradingCardName} for ${selectedCardNamesString}`
      }),
    })
      .then((r) => r.json())
      .then((newComment) => {
        onAddComment(newComment)
        clearForm()
        alert("Trade submitted!")
      })
    }

    function clearForm(){
      setTradingCardname('')
      setUserName('')
      setTradeCards([])
    }

  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <p>Please enter the card name(s) you wish to trade</p>
          <input
            type="text"
            value={tradingCardName}
            onChange={(e) => setTradingCardname(e.target.value)}
            placeholder="Enter Card Name"> 
          </input>
        <p>Please enter your user name</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your User Name"> 
          </input>
          <br></br>
          {tradeCards.length && tradingCardName.length && userName.length > 0 ? 
          <input className="submitbutton" type="submit" value={'Submit trade!'}/> : 
          <p>Please complete the form above!</p>}
      </form>
        {tradeCards.length && tradingCardName.length && userName.length > 0 ? 
        <p className="tradeinfo">{userName} would like to trade {tradingCardName} for {selectedCardNamesString}</p> : 
        <p className="tradeinfo">Trade information will display here!</p>}
    </div>
  )
}

export default TradePageSelectedForm