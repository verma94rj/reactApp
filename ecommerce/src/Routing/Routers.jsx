import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Myfiestpage from "../pages/Myfiestpage";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/ambika" element={<Myfiestpage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
