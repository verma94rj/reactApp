import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyApp from "./MyApp";
import Myfiestpage from "./pages/Myfiestpage";

//import Routers from "./Routing/Routers";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MyApp />} />
        <Route exact path="/ambika" element={<Myfiestpage />} />
      </Routes>
    </Router>
  );
}

export default App;
