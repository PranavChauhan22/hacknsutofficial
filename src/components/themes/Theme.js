import React from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import Fade from 'react-reveal/Fade';
import "./Theme.css";
function Theme() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="themes" id="theme">
      <div className="theme__header">
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Themes</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
      <div className="themes__inner" style={{ paddingTop: "50px" }}>
        <Fade left>

        <div className="theme__item">Daily campus Issues</div>
        </Fade>
        <Fade bottom>

        <div className="theme__item">

          Assistive technology
        </div>
        </Fade>
        <Fade right>
        <div className="theme__item">Automation</div>
        </Fade>
      </div>
      <div className="themes__inner">
        <div className="theme__item">EdTech</div>
        <div className="theme__item">IOT</div>
        <div className="theme__item">Blockchain</div>
      </div>
      <div className="themes__inner">
        <div className="theme__item">AR/VR</div>
        <div className="theme__item">Open Innovation</div>
      </div>
    </div>
  );
}

export default Theme;
