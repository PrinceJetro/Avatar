import React, { useEffect, useRef , useState} from 'react';
import { ReactDOM } from "react";
import intro_img from "../images/aang7.webp"
import logo from "../images/logo.png"
import Characters from './characters';
import "../styles/home.css";
import { Outlet, Link } from "react-router-dom";
import characters_data from '../data/characters_data';
import QuizComponent from './quiz';
import Facts from './facts';
import Map from './map';
import FanArt from './fanart';
import Video from './video';
import Memes from './memes';
import Footer from './footer';



export default function Home(){
  const [display_picture, setDisplay_picture] = useState(characters_data[0].img)
  const [display_name, setDisplay_name] = useState(characters_data[0].name)
  const [display_desc, setDisplay_desc] = useState(characters_data[0].description)
    const flavoursContainerRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward
  
    useEffect(() => {
      const flavoursContainer = flavoursContainerRef.current;
      const flavoursScrollWidth = flavoursContainer.scrollWidth;
  
      const intervalId = setInterval(() => {
        if (scrollDirection === 1) {
          if (flavoursContainer.scrollLeft + flavoursContainer.clientWidth < flavoursScrollWidth) {
            flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
          } else {
            setScrollDirection(-1);
          }
        } else {
          if (flavoursContainer.scrollLeft > 0) {
            flavoursContainer.scrollTo(flavoursContainer.scrollLeft - 1, 0);
          } else {
            setScrollDirection(1);
          }
        }
      }, 15);
  
      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }, [scrollDirection]); // Re-run the effect when scrollDirection changes
  
    let myList;

    function display(characterData) {
      setDisplay_desc(characterData.description)
      setDisplay_name(characterData.name)
      setDisplay_picture(characterData.img)
    }
    


    return(
        <div className="container-fluid p-0">
            <div className="row intro mb-4">
                <div className="col-sm-6 left  p-5">
                    <img src={logo} className="mb-5"/>
                    <p>Avatar: The Last Airbender" is an animated TV series that follows Aang, the last Airbender and the Avatar, on a quest to restore balance to a world divided into four nations. Aang, along with his friends Katara and Sokka, must master all four elements and stop the war waged by the Fire Nation. The show is praised for its compelling characters, intricate plot, and exploration of themes like friendship, identity, and the consequences of war.</p>
                    <button className="btn btn-danger"> Read More <i className="fa fa-arrow-right"></i></button>
                    <div className="media">
                        <span>
                        <a href='https://www.netflix.com/ng/title/80237957' className='text-light' target='_blank'>
                        <i className="fa fa-television"></i>
                        <p>Episodes</p>
                        </a>
                        </span>
                        <span>
                        <a href='https://www.imdb.com/title/tt0938283/' target='_blank'  className='text-light'>
                        <i className="fa fa-film"></i>
                        <p>Movie</p>
                        </a>
                        </span>

                        <span>
                        <a href='' target='_blank'  className='text-light'>
                        <i className="fa fa-book"></i>
                        <p>Manga</p>
                        </a>
                        </span>
                    </div>
                
                </div>


                <div className="col-sm-6 right">
                    <img className="aang" src={intro_img}/>
                    
                </div>
            </div>

            <h1 className='character_header'>Characters</h1>
            <div className='character_row' id="flavoursContainer" ref={flavoursContainerRef}>
            {
                myList = characters_data.map(item => (
                  <div className="character_items" key={item.id}  onClick={() => display(item)}>
                    <img
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
              ))
            }

            </div>

            <div className='row character_show'>
              <div className='col-sm-6  mb-3'>
                <img src={display_picture} className='img-fluid'/>
              </div>
              <div className='col-sm-6 p-5'>
                <h1>{display_name}</h1>
                <p>{display_desc}</p>
              </div>

            </div>

           
            <div className='quiz_intro  '>
              <h1>Game On!</h1>
              <p>Embark on a journey through the world of Avatar! Test your knowledge and discover the elements within you. Click to start the ultimate 15-question Avatar quiz adventure!</p>
              <Link to="/quiz"><button className='btn btn-dark'>Start Quiz</button></Link>
            </div>

            <div className='did_you_know m-auto'>
              <h1 className='did_you_know_header'>Did You Know?</h1>
              <div className='row'>
              <Facts/>
              </div>

            </div>

            <Video/>

              <div>
                <h1 className='interactive_map_header'>Interactive Map</h1>
                <p className='interactive_map_intro'>Embark on an adventure through the Avatar World with our interactive map! Explore legendary locations such as Ba Sing Se, the Fire Nation, and more. Click on each destination to uncover fascinating facts and immerse yourself in the rich lore of the Avatar universe. Let the journey begin!</p>
              <Map/>
              </div>


              <Memes/>

               <FanArt/>

               <div className="closing_section">
                  <h2 className="closing_header">Join the Avatar Community</h2>
                  <p>Thank you for exploring our Avatar fan site! We hope you enjoyed immersing yourself in the rich world of bending, adventure, and friendship. Remember, the Avatar journey never truly ends. Keep the spirit of the series alive by connecting with fellow fans, sharing your favorite moments, and spreading the message of balance and harmony in all that you do.</p>
                  <p>Whether you're a longtime fan or just beginning your journey, there's always something new to discover and discuss. Let's continue to celebrate the magic of Avatar together!</p>
                  <p>Don't forget to share this site with your friends and fellow fans! Together, we can expand our community and keep the Avatar spirit alive for generations to come.</p>
            </div>


               <Footer/>
        </div>

    )
}