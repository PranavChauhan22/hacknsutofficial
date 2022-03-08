import React from 'react'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import "./Teamfullpage.css"
import Card from './Card';
import img1 from "../images/profiles/Akshat.JPG"
import img2 from "../images/profiles/pranav.png"
import img3 from "../images/profiles/aarushi.jpg"
import img4 from "../images/profiles/annanya.jpg"
import img5 from "../images/profiles/ayush.jpeg"
import img6 from "../images/profiles/basant.JPG"
import img7 from "../images/profiles/chirag.jpg"
import img8 from "../images/profiles/harshfinal.png"
import img9 from "../images/profiles/ritik.jpg"
import img10 from "../images/profiles/harshsharma.png"
import img11 from "../images/profiles/mehul.jpeg"
import img12 from "../images/profiles/mukhtish.jpeg"
import img13 from "../images/profiles/vibhu.jpeg"
import img14 from "../images/profiles/Yajur.jpeg"
import img15 from "../images/profiles/anshul.jpg"
import img16 from "../images/profiles/gagan.jpeg"
import img17 from "../images/profiles/anshulfinal.png"
import img18 from "../images/profiles/UJJAWAL BANSAL.jpeg"
import img19 from "../images/profiles/rohit.jpeg"
const data=[
  {
    img: img16,
    name:"Gagan Singh",
    desg:"Chief Convener",
    linkedIn:"https://www.linkedin.com/in/gagansingh35/"
  },
  {
    img: img11,
    name:"Mehul Chugh",
    desg:"Mentor",
    linkedIn:"https://www.linkedin.com/in/mehul-chugh/"
  },
  {
    img: img10,
    name:"Harsh Sharma",
    desg:"Co-Convener",
    linkedIn:"https://www.linkedin.com/in/harsh-sharma-56403b122/"
  },
  {
    img: img19,
    name:"Rohit Kumar",
    desg:"Co-Convener",
    linkedIn:"https://www.linkedin.com/in/rohit-kumar-99b697130/"
  },
  {
    img: img6,
    name:"Basant Prasad",
    desg:"General Secretary",
    linkedIn:"https://www.linkedin.com/in/basantnsut/"
  },
  {
    img: img13,
    name:"Vibhu B Gupta",
    desg:"General Secretary",
    linkedIn:"https://www.linkedin.com/in/vibhu-badal-gupta/"
  },
  {
    img: img12,
    name:"Mukhthish B.",
    desg:"General Secretary",
    linkedIn:"https://www.linkedin.com/in/mukthish-b-46602617a/"
  },
  {
    img: img1,
    name:"Akshat Agarwal",
    desg:"Event Management Head",
    linkedIn:"https://www.linkedin.com/in/akshat-aggarwal-27aba9203/"
  },
  {
    img: img18,
    name:"Ujjawal Bansal",
    desg:"Event Management Head",
    linkedIn:"https://www.linkedin.com/in/ujjawal-bansal-aa1010195/"
  },
  {
    img: img2,
    name:"Pranav Chauhan",
    desg:"Tech Head",
    linkedIn:"https://www.linkedin.com/in/pranav-chauhan-217bb11b9/"
    },
    {
      img: img5,
      name:"Ayush Sharma",
      desg:"Tech Head",
      linkedIn:"https://www.linkedin.com/in/ayush-sharma-800853120/"
        },
  {
img: img3,
name:"Aarushi Dahiya",
desg:"Public Relations Head",
linkedIn:"https://www.linkedin.com/in/aarushi-dahiya-7bb338206/"
  },
  
  {
img: img17,
name:"Anshul Yadav",
desg:"Public Relations Head",
linkedIn:"https://www.linkedin.com/in/anshul-yadav-784602208/"
  },
  

  {
img: img4,
name:"Anannya Mishra",
desg:"Creative Head",
linkedIn:"https://www.linkedin.com/in/anannya-mishra-3a16b7203/"
  },
  {
img: img14,
name:"Yajur Chugh",
desg:"Creative Head",
linkedIn:"https://www.linkedin.com/in/yajur-chugh-5a44a220b/"
  },
{
  img: img8,
  name:"Harsh Jain",
  desg:"Creative Head",
  linkedIn:"https://www.linkedin.com/in/harsh-jain-5a8795215/"
},
{
img: img7,
name:"Chirag Jindal",
desg:"Logistics Head",
linkedIn:"https://www.linkedin.com/in/chirag-jindal-a11a24205/"
},
{
img: img9,
name:"Ritik Yadav",
desg:"Logistics Head",
linkedIn:"https://www.linkedin.com/in/ritik-yadav-675abc/"
}
]
function Teamfullpage() {
  const onlyWidth = useWindowWidth();
  return (
    <div className="teamfull_page">
      <div className="theme__header team__head">
        <div
          className="header_line"
          style={{ width: onlyWidth / 2 - 200 }}
        ></div>
        <div className="theme__head">Meet The Team</div>
        <div
          className="header_line"
          style={{ width: onlyWidth / 2 - 200 }}
        ></div>
      </div>
      <div className="team__cards">

      {
        data.map(e=>{
          return <Card data={e}/>
        })
      }
      </div>
    </div>
  )
}

export default Teamfullpage