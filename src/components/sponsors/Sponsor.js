import React from "react";
import "./Sponsor.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import celo22 from "../images/currentSponsi/celo.png";
import img1 from "../images/sponsi/Google.png";
import img2 from "../images/sponsi/mongo.png";
import img3 from "../images/sponsi/codechef.jpeg";
import agora22 from "../images/sponsi/agora_logo.png"
import img4 from "../images/sponsi/devfolio.png";
import img5 from "../images/sponsi/tezos.png";
import winzo22 from "../images/currentSponsi/Winzo_final_logo.jpeg"
import img6 from "../images/sponsi/mozilla.png";
import img7 from "../images/sponsi/elastic.png";
import polygon22 from "../images/currentSponsi/polygon.png";
import img8 from "../images/sponsi/jetbrains.png";
import img9 from "../images/sponsi/redbull.png";
import roesenfield22 from "../images/currentSponsi/rosenfeld.jpg";
import img10 from "../images/sponsi/wwc.png";
import img11 from "../images/sponsi/codingblocks.png";
import filecoin22 from "../images/currentSponsi/filecoin.png";
function Sponsor() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="sponsor" id="sponsor">
      <div className="theme__header" style={{ paddingTop: "80px" }}>
        <div
          className="header_line"
          style={{ width: (50 < onlyWidth / 2 - 200) ? onlyWidth / 2 - 200 : 50 }}
        ></div>
        <div className="theme__head">Past Sponsors</div>
        <div
          className="header_line"
          style={{ width: (50 < onlyWidth / 2 - 200) ? onlyWidth / 2 - 200 : 50 }}
        ></div>
      </div>
      <div class="slider">
        <div class="slide-track">

          <div class="slide">
            <img src={celo22} style={{ marginRight: '80px' }} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img1}  height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img2} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img3} style={{ marginLeft: '150px' }}  height="100" alt="" />
          </div>

          <div class="slide">
            <img src={agora22} height="80" style={{ marginLeft: '30px', marginTop: '20px' }} alt="" />
          </div>

          <div class="slide">
            <img src={img4} style={{ marginLeft: '50px' }} height="80" alt="" />
          </div>

          <div className="slide">
            <img src={img5} height="70" style={{ marginLeft: '200px', marginTop: '10px' }} alt="" />
          </div>
          <div class="slide">
            <img src={winzo22} style={{ marginLeft: '50px' }} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img6} style={{ marginLeft: '50px' }} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img7} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={polygon22} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img8} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img9} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={roesenfield22} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img10} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img11} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={filecoin22} height="100" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sponsor;
