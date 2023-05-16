import React from "react";
import AddCardForm from "./AddCardForm";
import "../comp-css/AddCard.css"

function AddCard({URL, onAddCard}){

  return(
    <div>
      <p className="newCardTitle">Add new cards to the binder!</p>
        <div>
          <h1 className="info">Use this form below to add new cards</h1>
        </div>
      <AddCardForm URL={URL} onAddCard={onAddCard}/>
    </div>
  )
}

export default AddCard