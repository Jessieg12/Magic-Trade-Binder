import React from "react";
import "../comp-css/OrganizationBar.css"

function OrganizationBar(){
  
  return(
    <div className="OrgText">
      <p>Sort by:
      <label>
        <input
          type="checkbox"
          value="Alphabetically"
          // checked={sortBy === 'Alphabetically'}
          // onChange={sortStocks}
        />
        Alphabetically
      </label>
      </p>
      <label>
        <p>Filter by:
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