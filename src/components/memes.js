import React, {useState} from "react";
import { ReactDOM } from "react";
import  "../styles/memes.css";
import memesdata from "../data/memes_data"



export default function memes() {
  return (
    <div className="bg-dark">
        <div class="header">
  <h1 className="memes_header">Memes</h1>
  <p className="memes_intro">Dive into the hilarious world of Avatar memes! Get ready to laugh out loud as you explore a collection of memes inspired by the iconic series. From witty captions to clever edits, these memes capture the essence of Avatar in the most entertaining way possible. Join us on a journey through the lighter side of the Avatar universe and enjoy the creativity and humor of fans from all corners of the globe.</p>
</div>

<div class="row"> 

<div class="column">
   {
    memesdata.slice(0, 5).map(item =>(
            <img src={item}  style={{ width: "100%"}}/>
    ))
   }
</div>
<div class="column">
   {
    memesdata.slice(5, 10).map(item =>(
            <img src={item}  style={{ width: "100%"}}/>
    ))
   }
</div>
<div class="column">
   {
    memesdata.slice(10, 15).map(item =>(
            <img src={item}  style={{ width: "100%"}}/>
    ))
   }
</div>
<div class="column">
   {
    memesdata.slice(15,22).map(item =>(
            <img src={item}  style={{ width: "100%"}}/>
    ))
   }
</div>


</div>

    </div>
  );
}
