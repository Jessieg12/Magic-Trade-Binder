import React from "react";
import MagicSlide from "./MagicSlide";
import "../comp-css/Home.css"

function Home() {
  return (
    <div>
      <p className="title">
        <span className="emoji">🧙🏻‍♂</span> 
      
      Welcome to my Trade Binder! 
      
       <span className="emoji">🧙🏻‍♂</span> 
      </p>
      <MagicSlide />
    </div>
  )
}

export default Home