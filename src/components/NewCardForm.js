import React from "react";
import "../comp-css/NewCardForm.css"

function NewCardForm(){
  return(
    <div>
      <div className="cardForm">
        <p> Please enter a new card name</p>
          <input className="formStyle" type="text" placeholder="Enter card name"></input>
        <p> Please enter the exact set the card is from</p>
         <input className="formStyle" type="text" placeholder="Enter card set"></input>
        <p> Please enter the exact image of the new card from scryfall</p>
        <input className="formStyle" type="text" placeholder="Enter scryfall image URL"></input>
        <p className="formLegend">Legend: Clicking the checkbox constitutes the card is up for trade.</p>
        <input type="checkbox"></input>
          <label>Is this card Available for trade?</label>
        <p></p>
        <button>Submit new card!</button>
        </div>
      </div>
  )
}

export default NewCardForm