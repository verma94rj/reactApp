import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import HomePage from "./pages/HomePage";
//import DemoCarousel from './Customer/Components/DemoCarousel';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Myfiestpage from "./pages/Myfiestpage";
//import Mynav from "./Customer/Components/Navigation/Mynav";
//import Routers from "./Routing/Routers";
function MyApp() {
  return (
    <div className="main">
      <div className="nav">
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default MyApp;
