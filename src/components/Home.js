import React from "react";
import "../comp-css/Home.css"

function Home() {

  return (
    <div>
      <p className="title">
        <span className="emoji">🧙🏻‍♂</span> 
      
      Welcome to my Trade Binder! 
      
       <span className="emoji">🧙🏻‍♂</span> 
      </p>
      <div>
      <img alt="RandomCard" className="image" src="https://backs.scryfall.io/large/2/2/222b7a3b-2321-4d4c-af19-19338b134971.jpg?1677416389"/>
      </div>
    </div>
  )
}

export default Home

/*

 const [count, setCount] = useState(0)
  const [word, setWord] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    let wordLength = word.length + count
    setCount(wordLength)
    setWord('')
  }
 <form onSubmit={handleSubmit}>
        <input type="text" value={word} onChange={(e) =>setWord(e.target.value)}/>
        <button>click me</button>
      </form>
      <p>{count}</p>

*/