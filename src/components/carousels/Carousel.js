import "./Carousel.css";
import Fade from 'react-reveal/Fade';
import img1 from "../images/galleryimgs/gallery1.jpg";
import img2 from "../images/galleryimgs/gallery2.jpg";
import img3 from "../images/galleryimgs/gallery3.jpg";
import img4 from "../images/galleryimgs/gallery4.jpg";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";
import img5 from "../images/galleryimgs/gallery5.jpg";
import img6 from "../images/galleryimgs/gallery6.jpg";
import img7 from "../images/galleryimgs/gallery7.jpg";
import img8 from "../images/galleryimgs/gallery8.jpg";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import React from "react";
let IMAGES = [
  {
    src: img1,
    thumbnail: img1,
    tags: [{ value: "Expertise", title: "Expertise" }],
  },
  {
    src: img2,
    thumbnail: img2,
    tags: [{ value: "Legacy", title: "Legacy" }],
  },
  {
    src: img3,
    thumbnail: img3,
    tags: [{ value: "Experience", title: "Experience" }],
  },
  {
    src: img4,
    thumbnail: img4,
    tags: [{ value: "Focus", title: "Focus" }],
  },
  {
    src: img5,
    thumbnail: img5,
    tags: [{ value: "Code", title: "Code" }],
  },
  {
    src: img6,
    thumbnail: img6,
    tags: [{ value: "Develop", title: "Develop" }],
  },
];

function Carousel() {

  const onlyWidth = useWindowWidth();
  if(onlyWidth<1199){
    IMAGES=IMAGES.slice(0,4);
  }
  return (
    <Fade up>

    <div>
      <Gallery images={IMAGES}/>,
    </div>
    </Fade>
  );
}

export default Carousel;
