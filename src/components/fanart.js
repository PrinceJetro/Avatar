import React, {useState} from "react";
import { ReactDOM } from "react";
import  "../styles/fanart.css";
import fanartdata from "../data/fanart_data"




export default function FanArt() {
  return (
    <div>
        <div class="header">
  <h1 className="fanart_header">Fan Arts</h1>
  <p className="fanart_intro">Dive into the creative world of Avatar fan art in our gallery! Discover breathtaking artwork inspired by the beloved series, crafted by talented fans from around the globe. Hover over each masterpiece to reveal the artists behind the magic and explore their unique interpretations of your favorite characters and scenes. Enjoy the creativity and passion of the Avatar community</p>
</div>

<div class="row"> 

<div class="column">
   {
    fanartdata.slice(0, 3).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Designed by <a href={item.link} target="_blank"> {item.name} </a> </h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    fanartdata.slice(3, 6).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Designed by <a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    fanartdata.slice(6, 9).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Designed by <a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    fanartdata.slice(9,12).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Designed by <a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>


</div>

    </div>
  );
}
