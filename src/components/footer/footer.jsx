import "./footer.css"
import SocialFollow from "./social";

function Footer() {
    return (
     <footer>
         <div className="row" id="footer">
           <div className="col">
             <img src={require('../images/logo_black and white.png')} className="logo"></img>
             <p>HackNSUT is a fraternity of programmers, developers and hackers aimed primarily at addressing real life problems, brainstorming innovative ideas and implementing the ingenious solutions into working prototypes.</p>
           </div>
           <div className="col brd">
             <h3>Address <div className="underline"><span></span></div></h3>
             <p>Netaji Subhas University of Technology</p>
             <p>Sector -3, Dwarka</p>
             <p>New Delhi - 110078</p>
             <p className="email">ieeehacknsut@gmail.com</p>
             <h4>Gagan Singh: +91-9999566832</h4>
             <h4>Akshat Agarwal: +91-9560969330</h4>
             <h4>Ujjawal Bansal: +91-9136334929</h4>

           </div>
           <div className="col brd"> 
           <h3>Links <div className="underline"><span></span></div></h3>
           <ul>
             <li><a href="#about">About</a></li>
             <li><a href="#sponsor">Sponsors</a></li>
             <li><a href="#faq">FAQs</a></li>
             <li><a href="#footer">Contact</a></li>
           </ul>
           
           </div>
           <div className="col">
             <button className="btn btn1">Register Now</button>
             <div className="social">
             <SocialFollow />
             </div>
           </div>
         </div>
         <hr></hr>
         
         <p className="copyright">HackNSUT © 2022 - All Rights Reserved</p>
        
     </footer>

    );
  }
  
  export default Footer;