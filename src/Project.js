import React from "react";
import "./Project.css";
import Image from "./img/nykaa.png";
import Img from "./img/healthkart.png";


export default function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-section">
          <div className="center">
            <div className="one">
              <img src={Image} alt="project" />
              <h2>Clone of Nykaa</h2>
              <p>
              Nykaa is India’s leading beauty and fashion platform that offers
              a comprehensive range of cosmetics, engagement prodducts and expert assistance.
              </p>
              <p>Teck-Stack: HTML | CSS | Javascript</p>

              <a
                href="https://srinu217.github.io/nykaa/ "
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/srinu217/nykaa"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub Link</button>
              </a>
            </div>
           
            <div className="one">
              <img src={Img} alt="project" />
              <h2>Clone of HealthKart</h2>
              <p>
              HealthKart is India’s leading nutrition and supplement platform 
              that offers a comprehensive range of products, engagement tools.
              </p>
              <p>
                Teck-Stack: HTML | CSS | Javascript | Nodejs | MongoDB | Express
              </p>

              <a
                href="https://hemantjayas.github.io/HealthKart/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/Dhruvkagrawal/HealtKart.com-Clone"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
