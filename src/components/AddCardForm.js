import React, { useState } from "react";
import "../comp-css/AddCardForm.css"

function AddCardForm({ onAddCard }){
  const [formData, setFormData] = useState({
    cardName: "",
    cardSet: "",
    cardImage: "",
    forTrade: false,
  })

  function handleChange(e){
    let name = e.target.name
    let value = e.target.value

    if(e.target.type === "checkbox"){
      value = e.target.checked
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch('http://localhost:3007/binder', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newCard) => {
      onAddCard(newCard)
      clearForm()
      alert("New card added!")
    })
  }

  function clearForm(){
    setFormData({
      cardName: "",
      cardSet: "",
      cardImage: "",
      forTrade: false,
    })
  }

  return(
    <div className="bottom">
      <div className="cardForm">
        <p> Please enter a new card name</p>
        <form onSubmit={handleSubmit}>
          <input 
            className="formStyle"
            name="cardName"
            type="text" 
            value={formData.cardName} 
            onChange={handleChange}
            placeholder="Enter card name">
          </input>
        <p> Please enter the exact set the card is from</p>
          <input 
            className="formStyle" 
            name="cardSet"
            type="text" 
            value={formData.cardSet} 
            onChange={handleChange} 
            placeholder="Enter card set">
          </input>
        <p> Please enter the exact image of the new card from scryfall</p>
          <input 
            className="formStyle" 
            name="cardImage"
            type="text"
            value={formData.cardImage}
            onChange={handleChange}
            placeholder="Enter scryfall image URL"> 
          </input>
        <p className="formLegend">Legend: Clicking the checkbox constitutes the card is up for trade.</p>
          <input 
            type="checkbox"
            name="forTrade"
            checked={formData.forTrade}
            onChange={handleChange}>
          </input>
          <label>Is this card Available for trade?</label>
        <p>🃏
         <input type="submit" value={'Submit new card!'}/>
         🃏</p>
        </form>
        </div>
          <div className="wrapper">
          <div className="cardPreviewCard">
          <p className="cardPreviewText">Card Image Preview</p>
            {formData.cardImage.length > 80 ? 
             <img 
              alt="magicCardImage"
              className="cardPreview" 
              src={formData.cardImage}>
            </img> : 
            <img 
              alt="magicCardImage"
              className="cardPreview" 
              src='https://cards.scryfall.io/large/front/4/9/493f3c04-2e12-44b3-957e-50c7861c4667.jpg?1562488374'>
            </img>}
          </div>
          </div>
      </div>
  )
}

export default AddCardForm