import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RightSide from "./Components/RightSide/RightSide";

function App() {
  return (
    <>
      <Router>
        <RightSide />
      </Router>
    </>
  );
}

export default App;
