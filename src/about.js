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
          Meticulous Full Stack Web Developer dedicated to developing clean and scalable code.
          Passionate about creating the wonderful digital and overall great user experience.Effective Communicator and a learning enthusiast with a proactive attitude ready to take up tasks with a commitment to professionalism.
            <br></br>
            Strong in design and integration with intuitive problem-solving skills.
            Passionate about implementing and launching new projects. Looking to
           start a career as a Full-Stack web developer with a reputed firm driven by
            technology.
            </p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
