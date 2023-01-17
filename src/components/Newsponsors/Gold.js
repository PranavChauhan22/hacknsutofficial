import Solana from "./Solana-Colored.png";
import Filecoin from "./Filecoin Coloured White Text.png";
import Replit from "./Replit-light-background.png";
import logo1 from "./images/axure.png"
import logo2 from "./images/taskade.png"
import logo3 from "./images/wolfram.png"
import logo4 from "./images/xyz.png"
const object1={src:Solana,href:"https://polygon.technology"};
const object2={src:Filecoin,href:"https://celo.org/"};
const object3={src:Replit,href:"https://polygon.technology"};
const object4={src:logo1,href:"https://celo.org/"};
const object5={src:logo2,href:"https://polygon.technology"};
const object6={src:logo3,href:"https://celo.org/"};
const object7={src:logo4,href:"https://celo.org/"};
const goldarray=[object1,object2,object3,object4,object5,object6];
    const listitems=goldarray.map((index)=>
        <div class="logo-box griditem">
            <a href={index.href} target="_blank" rel="noreferrer">
                <img src={index.src} alt="logo" />
            </a>
        </div>
    )
function Gold() {
    return (
        <div class="gold">
                    <div class="gold-grid">
                        {listitems};
                    <div class="logo-box griditem">
                        <a href={object7.href} target="_blank" rel="noreferrer">
                            <img src={object7.src} alt="logo" />
                        </a>
                    </div>
                    </div>
                    <p class="gold-heading">
                        GOLD SPONSORS
                    </p>
                </div>
    );
  }
  
  export default Gold;
