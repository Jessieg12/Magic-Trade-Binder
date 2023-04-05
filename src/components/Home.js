import React from "react";
// import NavBar from "./NavBar";
import MagicSlide from "./MagicSlide";
import "../comp-css/Home.css"

//test



function Home({cards}) {
  return (
    <div>
      <p className="title">
        <span className="emoji">🧙🏻‍♂</span> 
      
      Welcome to my Trade Binder! 
      
       <span className="emoji">🧙🏻‍♂</span> 
      </p>
      <MagicSlide cards={cards} />
    </div>
  )
}

export default Home