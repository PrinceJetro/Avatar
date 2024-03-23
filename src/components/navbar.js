import React from "react";
import { ReactDOM } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/navbar.css"


// <Link to={"/men"}></Link>
// <Link to={"/women"}><a class="dropdown-item" href="#">Women</a></Link>

export default function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark  sticky-top">
  <a class="navbar-brand" href="#"><h1>Avatar</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
       <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#character_header">Characters</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#quiz_intro">Quiz</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#did_you_know">Facts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#video">Funny Moments</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#interactive_map_header">Interactive Map</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#meme_container">Memes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#fanart_container">Fan Arts</a>
      </li>
    </ul>
  </div>
</nav>
    )
} 