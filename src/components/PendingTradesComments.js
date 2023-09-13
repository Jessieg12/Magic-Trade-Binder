import React from "react";

function PendingTradesComments({ comment }){
  return(
    <div className="pendingTradesCard">
      {comment.commitedTrade}
    </div>
  )
}

export default PendingTradesComments