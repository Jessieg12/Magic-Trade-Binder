import React from "react";
import NewCardForm from "./NewCardForm";
import "../comp-css/NewCardHome.css"

function NewCardHome({URL, onAddCard}){

  return(
    <div>
      <p className="newCardTitle">Add new cards to the binder!</p>
        <div>
          <h1 className="info">Use this form below to add new cards</h1>
        </div>
      <NewCardForm URL={URL} onAddCard={onAddCard}/>
    </div>
  )
}

export default NewCardHome