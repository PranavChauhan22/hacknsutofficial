import React from "react";
import "./currentSponsor.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import img1 from "../images/currentSponsi/celo.png";
import img2 from "../images/currentSponsi/devfolio.png";
import img3 from "../images/currentSponsi/filecoin.png";
import img4 from "../images/currentSponsi/polygon.png";
import img5 from "../images/currentSponsi/tezos.png";
import img6 from "../images/currentSponsi/rosenfeld.jpg";

import winzo from "../images/currentSponsi/Winzo_final_logo.jpeg"
import agora from "../images/sponsi/agora_logo.png"

function CurrentSponsor() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="sponsor" id="sponsor">
      <div className="theme__header" style={{ paddingTop: "0px" }}>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
        <div className="theme__head curr-sponsors">Current Sponsors</div>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
      </div>

      <div className="title-sponsors">
        <h2 className="theme__head main special">Title Sponsors</h2>
        <div className="cardSet">
          <div className="cardTrack" style={{display:"flex",alignItems:"center"}}>
            <div className="slidea">
              <a href="https://www.winzogames.com/">
                <img src={winzo} width="300" alt=""></img>
              </a>
            </div>

            <div className="slidea">
              <a href="https://www.agora.io/en/">
                <img src={agora} width="300" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="title-sponsors">
        <h2 className="theme__head main special">Platinum Sponsors</h2>
        <div className="cardSet">
          <div className="cardTrack" style={{display:"flex",alignItems:"center"}}>
            <div className="slidea">
              <a href="https://devfolio.co">
                <img src={img2} width="300" alt=""></img>
              </a>
            </div>

            <div className="slidea">
              <a href="https://polygon.technology/">
                <img src={img4} width="300" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-sponsors">
        <h2 className="theme__head main special">Gold Sponsors</h2>
        <div className="cardSet">
          <div className="cardTrack">
            <div className="slidea">
              <a href="https://celo.org ">
                {" "}
                <img src={img1} height="100" alt="" />
              </a>
            </div>

            <div className="slidea">
              <a href="https://filecoin.io ">
                {" "}
                <img src={img3} height="100" alt="" />
              </a>
            </div>

            <div className="slidea" style={{ marginLeft: "80px" }}>
              <a href="https://tezos.com">
                <img src={img5} height="100" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-sponsors spaceUp">
        <h2 className="theme__head main">Special Sponsors</h2>
        <div className="cardSet">
          <div className="cardTrack">
            <div className="slidea">
              <a href="https://rosenfeldmedia.com/">
                {" "}
                <img src={img6} height="100" alt="" />
              </a>
            </div>

            {/* <div className="slidea">
             <a href="https://filecoin.io "> <img src={img3} height="100" alt="" /></a>
            </div>

            <div className="slidea" style={{marginLeft:'80px'}}>
              <a href="https://tezos.com"><img src={img5} height="100" alt=""/></a>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="slide"></div> */}
      {/* <div className="slide"></div> */}
    </div>
  );
}

export default CurrentSponsor;
