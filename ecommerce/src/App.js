import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import HomePage from "./Customer/Components/Pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Customer/Components/Pages/About/About";
import Home from "./Customer/Components/Pages/About/Home";
import Contact from "./Customer/Components/Pages/About/Contact";
import { useState, useEffect, useRef } from "react";

function App() {
  // const dataObject = {
  //   key1: "Ecom",
  //   key2: "Ecommerce Shopping",
  //   key3: "Help me ples",
  // };
  const [data, setData] = useState({
    key1: "English",
    key2: "value2",
    key3: "value3",
  });

  const [prevValue, setPrevValue] = useState({
    key1: "Hindi",
    key2: "",
    key3: "",
  });

  const [toggle, setToggle] = useState(true);

  const updatePrevData = (newPrevData) => {
    // Update the state in the parent component
    setPrevValue({ ...prevValue, ...newPrevData });
    console.log(newPrevData.key1, "new value child");
  };

  const updateData = (newData) => {
    // Update the state in the parent component
    setData({ ...data, ...newData });
    console.log(newData.key1, "new value parent");
  };
  return (
    // <Router>
    <div className="main">
      <div className="navbar">
        <Navigation
          toggle={toggle}
          setToggle={setToggle}
          data={data}
          prevData={prevValue}
          setPrevData={updatePrevData}
          updateData={updateData}
        ></Navigation>
      </div>

      <div className="home">
        <HomePage></HomePage>
      </div>
    </div>
    //   <Routes>
    //     <Route exact path="" element={<HomePage />}></Route>
    //     <Route path="/contact" element={<Contact />}></Route>
    //     <Route path="/about" element={<About />}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
