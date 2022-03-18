import React, { useState } from "react";
import "./About.css";
import CountUp from "react-countup";
import Fade from 'react-reveal/Fade';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'
import { FiSettings } from "react-icons/fi";
import Lottie from "react-lottie";
import aboutieee_animation from "../animations/ieee.json";


function AboutIeee() {
  const [isStopped, setisStopped] = useState(false);
  const [isPaused, setisPaused] = useState(false);
  const onlyWidth = useWindowWidth()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutieee_animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="aboutieee" id="about">
      <Fade left>

  
      <div className="about__right about_left">
        <div className="about__text">
          <div className="about__head">About IEEENSUT</div>
          IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity. IEEE-NSUT Student Branch works to create an atmosphere of technical excellence for the students. We manage and organize various events and conferences at national level. It aims at helping students in building an attitude towards applying engineering in daily life by learning ways to use the latest technology on offer.
        </div>
      
       
      </div>
        </Fade>
      <div className="about__left">
        <Lottie
          options={defaultOptions}
          height={onlyWidth>=678?500:onlyWidth>=466?300:200}
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </div>
    </div>
  );
}

export default AboutIeee;
