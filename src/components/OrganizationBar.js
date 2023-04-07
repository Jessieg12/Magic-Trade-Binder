import React from "react";
import "../comp-css/OrganizationBar.css"

function OrganizationBar({ onCheckedBox, sortCardsBy }){

  function handleSorting(e){
    onCheckedBox(e.target.value)
  }
  
  return(
    <div className="OrgText">
      <p>Sort cards by:
      <label>
        <input
          type="checkbox"
          value="Alphabetically"
          checked={sortCardsBy === false}
          onChange={handleSorting}
        />
        Alphabetically
      </label>
      </p>
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
    </div>
  )
}

export default OrganizationBar