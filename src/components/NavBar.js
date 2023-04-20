import React from "react";
import { NavLink } from "react-router-dom"
import "../comp-css/NavBar.css"

function NavBar(){

  // function handleLinkClick(e){
  //   e.preventDefualt()
  //   onChangePage(e.target.pathname)
  // }
    return (
      <div className="linkDiv">
        <br></br>
        <NavLink
          to="/"
          exact 
          className="linkStyles"
          activeStyle={{background: "aliceblue", fontWeight: "bolder",}}>
          Home
        </NavLink>
        <NavLink
          to="/binderhome"
          exact
          className="linkStyles"
          activeStyle={{background: "aliceblue", fontWeight: "bolder",}}>
          Trade Binder
        </NavLink>
        <NavLink
          to="/maketradehome"
          exact
          className="linkStyles"
          activeStyle={{background: "aliceblue", fontWeight: "bolder",}}>
          Want to make a trade?
        </NavLink>
        <NavLink
          to="/newcardhome"
          exact
          className="linkStyles"
          activeStyle={{background: "aliceblue", fontWeight: "bolder",}}>
          Add New Card to Binder
        </NavLink>
        <NavLink
          to="/pendingtrades"
          exact
          className="linkStyles"
          activeStyle={{background: "aliceblue", fontWeight: "bolder",}}>
          Pending Trades
        </NavLink>
      </div>
    );
  }

export default NavBar