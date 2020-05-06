import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import { teal} from "@material-ui/core/colors";

function Contact() {
  return (
    <div>
      <h1>Connect With Me</h1>
      <div>
        <a
          className="Social-Links"
          href="https://www.linkedin.com/in/franciscojcortez2009/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon style={{ fontSize: 80, color: teal[300]}} />
        </a>
      </div>

      <div>
        <a
          className="Social-Links"
          href="mailto:cortez.francisco.j.2009@gmail.com?subject:subject text"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MailOutlineIcon style={{ fontSize: 80, color: teal[300] }} />
        </a>
      </div>

      <div>
        <a
          className="Social-Links"
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

export default Contact;
