import Metvy from "./metvy.png";
import Mentro from "./mentro.svg";
import YSI from "./ysi.png";
import Metaschool from "./metas.png";
const object1={src:Metvy,href:"https://metvy.com/"};
const object2={src:Mentro,href:"https://mentro.tech/"};
const object3={src:YSI,href:"https://youngskilledindia.com/"};
const object4={src:Metaschool,href:"https://metaschool.so/"};
const platarray=[object1,object2,object3,object4];
const listitems=platarray.map((index)=>
        <div class="logo-box griditem">
            <a href={index.href} target="_blank" rel="noreferrer">
                <img src={index.src} alt="logo"/>
            </a>
        </div>
    )
function Education() {
    return (
        <div class="plat">
                    <p class="plat-heading">
                        Education Partner
                    </p>
                    <div class="plat-grid">
                        {listitems};
                    </div>
                </div>
    );
  }
  
  export default Education;