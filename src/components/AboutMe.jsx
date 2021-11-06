import React from "react";
import img from "../images/me.jpg";

function AboutMe() {
  return (
    <section className="about-me-section" id="About">
      <div className="about-me-div">
        <h2>.About me(</h2>
        <p>
          My name is Edgaras and I am a recent graduate of Code Academy Vilnius.
          I am looking to utilise my skills and desire to learn more and
          especially to build a career in programming and development. Mainly
          I'm working with technologies such as Javascript, Node.js, React,
          MySQL, GIT, HMTL/CSS/SCSS, as well creating designs using Figma and
          keeping an eye for good user interface.
        </p>
        <p>
          Apart that, I am open-minded, enthusiastic, creative person along with
          problem solving mindset, human-centered approach in all life aspects,
          IT industry lover 🤓 Looking forward to kick start my career in Web
          development!
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
