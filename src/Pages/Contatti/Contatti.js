//STYLE CSS
import "./style.css";

//COMPONENTS
import { RowContatti } from "./RowContatti";

//FILES AND IMAGES
import frontCard from "../../Images/Portfolio/front_card.png";
import backCard from "../../Images/Portfolio/back_card.jpg";

//TRANSITIONS AND ANIMATIONS
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import React from "react";

function Contatti() {
  return (
    <Slide left>
      <div className="contatti">
        <h2>Contatti</h2>
        <div className="container">
          <h4>Contattami per ulteriori informazioni</h4>
          <h5 className="contactH5">NON ESITARE!</h5>
          <Fade top cascade delay={500}>
            <ul className="row_contatti">
              {RowContatti.map((val, key) => {
                return (
                  <li key={key}>
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    <div className="links">
                      <a href="tel:+393274073331">{val.phone}</a>
                    </div>
                    <div className="links">
                      <a href="mailto:trishasairenereal@gmail.com">
                        {val.email}
                      </a>
                    </div>
                    <div
                      className="links"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/graphic-web-trisha/",
                          "_blank"
                        )
                      }
                    >
                      {val.link}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Fade>

          <h4>Lavoriamo insieme!</h4>
          <h5 className="contactH5">
            "Great things in business are never done by one person. They're done
            by a team of people."
          </h5>
          <p className="cit">- Steve Jobs</p>

          <Fade top cascade delay={700}>
            <div className="BusinessCard">
              <img className="frontCard" src={frontCard} alt="" />
              <img className="backCard" src={backCard} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </Slide>
  );
}

export default Contatti;
