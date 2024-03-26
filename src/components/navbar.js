import React, { useState } from 'react';
import { ReactDOM } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/navbar.css"


// <Link to={"/men"}></Link>
// <Link to={"/women"}><a class="dropdown-item" href="#">Women</a></Link>

export default function Navbar(){
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLinkClick = () => {
      setIsCollapsed(false); // Close the navbar drawer when a link is clicked
  };


    return(
      <nav className="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#"><h1>Avatar</h1></a>
  <button className="navbar-toggler" type="button" onClick={() => setIsCollapsed(!isCollapsed)} aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
       <a class="nav-link" onClick={handleLinkClick} href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={handleLinkClick} href="#character_header">Characters</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={handleLinkClick} href="#quiz_intro">Quiz</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={handleLinkClick} href="#did_you_know">Facts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={handleLinkClick} href="#video">Funny Moments</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={handleLinkClick} href="#interactive_map_header">Interactive Map</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={handleLinkClick} href="#meme_container">Memes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={handleLinkClick} href="#fanart_container">Fan Arts</a>
      </li>
    </ul>
  </div>
</nav>
    )
} 
