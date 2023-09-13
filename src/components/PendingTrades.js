import React, { useEffect, useState } from "react";
import PendingTradesComments from "./PendingTradesComments";
import "../comp-css/PendingTrades.css"

function PendingTrades(){
  const [comments, setComments] = useState([])

  let mappedComments = comments.map((comment) => 
    <PendingTradesComments key={comment.id} comment={comment} />
  )

  useEffect(() => {
    fetch('http://localhost:3007/comment')
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