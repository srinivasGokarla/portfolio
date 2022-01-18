import React from "react";
import "./Contact.css";
export default function Contacts() {
  return (
    <div>
      <div className="contacts" id="Contact">
        <h1>Contact Me</h1>
        <div className="center-div">

        <div className="phone">
          <i className="fa fa-phone"> </i>

          <a tel="+91 8790844853" target="_blank" rel="noreferrer">
            +91 8790844853
          </a>
        </div>
        <div className="phone">
            <i className="fa fa-envelope-o"></i>
            <a href="mailto: srinivasgokarla@gmail.com">
              srinivasgokarla@gmail.com
            </a>
          </div>
          </div>

        <a href="https://github.com/srinivasGokarla" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gokarla-srinivas-38b912199/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
       
        <a
          href="https://twitter.com/GokarlaSrinivas"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a href="mailto: srinivasgokarla@gmail.com">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
}
