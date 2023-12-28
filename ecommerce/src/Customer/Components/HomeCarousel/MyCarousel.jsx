import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MyCarouselData } from "./MyCarouselData";
import "./MyCarousel.css";
const MyCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const items = MyCarouselData.map((item, index) => (
    <div className="card" key={index}>
      <img
        src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
        alt="Card"
        className="full-image"
      />

      <div className="card-overlay">
        <div className="solid-background">
          <h2 className="card-title">Flat 20% Off</h2>
          <p className="card-description">Ethnic Wear</p>
        </div>
      </div>
    </div>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      infinite
      disableButtonsControls
      responsive={responsive}
    />
  );
};

export default MyCarousel;
