import React from "react";
// import { NavLink } from "react-router-dom"

function NavBar({onChangePage}){

  function handleLinkClick(e){
    e.preventDefualt()
    onChangePage(e.target.pathname)
  }
  return (
    <nav>
      <a onClick={handleLinkClick} href="/">Home</a>
    </nav>
  )
}

export default NavBar