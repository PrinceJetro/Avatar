import React, { useEffect, useRef , useState} from 'react';
import { ReactDOM } from "react";
import video_data from "../data/video_data";
import "../styles/video.css";
import { Link } from 'react-router-dom';


export default function Video(){
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
    return(
        <div>
                    <h1 className='video_header'>Avatar: The Last Airbender - Funny Moments</h1>
        <p className='video_intro'>Embark on a journey through the humorous side of the Avatar universe! Dive into these hilarious moments captured from the series, guaranteed to bring a smile to your face and laughter to your heart. Join us as we revisit some of the most memorable and comical scenes that make Avatar: The Last Airbender a timeless classic.</p>
        <div className='video_row' id="flavoursContainer" ref={flavoursContainerRef}>          
        {
            myList = video_data.map(item => (
                <Link to={`/watchnow/${item.title}`}>
              <div className="video_items" key={item.id}>
                <img
                  src={item.img}
                />
              </div>
              </Link>
          ))
        }
        </div>

        </div>
    )
}