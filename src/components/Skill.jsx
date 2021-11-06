import React from "react";

function skill({ icon, name }) {
  return (
    <div className="skill-div">
      <p className="icon">{icon}</p>
      <p>{name}</p>
    </div>
  );
}

export default skill;
