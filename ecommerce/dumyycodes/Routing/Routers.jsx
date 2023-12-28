import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Myfiestpage from "../pages/Myfiestpage";
import Abhishekpage from "../pages/Abhishekpage";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/ambika" element={<Myfiestpage />} />
        <Route exact path="/abhishek" element={<Abhishekpage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
