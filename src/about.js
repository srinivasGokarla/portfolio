import React from "react";
import Image from "./img/photo.jpg";

import "./about.css";
export default function About() {
  return (
    <div>
      <div className="about-bg" id="about">
        <h1>About</h1>

        <div className="about-section">
          <div className="profile-img">
            <img src={Image} alt="img" />
          </div>

          <div className="para">
            <p>
            A Passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai school’s
            intensive and immersive learning.Look forward to joining a company where I will be able to contribute 
            towards individual and company growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
