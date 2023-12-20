import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SubCarouselcard from "./SubCarouselcard";

const SubCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };
  const items = [1, 1, 1, 1, 1, 1, 1].map((item) => (
    <div>
      <SubCarouselcard></SubCarouselcard>
    </div>
  ));
  return (
    <div>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default SubCarousel;
