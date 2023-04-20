import React, { useEffect, useState } from "react";
import "../comp-css/PendingTrades.css"

let url = 'http://localhost:3007/comment'

function PendingTrades(){
  let [comments, setComments] = useState([])

  let mappedComments = comments.map((comment) => <div className="pendingTradesCard" key={comment.id}>{comment.commitedTrade}</div>)

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