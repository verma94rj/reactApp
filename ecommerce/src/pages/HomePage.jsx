import React from "react";
import MainCarousel from "../Customer/Components/HomeCarousel/MainCarousel";
import SubCarousel from "../Customer/Components/HomeCarousel/SubCarousel";
import "./Homepage.css";
import MyCarousel from "../Customer/Components/HomeCarousel/MyCarousel";

const HomePage = () => {
  return (
    <div className="MyStyle">
      <MainCarousel />
      <MyCarousel />
      <SubCarousel />
    </div>
  );
};

export default HomePage;
