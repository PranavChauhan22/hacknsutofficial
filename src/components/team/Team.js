import React from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import "./Team.css";
import img1 from "../images/profiles/Akshat.JPG"
import img2 from "../images/profiles/pranav.png"
import img3 from "../images/profiles/aarushi.jpg"
import img4 from "../images/profiles/annanya.jpg"
import img5 from "../images/profiles/ayush.jpeg"
import img6 from "../images/profiles/basant.JPG"
import img7 from "../images/profiles/chirag.jpg"
import img8 from "../images/profiles/harshfinal.png"
import img9 from "../images/profiles/ritik.jpg"
import img10 from "../images/profiles/harshsharma.png"
import img11 from "../images/profiles/mehul.jpeg"
import img12 from "../images/profiles/mukhtish.jpeg"
import img13 from "../images/profiles/vibhu.jpeg"
import img14 from "../images/profiles/Yajur.jpeg"
import img15 from "../images/profiles/anshul.jpg"
import img16 from "../images/profiles/gagan.jpeg"
import img17 from "../images/profiles/anshul.jpg"
import img18 from "../images/profiles/UJJAWAL BANSAL.jpeg"
import img19 from "../images/profiles/rohit.jpeg"
import img20 from "../images/profiles/mridul.jpeg"

function Team() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="team" id="team">
      <div className="theme__header">
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Team</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50}}
        ></div>
      </div>
      <div className="team__outer">
        <div className="team__left">


          <div className="team__head1">
            Meet the team
          </div>
      
          <div className="team__head2">
          Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.
          </div>
          <a href="/team" style={{textDecoration:"none"}} target={"_blank"}>
          <div className="home_btn">Have a look</div>
          </a>
        </div>
        <div className="team__right">
          <img src={img16} className="profile__pic"/>
          <img src={img20} className="profile__pic"/>
          <img src={img11} className="profile__pic"/>
          <img src={img19} className="profile__pic"/>
          <img src={img10} className="profile__pic"/>
          <img src={img12} className="profile__pic"/>
          <img src={img13} className="profile__pic"/>
          <img src={img6} className="profile__pic"/>
          <img src={img9} className="profile__pic"/>
          <img src={img7} className="profile__pica"/>
          <img src={img8} className="profile__pic"/>
          <img src={img14} className="profile__pica"/>
          <img src={img4} className="profile__pic"/>
          <img src={img17} className="profile__pica"/>
          <img src={img3} className="profile__pic"/>
          <img src={img18} className="profile__pic"/>
          <img src={img1} className="profile__pic"/>
          <img src={img5} className="profile__pic"/>
          <img src={img2} className="profile__pic"/>
        </div>
      </div>
    </div>
  );
}

export default Team;
