import React, { useState, useEffect } from "react";
import home_animation from "../animations/homepage.json";
import Lottie from "react-lottie";
import Fade from "react-reveal/Fade";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./Home.css";
import Countdown from "./Countdown";
import Typewriter from "typewriter-effect";
import {FaDiscord} from 'react-icons/fa'
import Prize from "../prizes/Prize";

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="home" id="home">
      <div className="social_icons">
        <div className="upper_div"></div>
        <a href="https://www.instagram.com/_hacknsut_/" target={"_blank"}>
          <AiFillInstagram className="social_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/hack-nsut-a86aa2182//"
          target={"_blank"}
        >
          <AiFillLinkedin className="social_icon" />
        </a>
        <a href="https://twitter.com/hacknsut" target={"_blank"}>
          <AiOutlineTwitter className="social_icon" />
        </a>
        <a href="https://facebook.com/hacknsut" target={"_blank"}>
          <AiOutlineFacebook className="social_icon" />
        </a>
        <a href="mailto:ieeehacknsut@gmail.com" target={"_blank"}>
          <AiOutlineMail className="social_icon" />
        </a>
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
              strings: ["Learn", "Code", "Develop"],
              autoStart: true,
              loop: true,
              className: "type",
            }}
          />
          <Fade bottom>
            <div className="home__txt_3">organised by IEEE NSUT</div>
          </Fade>
          <Countdown date={"2022-03-25"} />

            <div
              className="apply-button"
              data-hackathon-slug="hacknsut-5"
              data-button-theme="dark-inverted"
    
            ></div>
             <a href="https://discord.gg/sA2VYB2f" target={"_blank"} className="discord_wrap" style={{marginTop:"10px"}}>
           <FaDiscord className="discord_icon"/>
           <div className="discord_txt">Join Discord</div>
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
