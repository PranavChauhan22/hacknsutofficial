import React from 'react'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";


import "./Teamfullpage.css"
import Card from './Card';
const img1 ="1CH7jkvsHwOgfkllNM65VnkAAXc7ATN_s"
const img2 ="19ZXOMxFZMZQIGP0msjnM9viNHK1ZrlnX"
const img3 = "12vfrkOO5C92ExlJRZyWUZakigEawzOXk"
const img4 ="19kXytysDJTuYLJO06GRkRXntjvuE3vqV"
const img5 ="14qTRrtbJeOZfH1oCrQFJdsVCJM7-7bYM"
const img6 ="1O8BtDNAvr4Q_wCCfqSm80fIwJTDF20Yw"
const img7 ="1eSycO_RC2qfNx085-E6NakDoH3FoTK8i"
const img8 ="1DhZ0Pe1YrLCHLVjkqGZ8HatdGFlKSpAE"
const img9 ="1KagQMLZDACqr-Mn_7O6wiWzAyOqCcNXi"
const img10= "1DCfAI8CFdEFukchAKQZN8GzOf8rAw2dX"
const img11= "109Fj17ITesStauBCZKnp7e-hDjWDTERq"
const img12= "1ZUjTWprQYlncou6UPeVMSKwS3EW5RwfM"
const img13= "1uTh3yg32WDMieack6xpBVBmUt_GFIkYk"
const img14= "1mpPvt3JsZDPy4jLLvhMheiDbbVmNna4T"
const img16= "1eeGn2ITs6VwIwqkaFfnufsPsyPA4NzXu"
const img17= "1ygUdMEwoykqxRCoM4imtzabWVYRGlM3T"
const img18= "1mXOhIkisU73wmuY-QKQQNRucUmA5Frh5"
const img19= "1okRG_3gAb8OFyChWEgdjLs7jekPRo5H0"
const img20= "1sPnZsZiEGCkNIon4xA62iZAWCnz4sbNn"
const data=[
  {
    img: img16,
    name:"Gagan Singh",
    desg:"Chief Convener",
    linkedIn:"https://www.linkedin.com/in/gagansingh35/"
  },
  {
    img:img20,
    name:"Mridul Chaba",
    desg:"Mentor",
    linkedIn:"https://www.linkedin.com/in/mridulchaba/"
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