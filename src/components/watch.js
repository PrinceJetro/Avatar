import React, { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import "../styles/video.css"
import { useParams } from "react-router-dom";
import data from '../data/video_data';

export default function Watch(){
    const { title } = useParams();
    const [link, setLink] = useState("")

    function back(){
        window.history.back()
    }
    useEffect(()=> {
        const all_index = data.length - 1;
        for (let i = 0; i <= all_index; i++) {
          if (data[i].title === title) {
            setLink(data[i].link);
            console.log(data[i].link)
            break;
          }
        }
        const iframe = document.getElementById('only-video');

    // Check if the browser supports the Fullscreen API
    if (iframe && iframe.requestFullscreen) {
      iframe.requestFullscreen()
        .then(() => {
          // Full screen has been activated
        })
        .catch((error) => {
          console.error('Fullscreen request failed:', error);
        });
    }
    }, [link])

    return(
        <div class="video-container" id="video-container">
         <i class="fa fa-close" id="close" onClick={back}></i>
        <iframe controls src={link} id="only-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen width={"100%"} height={"100%"}>
        </iframe>
        </div>
    )
}