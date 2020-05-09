import React from "react";
import Pic from "../../images/HeadSnipePic.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { teal } from "@material-ui/core/colors";
import Background from "../../images/CityPic.jpg";

import "../../CSS/Styles.css";


function Home() {
  return (
    <div
      style={{
        height: "120vh",
        width: "100%",
        margin: "auto",
        backgroundImage: `url(${Background})`,
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text">
        <h1>Full Stack Web Developer</h1>
      </div>

      <img className="headSnipe" src={Pic} alt="avatar" />

      <div className="text">
        <p>
          HTML/CSS | JavaScript | C++ | Java | ReactJS | NodeJS | Express |
          MongoDB | mySQL | Bootstrap | Materialize | Bulma
        </p>
        <p>
          US Air Force veteran turned Full Stack Web Developer hoping to use
          experience and logic acquired over the years to help create
          technologies and applications that will change the world. Feel Free to grab a copy of my resume below.
        </p>
      </div>
      <div className="Social-Links">
        <a
          href="https://www.linkedin.com/in/franciscojcortez2009/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon style={{ fontSize: 80, color: teal[300] }} />
        </a>
        <a
          href="https://github.com/Swordspeare09"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon style={{ fontSize: 80, color: teal[300] }} />
        </a>
        <a
          href="https://docs.google.com/document/d/1jP2w857C9DyMrXx9TpHXM5TKaH-Zq811vDtYHNnkqw0/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AssignmentIcon style={{ fontSize: 80, color: teal[300] }} />
        </a>
      </div>
    </div>
  );
}

export default Home;
