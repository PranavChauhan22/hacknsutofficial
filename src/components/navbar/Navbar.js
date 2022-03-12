import React from 'react'
import logo from "../images/logo_white and purple.png"
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'
import "./Navbar.css"
function Navbar() {
  const onlyWidth = useWindowWidth()
  return (
      <div className="nav_wrap">

  
    <div className="navbar">
        <div className="navbar__left">
            <img src={logo} className="navbar__logo"/>
        </div>
        <div className="navbar__right">
            {/* <div>
              <a href="#home" style={{textDecoration:"none"}} className="nav_elements">

              Home
              </a>
              </div> */}
              <div>
              <a href="#about" style={{textDecoration:"none"}} className="nav_elements">

              About
              </a>
              </div>
              {onlyWidth>=678&&
           <div>
           <a href="#theme" style={{textDecoration:"none"}} className="nav_elements">

           Themes
           </a>
           </div>
}
{onlyWidth>=678&&
           <div>
           <a href="#sponsor" style={{textDecoration:"none"}} className="nav_elements">

           Sponsors
           </a>
           </div>
}      <div>
              <a href="#timeline" style={{textDecoration:"none"}} className="nav_elements">

              Timeline
              </a>
              </div>
            
              {onlyWidth>=678&&
            <div>
            <a href="#team" style={{textDecoration:"none"}} className="nav_elements">

            Team
            </a>
            </div>
}

{onlyWidth>=678&&
           <div>
           <a href="#faq" style={{textDecoration:"none"}} className="nav_elements">

           FAQs
           </a>
           </div>
}
{/* {onlyWidth>=678&&
           <div>
           <a href="#Judges" style={{textDecoration:"none"}} className="nav_elements">

           Judges
           </a>
           </div>
} */}

{/* {onlyWidth>=678&&
            <div>
            <a href="#team" style={{textDecoration:"none"}} className="nav_elements">

            Team
            </a>
            </div>
} */}
{onlyWidth>=678&&
            <div>
            <a href="#footer" style={{textDecoration:"none"}} className="nav_elements">

            Contact Us
            </a>
            </div>
}
        </div>
    </div>
    </div>
  )
}

export default Navbar