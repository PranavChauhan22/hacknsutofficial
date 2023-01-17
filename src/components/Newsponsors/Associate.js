import DigitalOcean from "./digitalocean.png";
import InterviewBuddy from "./interviewbuddy.png";
const object1={src:DigitalOcean,href:"https://www.digitalocean.com/"};
const object2={src:InterviewBuddy,href:"https://interviewbuddy.in/"};
const associatearray=[object1,object2];
    const listitems=associatearray.map((index)=>
        <div class="logo-box griditem">
            <a href={index.href} target="_blank" rel="noreferrer">
                <img src={index.src} alt="logo" />
            </a>
        </div>
    )
function Associate() {
    return (
        <div class="gold">
                    <div class="gold-grid">
                        {listitems};
                    </div>
                    <p class="gold-heading">
                        ASSOCIATE SPONSORS
                    </p>
                </div>
    );
  }
  
  export default Associate;