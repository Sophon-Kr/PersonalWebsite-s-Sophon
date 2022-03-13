import React from "react";
import { connect } from "react-redux";
import "../style/skills.css";
import {
  SiAdobephotoshop,
  SiPython,
  SiAdobeillustrator,
  SiAdobexd,
  SiCplusplus,
  SiC,
  SiMicrosoftoffice,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { RiComputerFill, RiCodeBoxFill } from "react-icons/ri";

const otherSkills = [
  {
    id: 1,
    text: (
      <span className="center-text">
        <div>Python</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiPython className="size-icon"></SiPython>
      </div>
    ),
  },
  {
    id: 2,
    text: (
      <span className="center-text">
        <div>Java</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <FaJava className="size-icon"></FaJava>
      </div>
    ),
  },
  {
    id: 3,
    text: (
      <span className="center-text">
        <div>C</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiC className="size-icon"></SiC>
      </div>
    ),
  },
  {
    id: 4,
    text: (
      <span className="center-text">
        <div>C++</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiCplusplus className="size-icon"></SiCplusplus>
      </div>
    ),
  },
  {
    id: 5,
    text: (
      <span className="center-text">
        <div>Adobe</div>
        <div>Photoshop</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiAdobephotoshop className="size-icon"></SiAdobephotoshop>
      </div>
    ),
  },
  {
    id: 5,
    text: (
      <span className="center-text">
        <div>Adobe XD</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiAdobexd className="size-icon"></SiAdobexd>
      </div>
    ),
  },
  {
    id: 5,
    text: (
      <span className="center-text">
        <div>Adobe</div>
        <div>Illustrator</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiAdobeillustrator className="size-icon"></SiAdobeillustrator>
      </div>
    ),
  },
  {
    id: 5,
    text: (
      <span className="center-text">
        <div>MS office</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiMicrosoftoffice className="size-icon"></SiMicrosoftoffice>
      </div>
    ),
  },
];

export const Skills = (props) => {
  return (
    <div className="skills" id="skills">
      <div className="maincontainer-skills">
        <div className="header-skills-1">Web Skills </div>
        <div className="container-skills-web">
          <div className="card-skills">
            <div className="header-text-skills">
              <FaDatabase></FaDatabase>
              <span
                style={{
                  marginLeft: "15px",
                }}
              >
                Database PostgreSQL, MongoDB SQL,
              </span>
            </div>
          </div>
          <div className="card-skills">
            <div className="header-text-skills">
              <RiComputerFill></RiComputerFill>
              <span
                style={{
                  marginLeft: "15px",
                }}
              >
                Front-End JavaScript React.js Vue.js Material-UI,
                Bootstrap,HTML, CSS,
              </span>
            </div>
          </div>
          <div className="card-skills">
            <div className="header-text-skills">
              <RiCodeBoxFill></RiCodeBoxFill>
              <span
                style={{
                  marginLeft: "15px",
                }}
              >
                Back-End
                <br />
                Node.js
              </span>
            </div>
          </div>
        </div>
        <div className="header-skills-2">Programing and Other Skills </div>
        <div className="container-skills-other">
          {otherSkills.map((data) => (
            <div className="item-skills" key={data.id}>
              {data.icon}
              {data.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
