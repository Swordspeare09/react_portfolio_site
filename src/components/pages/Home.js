import React from "react";
import Pic from "../../images/HeadSnipePic.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
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
        zIndex: "-1",
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
          technologies and applications that will change the world.
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
      </div>
    </div>
  );
}

export default Home;
