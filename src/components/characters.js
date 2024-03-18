import React from "react";
import { ReactDOM } from "react";
import characters_data from '../data/characters_data';
import  "../styles/characters.css";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



export default function Characters(){
    let myList = characters_data.map(item=>(
        <div className="character_items"> 
            <img src={item.img}/>
        </div>
    ))





    return(
        myList

    )
}