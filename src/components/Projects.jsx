import React from "react";
import { Project } from "./exports";
import movie from "../images/naujapht.png";
import crypto from "../images/crypto.png";

function Projects() {
  return (
    <section className="projects-section" id="Projects">
      <div className="projects-wrap">
        <h2>.Projects(</h2>
        <Project
          img={movie}
          name="Movie's App"
          about="A project where users can Register, login, retrieve forgotten password, search for movies and their ratings from TMDB public API."
          technologies="React, Firebase, Bootstrap"
          gthhref="https://github.com/Edgaras98/Movies_App_REACT"
          livelink="https://test-pages1.web.app/login"
        />
        <Project
          img={crypto}
          name="Crypto tracker App"
          about="A project where users can track live data from Coingecko API about Crypto Prices, Volumes, Market-Cap "
          technologies="React, Firebase, Axios"
          gthhref="https://github.com/Edgaras98/Crypto_price_tracker_APP_REACT"
          livelink="https://crypto-tracker-273e0.web.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
