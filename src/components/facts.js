import React from "react";
import { ReactDOM } from "react";
import fact_data from '../data/facts_data';
import  "../styles/facts.css";
// import { useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";



export default function Facts(){
    let myList = fact_data.map(item=>(
        <div className="fact_items col-sm-6">
            <div  className="d-flex">
                <span className="number">{item.number}</span>
                <h1 className="title">{item.title}</h1>
            </div> 
            <img src={item.img}/>
            <p className="fact">{item.fact}</p>
        </div>
    ))





    return(
        myList

    )
}