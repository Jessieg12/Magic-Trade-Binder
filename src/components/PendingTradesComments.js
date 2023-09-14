import React from "react";

function PendingTradesComments({ comment }){
  return(
    <div className="pendingTradesCard">
      {comment.committedTrade}
    </div>
  )
}

export default PendingTradesComments