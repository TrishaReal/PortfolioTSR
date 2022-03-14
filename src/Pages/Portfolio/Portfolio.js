//STYLE CSS
import "./style.css";

//TRANSITIONS AND ANIMATIONS
import Slide from "react-reveal/Slide";

//Components
import Projects from "../../Components/Programmazione/Projects";
import GraphicProjects from "../../Components/GraphicDesign/GraphicProjects";

import React from "react";

function Portfolio() {
  return (
    <Slide left>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="container ">
          <h3>Progetti di Programmazione:</h3>
          <Projects />
        </div>

        <div className="container ">
          <h3>Progetti di Grafica:</h3>
          <GraphicProjects />
        </div>
      </div>
    </Slide>
  );
}

export default Portfolio;
