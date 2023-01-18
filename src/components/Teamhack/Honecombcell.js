import React from "react";
import "./Team.css";
import {GrLinkedinOption} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'

export default function Honecombcell(props) {
  return (
    <li class='honeycomb-cell'>
      <img class='honeycomb-cell_img' src={props.img} alt='' />
      <div class='honeycomb-cell_title'>{props.title}</div>
      <a href={props.ln}>
        <GrLinkedinOption className="ln_ic"/>
      </a>
      <a href={props.ig}>
        <BsInstagram className="ln_ic"/>
      </a>
    </li>
  );
}
