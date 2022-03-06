import React, { useState } from "react";
import home_animation from "../animations/homepage.json";
import Lottie from "react-lottie";
import Fade from 'react-reveal/Fade';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./Home.css";
import Countdown from "./Countdown";
import Typewriter from 'typewriter-effect';

function Home() {
  const onlyWidth = useWindowWidth();
  const [isStopped, setisStopped] = useState(false);
  const [isPaused, setisPaused] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: home_animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="home" id="home">
      <div className="social_icons">
        <div className="upper_div"></div>
        <a href="https://www.instagram.com/_hacknsut_/" target={"_blank"}>

        <AiFillInstagram className="social_icon" />
        </a>
        <AiFillLinkedin className="social_icon" />
        <AiOutlineTwitter className="social_icon" />
        <div className="upper_div"></div>
      </div>
      <div className="outer_section">
        <div className="left_section">
          <Fade left>

          <div className="home__txt_1">Welcome to</div>
          </Fade>
          <div className="home__txt_2">HackNSUT</div>
          <Typewriter
  options={{
    strings: ['Learn', 'Code','Develop'],
    autoStart: true,
    loop: true,
    className:"type"
  }}
/>
<Fade bottom>
          <div className="home__txt_3">organised by IEEE NSUT</div>
  </Fade>
         <Countdown date={'2022-03-24'}/>
         <a href="#about" style={{textDecoration:"none"}}>

          <div className="home_btn">
            Get Started
            </div>
         </a>
        </div>
        <Fade up>

        <div className="right_section">
          <Lottie
            options={defaultOptions}
            height={onlyWidth >= 678 ? 600 : onlyWidth >= 678 ? 500 : 300}
            isStopped={isStopped}
            isPaused={isPaused}
            />
        </div>
            </Fade>
      </div>
    </div>
  );
}

export default Home;
