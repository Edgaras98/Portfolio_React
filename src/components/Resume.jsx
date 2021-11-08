import React, { useState } from "react";
import { Skill } from "./exports";
import agile from "../images/agile.png";
function Resume() {
  const [model, setModel] = useState(false);
  const [tempingImgSrc, setTempingImgSrc] = useState("");
  const getImg = (agile) => {
    setTempingImgSrc(agile);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model closed"}>
        <img src={tempingImgSrc} />
        <i class="fas fa-times" onClick={() => setModel(false)}></i>
      </div>
      <section className="resume-section" id="Resume">
        <div className="resume-div">
          <h2>.Resume(</h2>
          <h3>UI skills</h3>
          <div className="software-div">
            <Skill icon={<i class="fab fa-html5"></i>} name="HTML" />
            <Skill icon={<i class="fab fa-css3-alt"></i>} name="CSS" />
            <Skill icon={<i class="fab fa-sass"></i>} name="SASS" />
          </div>
          <h3>JavaScript Frameworks / Libraries</h3>
          <div className="software-div">
            <Skill icon={<i class="fab fa-js"></i>} name="JavaScript" />
            <Skill icon={<i class="fab fa-node"></i>} name="Node JS" />
            <Skill icon={<i class="fab fa-react"></i>} name="React" />
          </div>
          <h3>CSS frameworks</h3>
          <div className="software-div">
            <Skill icon={<i class="fab fa-bootstrap"></i>} name="Bootstrap" />
            <Skill icon={<i class="fab fa-maxcdn"></i>} name="Material-UI" />
            <Skill icon={<i class="fas fa-file-code"></i>} name="Water" />
            <Skill icon={<i class="fas fa-wind"></i>} name="Tailwind" />
          </div>
          <h3>Development platforms / Databases</h3>
          <div className="software-div">
            <Skill
              icon={<i class="fab fa-digital-ocean"></i>}
              name="Digital Ocean"
            />
            <Skill icon={<i class="fas fa-fire"></i>} name="Firebase" />
            <Skill icon={<i class="fab fa-envira"></i>} name="Mongo DB" />
          </div>
          <h3>Database management systems</h3>
          <div className="software-div">
            <Skill icon={<i class="fas fa-database"></i>} name="SQL" />
            <Skill icon={<i class="fas fa-database"></i>} name="NoSQL" />
          </div>
          <h3>Version control system</h3>
          <div className="software-1-div">
            <Skill icon={<i class="fab fa-git-square"></i>} name="Git" />
          </div>
          <h3>Design</h3>
          <div className="software-1-div">
            <Skill icon={<i class="fab fa-figma"></i>} name="Figma" />
          </div>
        </div>
        <div className="education">
          <h2>Education in Web Development</h2>
          <h3>Code Academy, Vilnius</h3>
          <h4>500-hour Full-stack Javascript Development course</h4>
          <ul>
            <li>
              Firm understanding of CSS/JS selector syntax, responsive design,
              advanced layout techniques
            </li>
            <li>Dynamic document object model (DOM) manipulation</li>
            <li>Asynchronous programming (promises, callbacks, listeners)</li>
            <li>NodeJS integration with express.js, routing, CRUD methods</li>
            <li>
              User register/login, password hashing, JWT token creation,
              middleware functions integration
            </li>
            <li>
              React: JSX, components, props, prop types, state, lifecycle
              methods, hooks
            </li>
          </ul>
          <div className="line"></div>
          <h3>Danske Uni, Vilnius</h3>
          <h4>"Agile in Everyday Practise" Module Certificate</h4>
          <ul>
            <li>Empirical Way of Working</li>
            <li>Planning in the Agile Way</li>
            <li>Dependency Management</li>
            <li>Agile Client Relationship</li>
            <li>Continuous Improvement</li>
          </ul>

          <h2>Certificates</h2>
          <p>* Click for full Size</p>
          <img
            src={agile}
            alt="agile certificate"
            id="agile-certificate"
            onClick={() => getImg(agile)}
          ></img>
        </div>
      </section>
    </>
  );
}

export default Resume;
