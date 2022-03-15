import React from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import "./Team.css";
const img1 ="1CH7jkvsHwOgfkllNM65VnkAAXc7ATN_s"
const img2 ="19ZXOMxFZMZQIGP0msjnM9viNHK1ZrlnX"
const img3 = "12vfrkOO5C92ExlJRZyWUZakigEawzOXk"
const img4 ="19kXytysDJTuYLJO06GRkRXntjvuE3vqV"
const img5 ="14qTRrtbJeOZfH1oCrQFJdsVCJM7-7bYM"
const img6 ="1O8BtDNAvr4Q_wCCfqSm80fIwJTDF20Yw"
const img7 ="1eSycO_RC2qfNx085-E6NakDoH3FoTK8i"
const img8 ="1DhZ0Pe1YrLCHLVjkqGZ8HatdGFlKSpAE"
const img9 ="1KagQMLZDACqr-Mn_7O6wiWzAyOqCcNXi"
const img10= "1DCfAI8CFdEFukchAKQZN8GzOf8rAw2dX"
const img11= "109Fj17ITesStauBCZKnp7e-hDjWDTERq"
const img12= "1ZUjTWprQYlncou6UPeVMSKwS3EW5RwfM"
const img13= "1uTh3yg32WDMieack6xpBVBmUt_GFIkYk"
const img14= "1mpPvt3JsZDPy4jLLvhMheiDbbVmNna4T"
const img16= "1eeGn2ITs6VwIwqkaFfnufsPsyPA4NzXu"
const img17= "1ygUdMEwoykqxRCoM4imtzabWVYRGlM3T"
const img18= "1mXOhIkisU73wmuY-QKQQNRucUmA5Frh5"
const img19= "1okRG_3gAb8OFyChWEgdjLs7jekPRo5H0"
const img20= "1sPnZsZiEGCkNIon4xA62iZAWCnz4sbNn"

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
          <img src={"https://drive.google.com/thumbnail?id="+img16} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img20} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img11} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img19} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img10} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img12} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img13} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img6} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img9} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img7} className="profile__pica"/>
          <img src={"https://drive.google.com/thumbnail?id="+img8} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img14} className="profile__pica"/>
          <img src={"https://drive.google.com/thumbnail?id="+img4} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img17} className="profile__pica"/>
          <img src={"https://drive.google.com/thumbnail?id="+img3} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img18} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img1} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img5} className="profile__pic"/>
          <img src={"https://drive.google.com/thumbnail?id="+img2} className="profile__pic"/>
        </div>
      </div>
    </div>
  );
}

export default Team;
