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
import about_animation from "../animations/about.json";
function About() {
  const [isStopped, setisStopped] = useState(false);
  const [isPaused, setisPaused] = useState(false);
  const onlyWidth = useWindowWidth()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about_animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="about" id="about">
      <div className="about__left">
        <Lottie
          options={defaultOptions}
          height={onlyWidth>=678?500:onlyWidth>=466?300:200}
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </div>
      <Fade right>

  
      <div className="about__right">
        <div className="about__text">
          <div className="about__head">About HackNSUT</div>
          HackNSUT is a fraternity of programmers, developers and hackers aimed
          primarily at addressing real life problems, brainstorming innovative
          ideas and implementing the ingenious solutions into working
          prototypes.
        </div>
        <div className="about__text">
          <div className="about__head">
            Gear Up <FiSettings className="setting_icon" />
          </div>
          It provides a platform for the best of minds all across the country to
          learn, build and showcase their true potential. The Hackathon is for
          all those who have a knack of learning outside the classrooms,
          tackling the biggest of challenges and building remarkable projects in
          a team.
        </div>
        <div className="stats">
          <div className="stat_wrap">
            <div className="stats__text">
              <div>

              Participants <br></br>hosted
              </div>
              <div className="countup">

              <CountUp end={200}/> +
              </div>
            </div>
            <div className="stats__text">
              <div>

              Lines of <br></br>code
              </div>
              <div className="countup">

              <CountUp end={80000}/> +
              </div>
            </div>
            <div className="stats__text">
              <div>

              Cups of caffeine<br></br> consumed
              </div>
              <div className="countup">

              <CountUp end={500}/> +
              </div>
            </div>
          </div>
        </div>
      </div>
        </Fade>
    </div>
  );
}

export default About;
