import React, {useState} from "react";
import "../comp-css/TradePageSelectedForm.css"

function TradePageSelectedForm({setTradeCards, statement}){
  let [tradingCardName, setTradingCardname] = useState('')
  let [userName, setUserName] = useState('')

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
        commitedTrade: `${userName} wants to trade ${tradingCardName} for ${statement.join(', ')}`
      }),
    })
      .then((r) => r.json())
      .then(alert("Trade submitted!"))
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
        <p className="tradeinfo">{userName} would like to trade {tradingCardName} for {statement.join(', ')}</p> : 
        <p className="tradeinfo">Trade information will display here!</p>}
    </div>
  )
}

export default TradePageSelectedForm