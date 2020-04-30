import React from "react";
import Pic from "../../images/HeadSnipePic.jpg";

function Home() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div className="banner-text">
        <h1>Full Stack Web Developer</h1>

        <img src={Pic} alt="avatar" style={{ height: "250px" }} />

        <p>
          HTML/CSS | JavaScript | C++ | Java | ReactJS | NodeJS | Express |
          MongoDB | mySQL | Bootstrap | Materialize | Bulma
        </p>
      </div>

      <div className="banner-text">
        <p>
          US Air Force veteran turned Full Stack Web Developer hoping to use
          experience and logic acquired over the years to help create
          technologies and applications that will change the world.
        </p>
      </div>
    </div>
  );
}

export default Home;
