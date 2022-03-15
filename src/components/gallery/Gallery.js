import React,{useEffect} from "react";
import Carousel from "../carousels/Carousel";

import CarouselGalleria from "../carousels/Carousel";
import "./Gallery.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
function Gallery() {
  const onlyWidth = useWindowWidth();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
  return (
    <div className="galleria" id="gallery">
      <div className="theme__header" style={{marginTop:"70px"}}>
        <div
          className="header_line"
          style={{width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Galleria</div>
        <div
          className="header_line"
          style={{width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
      <div className="carousel__txt">
        <div className="carousel">
          <Carousel />
        </div>

        <div className="team__left gall_left">
          <div className="team__head1">HackNSUT 2.0 Showcase</div>
          <div className="team__head2">
          There is more to representing art than selling art. The life of the gallery is dependent on the renewal and refreshment of its artists and dealers. When that stops happening, it's the end.
          </div>
          <div 
	className="apply-button" 
	data-hackathon-slug="hacknsut-5" 
	data-button-theme="dark-inverted"
	style={{height: 44 + 'px', width: 312 + 'px'}}
></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
