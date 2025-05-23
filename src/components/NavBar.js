import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
       <nav className="navbar">
    
   
    <NavLink 
   to="/" >
    Home

    </NavLink>

    <NavLink 
   to="/Movies" >
   Movies

    </NavLink>
    <NavLink 
   to="/Actors" >
    Actors

    </NavLink>
    <NavLink 
   to="/Directors" >
    Directors

    </NavLink>
    </nav>
   </div>
    )
}

export default NavBar;
