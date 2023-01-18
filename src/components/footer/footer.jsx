import React, { useEffect } from "react";
import "./footer.css";
import SocialFollow from "./social";
import {FaDiscord} from 'react-icons/fa'
import im from "../images/hacklogo.png"
function Footer() {
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
    <footer>
      <div className="row" id="footer">
        <div className="col">
          <div className="logos_wrap">
            <div>

          <img
            src={require("../images/TechWeekLogo.png")}
            className="logo"
            ></img>
            </div>
            <div>

          <img
            src={im}
            className="logo_nsut"
            ></img>
            </div>
            </div>
          <div>
            A 24-hour Software Hackathon with themes like IoT,
            Blockchain/Fintech, AR/VR, Edtech, Healthcare, Assistive technology
            and much more. IEEE NSUT’s annual Technical Extravaganza HackNSUT’22
            for its next edition, is organised this time under the aegis of
            Moksha-Innovision 22, the annual cultural and technical fest of
            Netaji Subhas University of Technology.
          </div>
        </div>
        <div className="col brd">
          <h3 className="footerhead">
            Address{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <div>Netaji Subhas University of Technology</div>
          <div>Sector -3, Dwarka</div>
          <div>New Delhi - 110078</div>
          <div className="email"><a href="mailto:ieee@nsut.ac.in">ieee@nsut.ac.in</a></div>

          <h4>
            Ritik Yadav <br />
            Chief-Convener: +91 97113 57634
          </h4>
          <br></br>
          <h4>
            Pranav Chauhan <br />
            Chief-Convener: +91 9315 298602
          </h4>
        </div>
        {/* <div className="col brd">
          <h3>
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="#about" style={{textAlign:"left"}}>About</a>
            </li>
            <li>
              <a href="#sponsor">Sponsors</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
            <li>
              <a href="/rules">Rules</a>
            </li>
          </ul>

        </div> */}
        <div className="col brd">
          <h3 className="footerhead">
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <div className="wrap_l">
          <div href="#about">About</div>
          <div href="#sponsor">Sponsors</div>
          <div href="#faq">FAQs</div>
          <div href="#footer">Contact</div>
          <div href="/rules">Rules</div>
          </div>

        </div>
        <div className="col">
          {/* <div
            className="apply-button"
            data-hackathon-slug="hacknsut-5"
            data-button-theme="dark"
            style={{ height: 44 + "px", width: 312 + "px" }}
          ></div> */}
         <a href="https://discord.gg/CajACdgY" target={"_blank"} className="discord_wrap">
           <FaDiscord className="discord_icon"/>
           <div className="discord_txt">Join Discord</div>
         </a>
          <div className="social">
            <SocialFollow />
          </div>
          <div style={{marginTop:"30px"}}>
            <div className="insu">
            Interested in sponsoring us?
              </div>
          <a href="https://forms.gle/rLDheSbUvMDTfwhGA" target={"_blank"} style={{textDecoration:"none"}}>

            <button className="btn btn1 brochure" style={{marginTop:"20px"}}>Sponsor Us</button>
          </a> 
          </div>

        </div>
      </div>
      <hr></hr>

    <a href={"https://devfolio.co/code-of-conduct"} target={"_blank"} style={{textDecoration:"none",color:"white"}}>
     <p className="copyright">Code of Conduct</p>  </a> 
      <p className="copyright">HackNSUT © 2023 - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
