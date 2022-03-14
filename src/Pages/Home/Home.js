//STYLE CSS
import "./style.css";

//FILES AND IMAGES
import me from "../../Images/me.jfif";
import about_me_pic from "../../Images/about_me_pic.jpeg";
import Curriculum from "../../Images/Portfolio/CV_TrishaSaireneReal.pdf";

//TRANSITIONS AND ANIMATIONS
import { Typewriter } from "react-simple-typewriter";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import Slide from "react-reveal/Slide";

import React from "react";

function Home() {
  return (
    <>
      <Slide left>
        <div className="home">
          <div className="title">
            <div className="container-logo">
              <h3 className="hello">
                Hey, mi chiamo
                <Bounce top cascade delay={500} duration={1500}>
                  <span className="name">Trisha Sairene Real!</span>
                </Bounce>
              </h3>
              <div className="logo">
                <h1>TSreal</h1>
              </div>
            </div>

            <h3 className="my-profession">
              Sono una{" "}
              <span className="typing">
                <Typewriter
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={[
                    "Front-End Developer",
                    "React Developer",
                    "Graphic Designer",
                    "Web Designer",
                  ]}
                />
              </span>
            </h3>

            <p className="description">
              Una ragazza intraprendente con grande volontà di fare nuove
              esperienze. Socievole, riflessiva, sempre pronta ad ogni sfida e
              ama imparare. Esprime le proprie emozioni attraverso la creatività
              accompagnata anche dalla passione per l'arte, l'informatica e la
              tecnologia.
            </p>
            <RubberBand delay={900} duration={2000}>
              <a download href={Curriculum}>
                Download CV
              </a>
            </RubberBand>
          </div>
          <Fade right delay={700} duration={2000}>
            <div className="image">
              <img className="image01" src={me} alt="" />
              <img className="image02" src={about_me_pic} alt="" />
            </div>
          </Fade>
        </div>
      </Slide>
    </>
  );
}

export default Home;
