import React from "react";
import img from "../images/me.jpg";

function AboutMe() {
  return (
    <section className="about-me-section" id="About">
      <div className="about-me-div">
        <h2>.About me(</h2>
        <p>
          My name is Edgaras and I am a recent graduate of Code Academy Vilnius.
          I am looking forward to utilise my skills and desire to learn more and
          especially to build a career in programming and development.
        </p>
        <span>)</span>
      </div>
      <div className="photo-div">
        <img src={img}></img>
      </div>
    </section>
  );
}

export default AboutMe;
