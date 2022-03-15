//STYLE CSS
import "./style.css";

//ICONS
import { FaCalendarAlt } from "react-icons/fa"; //CALENDARIO

//TRANSITIONS AND ANIMATIONS
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import React from "react";
import { Link } from "react-router-dom";

function ChiSono() {
  return (
    <>
      <Slide left>
        <div className="chi_sono">
          <h2>Chi Sono</h2>
          <div className="container">
            <LightSpeed right delay={500} duration={1500}>
              <h3>
                Mi chiamo <span>Trisha Sairene Real</span>
              </h3>
            </LightSpeed>
            <p>
              Adoro l'informatica e scoprire le varie forme tecnologiche in
              continuo sviluppo. Sono appassionata anche di arte e di qualsiasi
              cosa possa essere spontaneo e sopratutto creativo. Mi piace
              combinare queste mie due passioni e poterlo trasformare in lavoro!
            </p>
          </div>

          <div className="infos-container">
            <div className="leftContainer">
              <Zoom cascade delay={600}>
                <div className="info-item">
                  <p>
                    Data e Luogo di Nascita:
                    <span>11 Luglio 1999 , Milano</span>
                  </p>
                  <p>
                    Città di Residenza:<span>Cagliari, Sardegna</span>
                  </p>
                  <p>
                    Nazionalità:<span>Filippina</span>
                  </p>
                  <p>
                    Email:
                    <span>trishasairenereal@gmail.com</span>
                  </p>
                  <p>
                    Cellulare:<span>+39 327 407 3331</span>
                  </p>
                  <p>
                    Lingue:
                    <span>Italiano, Tagalog, Inglese, Spagnolo, Francese</span>
                  </p>
                </div>
              </Zoom>
            </div>
            <div className="rightContainer">
              <div className="skills">
                <div className="skill-items">
                  <h5>HTML/CSS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "90%" }}></div>
                    <div className="skill-percent">90%</div>
                  </div>
                </div>
                <div className="skill-items">
                  <h5>BOOTSTRAP</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "70%" }}></div>
                    <div className="skill-percent">70%</div>
                  </div>
                </div>
                <div className="skill-items">
                  <h5>JAVASCRIPT</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "75%" }}></div>
                    <div className="skill-percent">75%</div>
                  </div>
                </div>
                <div className="skill-items">
                  <h5>JQUERY</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "75%" }}></div>
                    <div className="skill-percent">75%</div>
                  </div>
                </div>
              </div>

              <div className="skills">
                <div className="skill-items">
                  <h5>REACT.JS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "65%" }}></div>
                    <div className="skill-percent">65%</div>
                  </div>
                </div>
                <div className="skill-items">
                  <h5>PHOTOSHOP</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "80%" }}></div>
                    <div className="skill-percent">80%</div>
                  </div>
                </div>
                <div className="skill-items">
                  <h5>ILLUSTRATOR</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "70%" }}></div>
                    <div className="skill-percent">70%</div>
                  </div>
                </div>
                <div className="skill-items">
                  <h5>INDESIGN</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "70%" }}></div>
                    <div className="skill-percent">70%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/contatti" className="lavoriamoInsieme">
            Lavoriamo Insieme!
          </Link>

          <Fade cascade>
            <div className="container_educ_esper">
              <div className="educ_esper">
                <h3>Educazione</h3>
                <div className="timeline-box">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                      <FaCalendarAlt className="icons" />{" "}
                      <span>Dicembre 2021</span>
                    </h3>
                    <h4 className="timeline-title">
                      Corso di React.js e Redux
                    </h4>
                    <p className="timeline-text">
                      Corso in cui ho imparato a creare interfacce Moderne,
                      Performanti e Responsive; la Teoria Base del Linguaggio
                      JSX; a creare Componenti di Interfaccia riutilizzabili; a
                      imparare ad utilizzare i principali React Hooks, imparato
                      ad utilizzare Redux; conoscere le Principali librerie
                      usate nell'ecosistema React; creare Hook Personalizzati
                    </p>
                  </div>

                  <div className="timeline-item" id="programmazione">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                      <FaCalendarAlt className="icons" />{" "}
                      <span>2020 - 2021</span>
                    </h3>
                    <h4 className="timeline-title">Programmazione Web</h4>
                    <div className="timeline-text">
                      Studio autodidatto in cui mi sono focalizzata sui
                      linguaggi principali dello sviluppo Front-End quali:
                      <ul>
                        <li>HTML</li>
                        <li>
                          CSS/CSS3:{" "}
                          <span>Media Queries, Flexbox, Grid, Animazioni</span>
                        </li>
                        <li>
                          JAVASCRIPT: <span>JQuery, Chiamate Ajax</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                      <FaCalendarAlt className="icons" />{" "}
                      <span>2019 - 2020</span>
                    </h3>
                    <h4 className="timeline-title">Graphic e Web Deisgn</h4>
                    <p className="timeline-text">
                      Corso in cui ho potuto acquisire tutte le nozioni
                      necessarie per la realizzazione di marchi, brand
                      identitty, grafiche per il web e per la stampa,
                      elaborazioni e composti digitali e tutto ciò che può
                      essere realizzato attraverso i software professionali più
                      noti del mercato come per esempio Adobe Photoshop, Adobe
                      Illustrator, Adobe InDesign ecc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="educ_esper">
                <h3>Esperienze Lavorative</h3>
                <div className="timeline-box">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                      <FaCalendarAlt className="icons" /> <span>2021</span>
                    </h3>
                    <h4 className="timeline-title">
                      Graphic Designer (freelancer)
                    </h4>
                    <p className="timeline-text">
                      Piccoli lavori su commissione come per esempio creazione
                      di inviti, modifiche di menù di pizzerie, creazione di
                      banner per profili social ecc.. Lavoretti grazie alle
                      quali ho potuto acquisire più esperienza e mettere sempre
                      in pratica e migliorare le mie competenze.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                      <FaCalendarAlt className="icons" />{" "}
                      <span>2018 - 2021</span>
                    </h3>
                    <h4 className="timeline-title">Educatrice Personale</h4>
                    <p className="timeline-text">
                      In seguito al diploma del liceo ho lavorato come
                      babysitter. Un lavoro in cui ho potuto acquisire
                      competenze come: la gestione degli orari, abilità di
                      sicurezza, strategia di disciplina, gestione dello stress,
                      pazienza, risoluzione dei problemi e conflitti,
                      pianificazione degli eventi, comunicazione e costruzione
                      di relazioni ecc... Tutte qualità fondamentali in ogni
                      ambito lavorativo.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                      <FaCalendarAlt className="icons" />{" "}
                      <span>Estate 2017</span>
                    </h3>
                    <h4 className="timeline-title">Cassiera/Cameriera</h4>
                    <p className="timeline-text">
                      Indispensabili in ogni settore lavorativo sono anche le
                      seguenti competenze che ho potuto acquisire lavorando come
                      cameriera: attitudine al servizio al cliente, capacità di
                      lavorare in team, gentilezza ed educazione, resistenza
                      alla fatica e allo stress, dinamismo e rapidità,
                      precisione e attenzione ai dettagli, flessibilità, serietà
                      ed onestà.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Slide>
    </>
  );
}

export default ChiSono;
