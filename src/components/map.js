import React, {useState} from "react";
import { ReactDOM } from "react";
import  "../styles/map.css";
// import { useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";
import map from "../images/map/map.webp"
import basingse from "../images/map/ba sing se.jpg"
import earth from "../images/map/earth kingdom.jpg"
import fire from "../images/map/fire nation.webp"
import northwater from "../images/map/northern water tribe.jpg"
import westernair from "../images/map/western air temple.jpg"
import south_water from "../images/map/southern water tribe.jpg"
import northernair from "../images/map/northern air temple.png"


export default function Map() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function display(data) {
    const images = {
      "Ba Sing Se": basingse,
      "Fire Nation": fire,
      "Northern Water Tribe": northwater,
      "Earth Kingdom": earth,
      "Western Air Temple": westernair,
      "Southern Water Tribe": south_water,
      "Northern Air Temple": northernair
    };
    const discription = {
      "Ba Sing Se": "Ba Sing Se, the ancient capital of the Earth Kingdom, boasts a rich history dating back to its humble beginnings as a subterranean city carved by Earthbenders. Over time, it grew into a sprawling metropolis, earning a reputation as the largest and most impenetrable fortress in the world. Despite numerous attempts to conquer it, including by the infamous warlord Chin the Conqueror, Ba Sing Se remained unconquered for centuries until its fall to the Fire Nation during the war. The Outer Wall of Ba Sing Se, a symbol of its strength and resilience, has only been breached on a few occasions in history. Notably, General Iroh of the Fire Nation attempted to conquer the city during a 600-day siege, but his efforts were thwarted by the city's defenders. Subsequently, the Fire Nation utilized a massive drill to breach the wall, but Avatar Aang and his friends intervened to prevent the invasion. Ultimately, Ba Sing Se fell to the Fire Nation through an internal coup led by Princess Azula, leading to a period of occupation and turmoil. However, the city was eventually recaptured by the Order of the White Lotus during the series finale, marking a triumphant moment as Ba Sing Se was liberated from Fire Nation control. Led by General Iroh, the city was restored to its former glory, symbolizing hope and resilience in the face of adversity.",
      "Western Air Temple": "The Western Air Temple was historically a place of spiritual knowledge and isolationism for the Air Nomads. It remained uninhabited after the Air Nomad Genocide until Avatar Aang and his friends sought refuge there. The temple played a significant role during the Hundred Year War, serving as a battleground against the Fire Nation. After the war, it was restored to its former glory by Avatar Aang and the Air Acolytes, becoming a sanctuary for new airbenders following Harmonic Convergence.",
      "Earth Kingdom" : "The Earth Kingdom is the largest and most populated of the four nations, encompassing most of the eastern hemisphere. It operates as a monarchy but has faced significant political unrest and crises throughout its history. The kingdom struggled against the Fire Nation's imperialism during the Hundred Year War but ultimately prevailed with Avatar Aang's intervention. Following the war, the Earth Kingdom experienced a resurgence of the monarch's power, leading to internal unrest and eventual collapse.",
      "Fire Nation" : "The Fire Nation is one of the world's four nations and five sovereign states, led by the Fire Lord. It is an absolute monarchy with a powerful economy and military. Historically, it experienced internal strife and periods of civil war. The nation's increasing industrialization and imperialist ambitions led to the Hundred Year War with the other nations. After the war, the Fire Nation played a major role in rebuilding and transformation, ultimately turning away from its imperialistic policies.",
      "Northern Water Tribe": "Long before the Hundred Year War, the predecessors of the Water Tribe relocated to the North Pole from the tropical regions they originally inhabited.[17] There, they formed several independent tribes. Eventually, a group of waterbenders united to build Agna Qel'a in an attempt to bring all the tribes of the North Pole together. The waterbenders used their icy environment to create the various temples, villages, and canals that comprise the city.[10] After a time of civil unrest, this newfound unity declined following their inability to agree on certain social and cultural practices,[18] and a group of secessionists journeyed to the South Pole to engender a new tribe.[19][20] With the exodus of the separatists, the North was left politically and culturally much more united and uniform. However, several minor sub-tribes continued to exist across the North Pole, maintaing their own traditions and beliefs despite acknowledging Agna Qel'a's dominance.[21]",
      "Southern Water Tribe": "The Southern Water Tribe originated from the Northern Water Tribe as a single unit but split due to internal tensions, leading to its establishment in the South Pole. Unlike the patriarchal Northern Tribe, the Southern Tribe is more progressive regarding gender roles, although some traditional attitudes persist. While the Southern Tribe experienced a resurgence after the Fire Nation's overthrow, modernization has diminished its unique spirituality.",
      "Northern Air Temple" :"The Air Temples served as temporary homes for the Air Nomads, who were known for their nomadic lifestyle. Each temple had a specific theme and was typically led by either monks or nuns, depending on its cardinal direction. The Western Air Temple's unique architecture was inspired by Bhutanese monasteries, while the Eastern Air Temple housed numerous statues honoring Avatar Yangchen. The Southern Air Temple, where Aang grew up, holds significance as the site where Aang discovered Monk Gyatso's remains and accepted his role as the Avatar."
    }

    setName(data);
    setImg(images[data]);
    setDesc(discription[data]);
    document.getElementById("mapModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("mapModal").style.display = "none";
  }

  return (
    <div>
          <div className="interactive_map">
      <div className="map">
        <img src={map} usemap="#workmap" alt="Map" />
        <map name="workmap">
          <area
            shape="rect"
            coords="600,0,900,150"
            onClick={() => display("Northern Water Tribe")}
          />
          <area
            shape="circle"
            coords="1120,300,100"
            onClick={() => display("Ba Sing Se")}
          />
          <area
            shape="circle"
            coords="300,500,150"
            onClick={() => display("Fire Nation")}
          />
          <area
            shape="circle"
            coords="1000,500,150"
            onClick={() => display("Earth Kingdom")}
          />
          <area
            shape="circle"
            coords="400,300,150"
            onClick={() => display("Western Air Temple")}
          />

          <area
            shape="circle"
            coords="700,950,150"
            onClick={() => display("Southern Water Tribe")}
          />
          <area
            shape="rect"
            coords="800,300,1000,150"
            onClick={() => display("Northern Air Temple")}
          />
        </map>
      </div>
    </div>
          <div id="mapModal" className="mapModal">
          <span className="close cursor" onClick={closeModal}>
            &times;
          </span>
          <div className="mapModal-content">
            <div className="mySlides">
              <img src={img} style={{ width: "100%" }} className="display_img" alt="Location" />
            </div>
          </div>
          <div className="caption-container mt-3">
            <h1 id="caption" className="mb-4">{name}</h1>
            <p id="caption">{desc}</p>
          </div>
        </div>
    </div>
  );
}
