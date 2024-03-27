import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Nav = () => {
  return (
    
    <div className="nav">

      <h3> Album Collection </h3>
      <button className="add-btn"> <Link to="/addalbum">Add Album</Link> </button>
     
    </div> 
  );
}; 

export default Nav;
