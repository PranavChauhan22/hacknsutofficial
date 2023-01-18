import React from 'react'
import "./Loading.css"
import img from "../images/hacklogo.png"
function Loading() {
  return (
    <div className="her">
        <div id="breathing-button">
            <img src={img} className="preload__icon"/>
        </div>
            <h1 data-content="HackNSUT'23" style={{marginTop:"80px"}}>HackNSUT'23</h1>
    </div>
  )
}

export default Loading