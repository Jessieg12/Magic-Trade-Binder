import React, { useState } from "react";
import "../comp-css/NewCardForm.css"

// function handleValueChange(e){
//   console.log(e.target.value)
// }

function NewCardForm(){
  let [cardName, setCardName] = useState('')
  let [cardSet, setCardSet] = useState('')
  let [cardImage, setCardImage] = useState('')
  let [forTrade, setForTrade] = useState(false)

  function handleForm(e){
    e.preventDefault()
    const newCardInfo = {
      cardName,
      cardSet,
      cardImage,
      forTrade
    }
    console.log(newCardInfo)
  }

  return(
    <div className="bottom">
      <div className="cardForm">
        <p> Please enter a new card name</p>
        <form onSubmit={handleForm}>
          <input 
            className="formStyle" 
            type="text" 
            value={cardName} 
            onChange={(e)=>setCardName(e.target.value)}
            placeholder="Enter card name">
           </input>
        <p> Please enter the exact set the card is from</p>
          <input 
            className="formStyle" 
            type="text" 
            value={cardSet} 
            onChange={(e)=>setCardSet(e.target.value)} 
            placeholder="Enter card set">
          </input>
        <p> Please enter the exact image of the new card from scryfall</p>
          <input 
            className="formStyle" 
            type="text"
            value={cardImage}
            onChange={(e)=>setCardImage(e.target.value)}
            placeholder="Enter scryfall image URL"> 
          </input>
        <p className="formLegend">Legend: Clicking the checkbox constitutes the card is up for trade.</p>
          <input 
            type="checkbox"
            checked={forTrade}
            onChange={(e)=>setForTrade(e.target.checked)}>
          </input>
          <label>Is this card Available for trade?</label>
        <p>🃏
         <input type="submit" value={'Submit new card!'}/>
         🃏</p>
        </form>
        </div>
      </div>
  )
}

export default NewCardForm