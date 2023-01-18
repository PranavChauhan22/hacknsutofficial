import React from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import "./Team.css";
import logo2 from "../images/team/akshat.jpeg";
import logo3 from "../images/team/anshul (1).jpg";
import logo4 from "../images/team/arpit.jpg";
import logo5 from "../images/team/ayush.jpg";
import logo6 from "../images/team/chirag.jpg";
import logo7 from "../images/team/pranav.jpeg";
import logo8 from "../images/team/prerna.jpg";
import logo9 from "../images/team/shubham.jpg";
import logo10 from "../images/team/sneha.JPG";
import logo11 from "../images/team/ujjawal.jpg";
import logo1 from "../images/team/Vidit.jpeg";
import logo12 from "../images/team/Yajur.jpeg";
import logo13 from "../images/team/ritik.jpeg";
import logo14 from "../images/team/vibhu.jpeg";
import Honecombcell from "./Honecombcell";

export default function Team() {
  const onlyWidth = useWindowWidth();

  return (
    <div className="team" id="team">
     <div
        className="theme__header"
        id="timeline"
        style={{ marginTop: "100px" }}
      >
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
        <div className="theme__head">OUR TEAM</div>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
      </div>
      <ul className="honeycomb">
        <Honecombcell
          img={logo14}
          title="Mentor"
          ln={"https://www.linkedin.com/in/vibhu-badal-gupta/"}
          ig={"https://www.instagram.com/thewittybrown/"}
        />
        <Honecombcell
          img={logo10}
          title="Mentor"
          ig={"https://www.instagram.com/ishnehaaa/"}
          ln={"https://www.linkedin.com/in/pandeysneha/"}
        />
        <Honecombcell
          img={logo7}
          title="Chief Convener"
          ig={"https://www.instagram.com/thepranav.chauhan/"}
          ln={"https://www.linkedin.com/in/pranav-chauhan-217bb11b9/"}
        />
        <Honecombcell
          img={logo13}
          title="Chief Convener"
          ig={"https://www.instagram.com/ritikyadav_675/"}
          ln={"https://www.linkedin.com/in/ritik-yadav-675abc/"}
        />
        <Honecombcell
          img={logo3}
          title="Co-Convener"
          ig={"https://www.instagram.com/wiz_anshul/"}
          ln={"https://www.linkedin.com/in/anshuly777/"}
        />
        <Honecombcell
          img={logo6}
          title="Co-Convener"
          ig={"https://www.instagram.com/chiragjindal9811/"}
          ln={"https://www.linkedin.com/in/chirag-jindal-a11a24205/"}
        />
        <Honecombcell
          img={logo5}
          title="Treasurer"
          ig={"https://www.instagram.com/ayushtenguria/"}
          ln={"https://www.linkedin.com/in/ayush-sharma-800853120/"}
        />
        <Honecombcell
          img={logo3}
          title="PR Head"
          ig={"https://www.instagram.com/wiz_anshul/"}
          ln={"https://www.linkedin.com/in/anshuly777/"}
          // className={"hidden"}
        />
        <Honecombcell
          img={logo8}
          title="EM Head"
          ig={"https://www.instagram.com/_.yd.prerna._/"}
          ln={"https://www.linkedin.com/in/prernayadav488/"}
        />
        <Honecombcell
          img={logo4}
          title="Creative Head"
          ig={""}
          ln={"https://www.linkedin.com/in/arpit-juneja-/"}
        />
        <Honecombcell
          img={logo5}
          title="Tech Head"
          ig={"https://www.instagram.com/ayushtenguria/"}
          ln={"https://www.linkedin.com/in/ayush-sharma-800853120/"}
          // className={"hidden"}
        />
        <Honecombcell
          img={logo1}
          title="General Secretary"
          ig={"https://www.instagram.com/vidit_sinha/"}
          ln={"https://www.linkedin.com/in/vidit-v-1a0ab2205/"}
        />
        <Honecombcell
          img={logo9}
          title="General Secretary"
          ig={""}
          ln={"https://www.linkedin.com/in/arpit-juneja-/"}
        />
        <Honecombcell
          img={logo12}
          title="General Secretary"
          ig={"https://www.instagram.com/yajur_chugh_07/"}
          ln={"https://www.linkedin.com/in/yajur-chugh-5a44a220b/"}
        />

        <li className="honeycomb-cell honeycomb_Hidden"></li>
      </ul>
    </div>
  );
}
