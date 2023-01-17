import Zeeve from "./Zeeve.svg";
import Kiara from "./kiara.png";
const object1={src:Zeeve,href:"https://zeeve.io"};
const object2={src:Kiara,href:"http://www.kiaraeducation.com/"};
const titlearray=[object1,object2];
const listitems=titlearray.map((index)=>
        <div class="logo-box griditem">
            <a href={index.href} target="_blank" rel="noreferrer">
                <img src={index.src} alt="logo"/>
            </a>
        </div>
    )
function Title() {
    return (
        <div class="plat">
                    <p class="plat-heading">
                        TITLE SPONSORS
                    </p>
                    <div class="plat-grid">
                        {listitems};
                    </div>
                </div>
    );
  }
  
  export default Title;