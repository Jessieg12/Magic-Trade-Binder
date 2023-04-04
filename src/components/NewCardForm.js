import React from "react";
import "../comp-css/NewCardForm.css"

function NewCardForm(){

  return(
    <div>
      <p>Add new cards to the binder!</p>
      <div className="cardForm">
        <input type="text" placeholder="Enter card name"></input>
        <input type="text" placeholder="Enter card set"></input>
        <input type="text" placeholder="Enter scryfall image URL"></input>
        <input type="checkbox"></input>
          <label>Is this card Available for trade?</label>
      </div>
    </div>
  )
}

export default NewCardForm