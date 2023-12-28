import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyApp from "./MyApp";
import Myfiestpage from "./pages/Myfiestpage";
import Default from "./pages/Default";
import Abhishekpage from "./pages/Abhishekpage";

//import Routers from "./Routing/Routers";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MyApp />} />
        <Route exact path="/ambika" element={<Myfiestpage />} />
        <Route exact path="/abhishek" element={<Abhishekpage />} />
        <Route exact path="/default" element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;
