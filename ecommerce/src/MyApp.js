import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import HomePage from "./pages/HomePage";
import "./MyApp.css";
import Mycard from "./Customer/Components/HomeCarousel/Mycard";

function MyApp() {
  return (
    <div className="main">
      <div className="nav">
        <Navigation />
      </div>
      <div>
        <HomePage />
        <div>
          <Mycard />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
