//STYLE CSS
import "./style.css";

//ICONS
import { AiFillGithub } from "react-icons/ai"; //GithubIcon
import { MdOutlineOpenInBrowser } from "react-icons/md"; //OpenWindowSite

//TRANSITIONS AND ANIMATIONS
import Flip from "react-reveal/Flip";

//IMAGES AND FILES
import toDoList from "../../Images/Portfolio/sviluppo/toDoList.png";
import parallaxWeb from "../../Images/Portfolio/sviluppo/parallaxWeb.png";
import ytImage from "../../Images/Portfolio/sviluppo/youtube.png";
import whatsappImage from "../../Images/Portfolio/sviluppo/whatsapp.png";
import vacation from "../../Images/Portfolio/sviluppo/vacationList.png";
import colors from "../../Images/Portfolio/sviluppo/colors.png";
import iceCreamWeb from "../../Images/Portfolio/sviluppo/iceCreamWeb.png";
import wkImage from "../../Images/Portfolio/sviluppo/wikidrink.png";
import pickMe from "../../Images/Portfolio/sviluppo/pickMe.png";

import React from "react";

function Projects() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="development">
      <Flip left cascade delay={500} duration={2000}>
        <div className="row-container">
          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={parallaxWeb} alt="" />
              <div className="overlay">
                <p>Parallax Website con HTML e CSS</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/parallax-website"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://first-parallax-website.netlify.app/"
                      )
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>Parallax Website con HTML e CSS</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/parallax-website"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://first-parallax-website.netlify.app/"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={toDoList} alt="" />
              <div className="overlay">
                <p>To Do List con HTML, CSS E JS</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/Simple-ToDoList"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://my-first-to-do-list.netlify.app/")
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>To Do List con HTML, CSS E JS</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/Simple-ToDoList"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://my-first-to-do-list.netlify.app/")
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={ytImage} alt="" />
              <div className="overlay">
                <p>Youtube Web con HTML e CSS</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/Youtube-Replica"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://youtube-replica-base.netlify.app/")
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>Youtube Web con HTML e CSS</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/Youtube-Replica"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://youtube-replica-base.netlify.app/")
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={whatsappImage} alt="" />
              <div className="overlay">
                <p>Whatsapp: HTML, CSS e JAVASCPRIT</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/WhatsappWeb-Replica"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://whatsapp-web-replica.netlify.app/#")
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>Whatsapp: HTML, CSS e JAVASCPRIT</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/WhatsappWeb-Replica"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://whatsapp-web-replica.netlify.app/#")
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={vacation} alt="" />
              <div className="overlay">
                <p>Slider Pacchetti Vacanze con React.js</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://github.com/TrishaReal/ListaVacanza")
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://lista-vacanza.netlify.app/")
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>Slider Pacchetti Vacanze con React.js</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://github.com/TrishaReal/ListaVacanza")
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://lista-vacanza.netlify.app/")
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={colors} alt="" />
              <div className="overlay">
                <p>Color-Grading con React.js</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://github.com/TrishaReal/ColorGrading")
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        " https://myfirst-color-grading-website.netlify.app/"
                      )
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>Color-Grading con React.js</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://github.com/TrishaReal/ColorGrading")
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        " https://myfirst-color-grading-website.netlify.app/"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={iceCreamWeb} alt="" />
              <div className="overlay">
                <p>Menu di Gelati divise per categorie con React.js</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/IceCreamMenuSite"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://ice-cream-menu-site.netlify.app/")
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>Menu di Gelati divise per categorie con React.js</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/IceCreamMenuSite"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://ice-cream-menu-site.netlify.app/")
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={wkImage} alt="" />
              <div className="overlay">
                <p>Il mio primo sito creato con React.js</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/WikiDrink-Website"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://wiki-drink-website.netlify.app/")
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>Il mio primo sito creato con React.js</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/TrishaReal/WikiDrink-Website"
                      )
                    }
                  />
                  <MdOutlineOpenInBrowser
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://wiki-drink-website.netlify.app/")
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sviluppo-item">
            <div className="sviluppo-item-inner">
              <img src={pickMe} alt="" />
              <div className="overlay">
                <p>Pick-Me Website con React.js e Redux</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://github.com/TrishaReal/PickMe-REDUX")
                    }
                  />
                </div>
              </div>
              <div className="didascalia">
                <p>Pick-Me Website con React.js e Redux</p>
                <div className="icons-container">
                  <AiFillGithub
                    className="icon"
                    onClick={() =>
                      openInNewTab("https://github.com/TrishaReal/PickMe-REDUX")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flip>
    </div>
  );
}

export default Projects;
