import React from "react";
import "../../App.css";
import logo1 from "./images/axure.png"
import logo2 from "./images/taskade.png"
import logo3 from "./images/wolfram.png"
import logo4 from "./images/xyz.png"

import p1 from "./partners/dscbennett.png"
import p2 from "./partners/ed.png"
import p3 from "./partners/ieeedtu.png"
import p4 from "./partners/ieeepec.png"
import p5 from "./partners/kalidni.png"
import p6 from "./partners/dscmsit.png"
import p7 from "./partners/ieeemait.png"
import p8 from "./partners/ieeebkbiet.png"
import p9 from "./partners/ieeeadgitm.png"
import p10 from "./partners/ieeeciet.png"
import p11 from "./partners/ieeeiiitd.png"
import p12 from "./partners/bvpieee.png"
import p13 from "./metvy.png"
import p14 from "./youngskilled.png"
import p15 from "./mentro.svg"
import p16 from "./metaschool.jpeg"
import p17 from "./social3.svg"
import p18 from "./streamyard.png"
import p19 from "./stickeryou.webp"

function AnnouncingSponsors() {
  return (
    <section className="eventStart" id="sponsor">
      <p class="event-heading" style={{marginTop:"60px"}}>Education Partners</p>
      <div className="logos_wrap">
        <img src={p13} className="logo_sponsi"/>
        <img src={p14} className="logo_sponsi"/>
        <img src={p15} className="logo_sponsi"/>
        <img src={p16} className="logo_sponsi"/>
      </div>
      <p class="event-heading" style={{marginTop:"60px"}}>Hiring Partner</p>
      <div className="logos_wrap">
        <img src={p17} className="logo_sponsi"/>
      </div>
      <p class="event-heading" style={{marginTop:"60px"}}>Platform Partner</p>
      <div className="logos_wrap">
        <img src={p18} className="logo_sponsi"/>
      </div>
      <p class="event-heading" style={{marginTop:"60px"}}>Sticker Partner</p>
      <div className="logos_wrap">
        <img src={p19} className="logo_sponsi"/>
      </div>
      <p class="event-heading" style={{marginTop:"60px"}}>Outreach Partners</p>
      <div className="logos_wrap">
        <img src={p1} className="logo_sponsi"/>
        <img src={p2} className="logo_sponsi"/>
        <img src={p3} className="logo_sponsi"/>
        <img src={p4} className="logo_sponsi"/>
        <img src={p5} className="logo_sponsi"/>
        <img src={p6} className="logo_sponsi"/>
        <img src={p7} className="logo_sponsi"/>
        <img src={p8} className="logo_sponsi"/>
        <img src={p9} className="logo_sponsi"/>
        <img src={p10} className="logo_sponsi"/>
        <img src={p11} className="logo_sponsi"/>
        <img src={p12} className="logo_sponsi"/>


      </div>

    </section>
  );
}

export default AnnouncingSponsors;
