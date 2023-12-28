import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { MyCarouselData } from "./MyCarouselData";
import "./MyCarousel.css";

const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };
  const items = MyCarouselData.map((item) => (
    <div key={item.id}>
      <Link
        to={
          item.href !== undefined && item.href !== "" ? item.href : "/default"
        }
      >
        <img
          className="cursor-pointer object-cover object-top  w-[300px] h-[250px]"
          src={item.image}
          alt=""
        ></img>
      </Link>
      <div className="cursor-pointer p-4">
        <Link
          to={
            item.href !== undefined && item.href !== "" ? item.href : "/default"
          }
        >
          <h3 className="text-large font-medium text-gray-900">{item.brand}</h3>
          <p className="mt-2 text-sm text-gray-500">{item.title}</p>
        </Link>
      </div>
    </div>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="responsive"
    />
  );
};

export default Carousel;
