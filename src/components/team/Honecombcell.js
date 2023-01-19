import React from "react";
import "./Team.css";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";

export default function Honecombcell(props) {
  return (
    // <div className={props.className}>
    <li className={`honeycomb-cell`}>
      <img className='honeycomb-cell_img' src={props.img} alt='' />
      <div className='honeycomb-cell_title'>{props.title}</div>
      <a href={props.ln} className='team-icon'>
        <GrLinkedinOption className='ln_ic' />
      </a>
      <a href={props.ig} className='team-icon'>
        <BsInstagram className='ln_ic' />
      </a>
    </li>
    // </div>
  );
}
