import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarourselData } from "./MainCarouselData";
import "./MainCarousel.css";

const MainCarousel = () => {
  const items = MainCarourselData.map((item) => (
    <img className="image" role="presentation" src={item.image} alt=""></img>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      // autoPlay
      infinite
      disableButtonsControls
      //autoPlayInterval={3000}
      //responsive={responsive}
    />
  );
};

export default MainCarousel;
