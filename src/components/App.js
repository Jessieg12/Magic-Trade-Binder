import React, { useEffect, useState } from "react";
import {Route, Switch} from "react-router-dom"
import Home from "./Home";
import BinderHome from "./BinderHome";
import NavBar from "./NavBar";
import NewCardHome from "./NewCardHome";
import MakeTradeHome from "./MakeTradeHome";

let URL = 'http://localhost:3007/binder'

function App() {
  let [cards, setCards] = useState([])
  
  useEffect(() =>{
    fetch(URL)
      .then((resp) => resp.json())
      .then((cards) => setCards(cards))
  },[])

  function handleAddCard(newCard) {
    setCards([...cards, newCard]);
  }

  return (
    <div>
    <NavBar />
    <Switch>  
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/binderhome">
      <BinderHome cards={cards} URL={URL} onAddCard={handleAddCard} />
    </Route>
    <Route exact path="/newcardhome">
      <NewCardHome URL={URL} onAddCard={handleAddCard}/>
    </Route>
    <Route exact path="/maketradehome">
      <MakeTradeHome cards={cards}/>
    </Route>
    </Switch>

    </div>
  );
}

export default App;



/* Recycled code for later use

  {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      
*/
