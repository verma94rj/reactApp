import React from "react";
import MainCarousel from "../Customer/Components/HomeCarousel/MainCarousel";
import SubCarousel from "../Customer/Components/HomeCarousel/SubCarousel";
import "./Homepage.css";
const HomePage = () => {
  return (
    <div className="MyStyle">
      <MainCarousel />
      <SubCarousel />
    </div>
  );
};

export default HomePage;
