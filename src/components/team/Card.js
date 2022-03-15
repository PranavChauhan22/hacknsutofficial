import React,{useEffect} from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import "./Card.css"
function Card(props) {

  return (
    <div className="card__team">
        <div className="pp_pic">

        <img src={"https://drive.google.com/thumbnail?id="+props.data.img} className={(props.data.name==="Anshul Yadav"||props.data.name==="Chirag Jindal"||props.data.name==="Yajur Chugh")?"addons_e":"addons"}/>
        </div>
        <div className="card__head_1">{props.data.name}</div>
        <div className="card__head_2">{props.data.desg}</div>
        <div className="icon__wrapp__soc">

          <a href={props.data.linkedIn} target={"_blank"}>
          <FaLinkedinIn className="linkedin__icon"/>   </a>     
        </div>
    </div>
  )
}

export default Card