import React from "react";

const Navigation = () => {
  return (
    <nav className="hamnav">
      <label for="hamburg">☰</label>
      <input type="checkbox" className="hamburger" id="hamburg" />
      <div className="name-div">
        <p>
          .Edgaras<span>Stepanovas</span>
        </p>
      </div>
      <div className="hamitems">
        <a href="#About">.AboutMe()</a>
        <a href="#Resume">.Resume()</a>
        <a href="#Projects">.Projects()</a>
        <a href="#Contacts">.Contacts()</a>
      </div>
    </nav>
  );
};

export default Navigation;
