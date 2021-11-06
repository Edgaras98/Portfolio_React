import React from "react";

function Links() {
  return (
    <>
      <div className="links">
        <a className="links-a" href="https://github.com/Edgaras98">
          <i class="fab fa-github-square"></i>
        </a>
        <a
          className="links-a"
          href="https://www.linkedin.com/in/edgaras-stepanovas-7a9839202"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          className="links-a"
          target="_blank"
          href="https://drive.google.com/file/d/1FLKez3bLARCeo38sHEd2PLC6aS-V3RsU/view"
        >
          Resume
        </a>
      </div>

      <div className="chevron">
        <a href="#About">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </>
  );
}

export default Links;
