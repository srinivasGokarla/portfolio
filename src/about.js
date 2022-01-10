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
            Strong in design and integration with intuitive problem-solving skills.
Passionate about implementing and launching new projects. Looking to
start a career as a Full-Stack web developer with a reputed firm driven by
technology
            </p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
