import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./HomeSectionCarousel.css";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard></HomeSectionCard>
  ));

  return (
    <div className="relative p-4">
      <button className="left-btn">
        <ChevronLeftIcon></ChevronLeftIcon>
      </button>
      <AliceCarousel
        mouseTracking
        items={items}
        //autoPlay
        infinite
        disableButtonsControls
        //autoPlayInterval={3000}
        responsive={responsive}
      />

      <button className="right-btn">
        <ChevronRightIcon></ChevronRightIcon>
      </button>
    </div>
  );
};

export default HomeSectionCarousel;
