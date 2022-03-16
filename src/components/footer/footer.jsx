import React, { useEffect } from "react";
import "./footer.css";
import SocialFollow from "./social";

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
          <img
            src={require("../images/logo_black and white.png")}
            className="logo"
          ></img>
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
          <div className="email"><a href="mailto:ieeehacknsut@gmail.com">ieeehacknsut@gmail.com</a></div>
          <h4>
            Gagan Singh <br />
            Chief-Convener: +91-9999566832
          </h4>
          <h4>
            Akshat Agarwal <br />
            Event Management Head: +91-9560969330
          </h4>
          <h4>
            Ujjawal Bansal <br />
            Event Management Head: +91-9136334929
          </h4>
        </div>
        <div className="col brd">
          <h3>
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="#about">About</a>
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
        </div>
        <div className="col">
          <div
            className="apply-button"
            data-hackathon-slug="hacknsut-5"
            data-button-theme="dark"
            style={{ height: 44 + "px", width: 312 + "px" }}
          ></div>

          <div className="social">
            <SocialFollow />
          </div>
        </div>
      </div>
      <hr></hr>

      <p className="copyright">HackNSUT © 2022 - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
