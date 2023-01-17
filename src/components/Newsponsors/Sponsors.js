import Plat from "./Plat";
import Gold from "./Gold";
import Title from "./Title";
import Associate from "./Associate";
import './Sponsors.css';

function Sponsors() {
    return (
         <section class="sponsors">

        <p class="sponsor-heading">
            OUR SPONSORS
        </p>
        <div class="column">
            <Title/>
            <Associate/>
            <Plat/>
            <Gold/>
        </div>
        </section>
    );
  }
  
  export default Sponsors;