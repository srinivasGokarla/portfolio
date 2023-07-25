import React from "react";
import "./Project.css";
import Image from "./img/nykaa.png";
import Img from "./img/healthkart.png";
import Ima from "./img/kickstarter.png"


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
                href="https://srinivasgokarla.github.io/Nyka_clone/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/srinivasGokarla/Nyka_clone"
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
              About
This project is a clone of (HealthKart.com) which is India’s largest online health & fitness store for men and women. Shop online from the latest collections of health the best brands.
              </p>
              <p>
                Teck-Stack: HTML | CSS | Javascript | Nodejs | MongoDB | ExpressJs
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
            <div className="one">
              <img src={Ima} alt="project" />
              <h2>Clone of Kickstarter</h2>
              <p>
              About
              Kickstarter campaigns make ideas into reality. It’s where creators share new visions for creative work with the communities that will come together to fund them.
              </p>
              <p>
                Teck-Stack: HTML | CSS | Javascript | Nodejs | MongoDB | ExpressJs | Reactjs
              </p>

              <a
                href="https://kickstarterclone0.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/rv-vikram/Kickstarter_Clone"
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
