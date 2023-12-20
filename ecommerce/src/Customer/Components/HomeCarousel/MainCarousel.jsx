import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";
import "./MainCarousel.css";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const MainCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = MainCarouselData.map((item) => (
    <img className="image" role="presentation" src={item.image} alt=""></img>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      infinite
      disableButtonsControls
      autoPlayInterval={1000}
      //responsive={responsive}
    />
  );
};

export default MainCarousel;
