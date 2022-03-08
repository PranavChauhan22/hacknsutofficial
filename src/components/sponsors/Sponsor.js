import React from "react";
import "./Sponsor.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import img1 from "../images/sponsi/Google.png";
import img2 from "../images/sponsi/mongo.png";
import img3 from "../images/sponsi/codechef.jpeg";
import img4 from "../images/sponsi/devfolio.png";
import img5 from "../images/sponsi/tezos.png";
import img6 from "../images/sponsi/mozilla.png";
import img7 from "../images/sponsi/elastic.png";
import img8 from "../images/sponsi/jetbrains.png";
import img9 from "../images/sponsi/redbull.png";
import img10 from "../images/sponsi/wwc.png";
import img11 from "../images/sponsi/codingblocks.png";
function Sponsor() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="sponsor" id="sponsor">
      <div className="theme__header" style={{ paddingTop: "80px" }}>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Past Sponsors</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={img1} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img2} height="100" alt="" />
          </div>

          <div class="slide"></div>

          <div class="slide">
            <img src={img3} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img4} height="100" alt="" />
          </div>
          <div class="slide"></div>
          <div className="slide" style={{marginLeft:'80px'}}>
            <img src={img5} height="100" alt=""/>
          </div>

        
		  <div class="slide">
            <img src={img6} height="100" alt="" />
          </div>
		  <div class="slide"></div>
		  <div class="slide">
            <img src={img7} height="100" alt="" />
          </div>
		  <div class="slide">
            <img src={img8} height="100" alt="" />
          </div>
		  <div class="slide">
            <img src={img9} height="100" alt="" />
          </div>
		  <div class="slide" style={{marginLeft:"80px"}}>
            <img src={img10} height="100" alt="" />
          </div>
		  <div class="slide" style={{marginLeft:"80px"}}>
            <img src={img11} height="100" alt="" />
          </div>
		  
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
