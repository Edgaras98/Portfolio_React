import React from "react";
import { Project } from "./exports";
import movie from "../images/movies.png";

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
      </div>
    </section>
  );
}

export default Projects;
