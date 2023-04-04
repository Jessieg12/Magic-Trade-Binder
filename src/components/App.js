import React, { useEffect, useState } from "react";
import Home from "./Home";
import BinderHome from "./BinderHome";

// let URL = 'http://localhost:3007/binder'

function App() {
  // let [cards, setCards] = useState([])
  // useEffect(() =>{
  //   fetch(URL)
  //     .then((resp) => resp.json())
  //     .then((cards) => setCards(cards))
  // },[])

  return (
    <div>
      <Home />
      <BinderHome />
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
