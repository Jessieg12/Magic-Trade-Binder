import React, { useEffect, useState } from "react";
import PendingTradesComments from "./PendingTradesComments";
import "../comp-css/PendingTrades.css"

let url = 'http://localhost:3007/comment'

function PendingTrades(){
  const [comments, setComments] = useState([])

  let mappedComments = comments.map((comment) => 
  <PendingTradesComments key={comment.id} comment={comment} />)

  useEffect(() => {
    fetch(url)
    .then((resp) => resp.json())
    .then((comments) => setComments(comments))
  },[])
  
  return(
    <div>
      <h1 className="pendingTradesTitle">Here are some of the pending trades I have!</h1>
      {mappedComments}
    </div>
  )
}

export default PendingTrades