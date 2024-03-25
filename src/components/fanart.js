import React, {useState} from "react";
import { ReactDOM } from "react";
import  "../styles/fanart.css";
import fanartdata from "../data/fanart_data"




export default function FanArt() {
    const [buttonText, setButtonText] = useState("Show All Arts");

    function toggleFanartDisplay() {
        const memeDiv = document.getElementById("fanart_div");
        if (memeDiv.style.display === "none" || !memeDiv.style.display) {
            memeDiv.style.display = "block";
            setButtonText("Hide All Arts");
        } else {
            memeDiv.style.display = "none";
            setButtonText("Show All Arts");
        }
    }
  return (
    <div className="fanart_container" id="fanart_container">
        <div class="header">
  <h1 className="fanart_header">Fan Arts</h1>
  <p className="fanart_intro">Dive into the creative world of Avatar fan art in our gallery! Discover breathtaking artwork inspired by the beloved series, crafted by talented fans from around the globe. Hover over each masterpiece to reveal the artists behind the magic and explore their unique interpretations of your favorite characters and scenes. Enjoy the creativity and passion of the Avatar community</p>
</div>

<div className="fanart_button_div">
<button className="btn btn-success fanart_button" onClick={toggleFanartDisplay}>{buttonText}</button>
</div>

<div class="row" id="fanart_div"> 

<div class="column">
   {
    fanartdata.slice(0, 4).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Credit  @<a href={item.link} target="_blank"> {item.name} </a> </h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    fanartdata.slice(4, 8).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Credit @<a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    fanartdata.slice(8, 12).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Credit @<a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>
<div class="column">
   {
    fanartdata.slice(12,16).map(item =>(
        <div class="image-container">
            <img src={item.img}  style={{ width: "100%"}}/>
            <h1 class="image-description"> Credit @<a href={item.link} target="_blank">{item.name}</a> </h1>
        </div>
    ))
   }
</div>


</div>

    </div>
  );
}
