import React from "react";
import "../comp-css/OrganizationBar.css"

function OrganizationBar({ onCheckedBox, sortCardsBy }){

  function handleSorting(e){
    onCheckedBox(e.target.value)
  }
  
  return(
    <div className="OrgText">
      <p>Sort Cards Alphabetically?
        <input
          type="checkbox"
          value="Alphabetically"
          checked={sortCardsBy === "Alphabetically"}
          onChange={handleSorting}
        />
      </p>
    </div>
  )
}

export default OrganizationBar

/*
<label>
        <p>Filter cards by:
        <br/>
        <br/>
        <select 
        // onChange={filterStocks}
        >
        <option value="All">All</option>
          <option value="Trade">Cards for Trade</option>
          <option value="NTF">Cards not for Trade</option>
        </select>
        </p>
      </label>
*/