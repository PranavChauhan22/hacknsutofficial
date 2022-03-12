import React from 'react'
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size'
import Faq from './Faq'
function Faqs() {
    const onlyWidth = useWindowWidth()
  return (
    <div className="faq" id="faq">
      <div className="theme__header" style={{marginTop:"70px"}}>
        <div
          className="header_line"
          style={{ width: onlyWidth / 2 - 200 }}
        ></div>
        <div className="theme__head">FAQ</div>
        <div
          className="header_line"
          style={{ width: onlyWidth / 2 - 200 }}
        ></div>
      </div>
      <Faq/>
    </div>
  )

}

export default Faqs