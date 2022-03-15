import React, { useState } from "react";
import "./style.css";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";

//ICONS
import { AiFillBehanceCircle } from "react-icons/ai"; //BehanceIcon
import { AiFillGithub } from "react-icons/ai"; //GithubIcon
import { AiFillLinkedin } from "react-icons/ai"; //LinkedInIcon

function Sidebar() {
  const [isOpen, setIsOpen] = useState();

  //Function to open and close the sidebar on tablet or mobile size.
  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`Sidebar ${isOpen ? "open" : ""}`}>
        <div
          className={`nav-toggler ${isOpen ? "open" : ""}`}
          onClick={openSidebar}
        >
          <span className="hamburger"></span>
        </div>
        <div className="wrapper">
          <div className="logo ">
            <h1>TSreal</h1>
          </div>
          <ul className="SidebarList">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink
                    onClick={openSidebar}
                    to={item.path}
                    exact={true}
                    // className={(isActive) =>
                    //   "nav-link" + (!isActive ? " unselected" : "")
                    // }
                    activeClassName="active-link"
                  >
                    {item.icon} <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="social-icons">
            <AiFillBehanceCircle
              className="single-icon"
              onClick={() =>
                window.open(
                  "https://www.behance.net/trishasairenereal",
                  "_blank"
                )
              }
            />
            <AiFillGithub
              className="single-icon"
              onClick={() =>
                window.open("https://github.com/TrishaReal", "_blank")
              }
            />
            <AiFillLinkedin
              className="single-icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/graphic-web-trisha/",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
