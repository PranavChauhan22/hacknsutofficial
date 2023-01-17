import Devfolio from "./Devfolio_Logo-Colored.png";
import Polygon from "./Polygon_Logo-Colored.png";
const object1={src:Devfolio,href:"https://celo.org/"};
const object2={src:Polygon,href:"https://polygon.technology"};
const platarray=[object1,object2];
const listitems=platarray.map((index)=>
        <div class="logo-box griditem">
            <a href={index.href} target="_blank" rel="noreferrer">
                <img src={index.src} alt="logo"/>
            </a>
        </div>
    )
function Plat() {
    return (
        <div class="plat">
                    <p class="plat-heading">
                        PLATINUM SPONSORS
                    </p>
                    <div class="plat-grid">
                        {listitems};
                    </div>
                </div>
    );
  }
  
  export default Plat;