import React from "react";
import PendingTradesComments from "./PendingTradesComments";
import "../comp-css/PendingTrades.css"

function PendingTrades({ comments }){

  let mappedComments = comments.map((comment) => 
    <PendingTradesComments key={comment.id} comment={comment} />
  )
  
  return(
    <div>
      <h1 className="pendingTradesTitle">Here are some of the pending trades I have!</h1>
      {mappedComments}
    </div>
  )
}

export default PendingTrades