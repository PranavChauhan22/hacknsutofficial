import React from 'react'
import "./Loading.css"
import img from "../images/logo_white and purple.png"
function Loading() {
  return (
    <div className="her">
        <div id="breathing-button">
            <img src={img} className="preload__icon"/>
        </div>
            <h1 data-content="HackNSUT'22" style={{marginTop:"80px"}}>HackNSUT'22</h1>
    </div>
  )
}

export default Loading