import React from "react";

function Contact() {
  return (
    <div>
      <h1>Connect With Me</h1>
      <a
        className="Links"
        href="https://docs.google.com/document/d/1fYaB98WEzAw_bN5ij4zQA_2C_x4cBsbuYEoVa0zYvd4/edit?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
      >
        Checkout My Network
      </a>

      <a
        className="Links"
        href="mailto:cortez.francisco.j.2009@gmail.com?subject:subject text"
        target="_blank"
        rel="noreferrer noopener"
      >
        Send Me an Email
      </a>

      <a
        className="Links"
        href="https://github.com/Swordspeare09"
        target="_blank"
        rel="noreferrer noopener"
      >
        View the Source Code
      </a>
    </div>
  );
}

export default Contact;
