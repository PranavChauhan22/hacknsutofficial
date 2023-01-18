import Plat from "./Plat";
import Gold from "./Gold";
import Title from "./Title";
import { useWindowWidth } from "@react-hook/window-size";
import Associate from "./Associate";
import "./Sponsors.css";
import AnnouncingSponsors from "./AnnouncingSponsors";
import Education from "./Education";
import Hiring from "./Hiring";
import Platform from "./Platform";
import Sticker from "./Sticker";

function Sponsors() {
  const onlyWidth = useWindowWidth();
  return (
    <>
    <div className="theme__header">
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
        <div className="theme__head">OUR SPONSORS</div>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
      </div>
    <section class="sponsors">
      <div class="column">
        <Title />
        <Associate />
        <Plat />
        <Gold />
        <Education/>
        <Hiring/>
        <Platform/>
        <Sticker/>
        
        
      </div>
    </section>
    </>
  );
}

export default Sponsors;
