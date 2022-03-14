//STYLE CSS
import "./style.css";
import ColorItem from "./ColorItem";

//ICONS
import { BsFillMoonFill } from "react-icons/bs"; //MOON
import { BsFillSunFill } from "react-icons/bs"; //SUN
import { AiFillSetting } from "react-icons/ai"; //SETTING

//COMPONENT PAGES
import Sidebar from "../Sidebar/Sidebar";
import Home from "../../Pages/Home/Home";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import ChiSono from "../../Pages/ChiSono/ChiSono";
import Contatti from "../../Pages/Contatti/Contatti";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function RightSide() {
  //Dark and Light Mode
  const [theme, setTheme] = useState(getFromLocalStorage() || "light-mode");

  //Dark and Light Mode
  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  const icon = theme === "light-mode" ? <BsFillMoonFill /> : <BsFillSunFill />;

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  //Color Theme Table Hide n Show.
  const [isShow, setIsShow] = useState();

  const showToggle = () => {
    setIsShow(!isShow);
  };

  const closeToggle = () => {
    if (isShow) {
      setIsShow(false);
    }
  };

  //Set Color Theme on Click
  const colors = ["#ac87b3", "#ED9E66", "#37b182", "#1E5192", "#da5268"];

  //UseEffect to save the chosen color to the local storage. (così al riavvio del browser rimane al colore scelto)
  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    setTema(currentColor);
  }, []);

  const setTema = (color) => {
    document.documentElement.style.setProperty("--skin-color", color);
  };

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--skin-color");

    setTema(currentColor);
    localStorage.setItem("color", currentColor);
  };

  return (
    <Router>
      <Sidebar />
      <div className="pages" onClick={closeToggle}>
        <div className={`style-switcher ${isShow ? "show" : ""}`}>
          <button className="iconMoonSun" onClick={cambiaTema}>
            {icon}
          </button>
          <AiFillSetting className="settingIcon" onClick={showToggle} />
          <h4>Temi Colori</h4>
          <div className="colorsTheme" onClick={showToggle}>
            {colors.map((color, idx) => (
              <ColorItem key={idx} setColor={setColor} color={color} />
            ))}
          </div>
        </div>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/chi_sono" component={ChiSono} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contatti" component={Contatti} />
        </Switch>
      </div>
    </Router>
  );
}

export default RightSide;
