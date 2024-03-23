import React, {useState} from "react";
import { ReactDOM } from "react";
import  "../styles/memes.css";
import memesdata from "../data/memes_data"



export default function Memes() {
        const [buttonText, setButtonText] = useState("Show All Memes");

        function toggleMemesDisplay() {
            const memeDiv = document.getElementById("meme_div");
            if (memeDiv.style.display === "none" || !memeDiv.style.display) {
                memeDiv.style.display = "block";
                setButtonText("Hide All Memes");
            } else {
                memeDiv.style.display = "none";
                setButtonText("Show All Memes");
            }
        }
        
  return (
    <div className="bg-dark" id="meme_container">
        <div class="header">
  <h1 className="memes_header">Memes</h1>
  <p className="memes_intro">Dive into the hilarious world of Avatar memes! Get ready to laugh out loud as you explore a collection of memes inspired by the iconic series. From witty captions to clever edits, these memes capture the essence of Avatar in the most entertaining way possible. Join us on a journey through the lighter side of the Avatar universe and enjoy the creativity and humor of fans from all corners of the globe.</p>
</div>

<div className="memes_button_div">
<button className="btn btn-success memes_button" onClick={toggleMemesDisplay}>{buttonText}</button>
</div>

<div class="row" id="meme_div"> 

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
