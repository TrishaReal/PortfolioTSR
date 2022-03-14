//STYLE CSS
import "./style.css";

//TRANSITIONS AND ANIMATIONS
import Flip from "react-reveal/Flip";

//IMAGES AND FILES
import kundera from "../../Images/Portfolio/grafica/kundera.jpg";
import kobe from "../../Images/Portfolio/grafica/kobe.jpg";
import gaga from "../../Images/Portfolio/grafica/gaga.jpg";
import red from "../../Images/Portfolio/grafica/red.jpg";
import lancome from "../../Images/Portfolio/grafica/lancome.jpg";
import areila from "../../Images/Portfolio/grafica/areila.jpg";

import React from "react";

function GraphicProjects() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="graphic">
      <Flip top cascade delay={400} duration={2000}>
        <div className="row-container">
          <div
            className="graphic-item"
            onClick={() =>
              openInNewTab(
                "https://www.behance.net/gallery/139222527/Linsostenibile-leggerezza-dellessere-Milan-Kundera"
              )
            }
          >
            <div className="graphic-item-inner">
              <img src={kundera} alt="" />
              <div className="overlay">
                <p>Progetto di Grafica Editoriale(Libri)</p>
              </div>
              <p className="didascalia">
                Progetto di Grafica Editoriale(Libri)
              </p>
            </div>
          </div>

          <div
            className="graphic-item"
            onClick={() =>
              openInNewTab(
                "https://www.behance.net/gallery/139229395/Kobe-Bryant-Through-The-Years"
              )
            }
          >
            <div className="graphic-item-inner">
              <img src={kobe} alt="" />
              <div className="overlay">
                <p>Progetto di Grafica Editoriale(creazione di riviste)</p>
              </div>
              <p className="didascalia">
                Progetto di Grafica Editoriale(creazione di riviste)
              </p>
            </div>
          </div>

          <div
            className="graphic-item"
            onClick={() =>
              openInNewTab(
                "https://www.behance.net/gallery/139230133/Vanity-Fair-Lady-Gaga"
              )
            }
          >
            <div className="graphic-item-inner">
              <img src={gaga} alt="" />
              <div className="overlay">
                <p>Progetto di Grafica Editoriale(creazione di riviste)</p>
              </div>
              <p className="didascalia">
                Progetto di Grafica Editoriale(creazione di riviste)
              </p>
            </div>
          </div>

          <div
            className="graphic-item"
            onClick={() =>
              openInNewTab(
                "https://www.behance.net/gallery/139230679/Franca-Rame-Locandina-Evento"
              )
            }
          >
            <div className="graphic-item-inner">
              <img src={red} alt="" />
              <div className="overlay">
                <p>
                  Progetto di Grafica Pubblicitaria (creazione di un volantino
                  pubblicitario)
                </p>
              </div>
              <p className="didascalia">
                Progetto di Grafica Pubblicitaria (creazione di un volantino
                pubblicitario)
              </p>
            </div>
          </div>

          <div
            className="graphic-item"
            onClick={() =>
              openInNewTab(
                "https://www.behance.net/gallery/139230857/Lancome-Paris-La-Vie-Est-Belle"
              )
            }
          >
            <div className="graphic-item-inner">
              <img src={lancome} alt="" />
              <div className="overlay">
                <p>
                  Progetto di Grafica Pubblicitaria (creazione di un poster
                  pubblicitario)
                </p>
              </div>
              <p className="didascalia">
                Progetto di Grafica Pubblicitaria (creazione di un poster
                pubblicitario)
              </p>
            </div>
          </div>

          <div
            className="graphic-item"
            onClick={() =>
              openInNewTab(
                "https://www.behance.net/gallery/139231125/Areila-Azienda-Agricola-%28Brand-Identity%29"
              )
            }
          >
            <div className="graphic-item-inner">
              <img src={areila} alt="" />
              <div className="overlay">
                <p>
                  Progetto di Brand identity e Marketing (realizzazione di un
                  logo/marchio per un'industria agricola)
                </p>
              </div>
              <p className="didascalia">
                Progetto di Brand identity e Marketing (realizzazione di un
                logo/marchio per un'industria agricola)
              </p>
            </div>
          </div>
        </div>
      </Flip>
    </div>
  );
}

export default GraphicProjects;
