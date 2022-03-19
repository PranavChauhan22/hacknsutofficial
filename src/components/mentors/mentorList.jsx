import './mentors.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import img1 from "../images/mentors/adityaOberoi.jpeg";
import Mentor from './mentor';

function Mentors() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="sponsor" id="sponsor">
      <div className="theme__header" style={{ paddingTop: "0px" }}>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
        <div className="theme__head curr-sponsors">Meet our Mentors</div>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
      </div>


<section className="">
  <div className="container px-6 py-10 mx-auto">
   
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
    
    <Mentor img={img1} name="Aditya Oberai" work="DevRel Engineer @ Appwrite | MLH Coach | Twilio Champion | Gold Microsoft Learn Student Ambassador | Google DSC Lead '21" link="https://www.linkedin.com/in/adityaoberai1/"/>
  
    </div>
  </div>
</section>

    </div>
  );
}

export default Mentors;
