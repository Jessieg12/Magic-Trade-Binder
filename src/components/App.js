import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./Home";
import TradeBinder from "./TradeBinder";
import NavBar from "./NavBar";
import AddCard from "./AddCard";
import TradePage from "./TradePage";
import PendingTrades from "./PendingTrades";

function App() {
  const [cards, setCards] = useState([])
  const [comments, setComments] = useState([])
 
useEffect(() =>{
    fetch('http://localhost:3007/binder')
      .then((resp) => resp.json())
      .then((cards) => setCards(cards))
},[])

useEffect(() => {
  fetch('http://localhost:3007/comment')
  .then((resp) => resp.json())
  .then((comments) => setComments(comments))
},[])

function handleAddCard(newCard) {
    setCards([...cards, newCard])
  }

function handleAddComment(newComment){
  setComments([...comments, newComment])
}

console.log(comments);

return (
    <div>
    <NavBar />
      <Switch>  
        <Route exact path="/home">
         <Home cards={cards}/>
        </Route>
        <Route exact path="/tradebinder">
          <TradeBinder cards={cards} />
        </Route>
        <Route exact path="/tradepage">
          <TradePage cards={cards} onAddComment={handleAddComment}/>
        </Route>
        <Route exact path="/addcard">
          <AddCard onAddCard={handleAddCard}/>
        </Route>
        <Route exact path="/pendingtrades">
          <PendingTrades comments={comments} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;