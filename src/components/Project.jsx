import React from "react";

function Project({ name, img, about, technologies, gthhref, livelink }) {
  return (
    <div className="project-div">
      <div className="project-img-div">
      <img src={img} />
      </div>
      <div className="project-info-div">
        <h3>{name}</h3>
        <p>{about}</p>
        <p>
          <strong>Technologies used: </strong>
          {technologies}
        </p>
        <div className="sites-links">
          <i
            class="fab fa-github"
            style={{ fontSize: "1.5rem", color: "white" }}
          ></i>
          <a target="_blank" href={gthhref}>
            Github Code Link
          </a>
        </div>
        <div className="sites-links">
          <i
            class="fas fa-laptop-code"
            style={{ fontSize: "1.5rem", color: "white" }}
          ></i>
          <a target="_blank" href={livelink}>
            Live site Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
