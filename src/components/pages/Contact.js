import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import { teal} from "@material-ui/core/colors";
import Background from "../../images/CityPic.jpg";
import AssignmentIcon from "@material-ui/icons/Assignment";

function Contact() {
  return (
    <div
      style={{
        height: "110vh",
        width: "100%",
        margin: "auto",
        backgroundImage: `url(${Background})`,
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
      }}
    >
      <h1 className="text2">Connect With Me</h1>
      <div className="Social-Links2">
        <a
          href="https://www.linkedin.com/in/franciscojcortez2009/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon style={{ fontSize: 100, color: teal[300] }} />
        </a>
      </div>

      <div className="Social-Links2">
        <a
          href="mailto:cortez.francisco.j.2009@gmail.com?subject:subject text"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MailOutlineIcon style={{ fontSize: 100, color: teal[300] }} />
        </a>
      </div>

      <div className="Social-Links2">
        <a
          href="https://github.com/Swordspeare09"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon style={{ fontSize: 100, color: teal[300] }} />
        </a>
      </div>

      <div className="Social-Links2">
        <a
          href="https://docs.google.com/document/d/1jP2w857C9DyMrXx9TpHXM5TKaH-Zq811vDtYHNnkqw0/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AssignmentIcon style={{ fontSize: 100, color: teal[300] }} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
