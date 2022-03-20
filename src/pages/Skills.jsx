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
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiMaterialui,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava, FaReact, FaVuejs } from "react-icons/fa";
import { RiComputerFill, RiCodeBoxFill } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";
// import { SiPostgresql } from "react-icons/im";

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
        <div className="header-skills-1">
          <span className="w-header">W</span>eb Skills{" "}
        </div>
        <div className="container-skills-web">
          <div className="card-skills">
            <div
              className="header-text-skills"
              style={{ marginBottom: "20px" }}
            >
              <ImDatabase
                style={{ width: "70px", height: "auto", color: "#789174" }}
              ></ImDatabase>
              <div style={{ color: "#789174" }}>Database</div>
            </div>
            <div className="skill-container-list">
              <div className="skill-item-list">
                <SiPostgresql
                  style={{ width: "40px", height: "auto", color: "#336791" }}
                ></SiPostgresql>
                PostgreSQL{" "}
              </div>
              <div className="skill-item-list">
                <SiMongodb
                  style={{ width: "40px", height: "auto", color: "#62A354" }}
                ></SiMongodb>
                MongoDB
              </div>
            </div>
          </div>
          <div className="card-skills">
            <div className="header-text-skills">
              <RiComputerFill
                style={{ width: "80px", height: "auto", color: "#789174" }}
              ></RiComputerFill>
              <div style={{ color: "#789174" }}>Front-End</div>
            </div>
            <div className="skill-container-frontend-list">
              <div className="skill-container-list align-Self-center">
                <div className="skill-item-list">
                  <SiJavascript
                    style={{ width: "25px", height: "auto", color: "#EFD81D" }}
                  ></SiJavascript>
                  JavaScript
                </div>
                <div className="skill-item-list">
                  <FaReact
                    style={{ width: "30px", height: "auto", color: "#5ED3F3" }}
                  ></FaReact>
                  React.js
                </div>
              </div>
              <div className="skill-container-list align-Self-center">
                <div className="skill-item-list">
                  <FaVuejs
                    style={{ width: "30px", height: "auto", color: "#3FB27F" }}
                  ></FaVuejs>
                  Vue.js
                </div>
                <div className="skill-item-list ">
                  <SiHtml5
                    style={{ width: "30px", height: "auto", color: "#DD4B25" }}
                  ></SiHtml5>
                  HTML
                </div>
              </div>
              <div className="skill-container-list align-Self-center">
                <div className="skill-item-list">
                  <SiCss3
                    style={{ width: "30px", height: "auto", color: "#006CB4" }}
                  ></SiCss3>
                  CSS
                </div>
                <div
                  className="skill-item-list"
                  style={{ textAlign: "center" }}
                >
                  <SiMaterialui
                    style={{ width: "30px", height: "auto", color: "#007DC5" }}
                  ></SiMaterialui>{" "}
                  Material-UI
                </div>
              </div>
            </div>
          </div>
          <div className="card-skills">
            <div
              className="header-text-skills"
              style={{ marginBottom: "20px" }}
            >
              <RiCodeBoxFill
                style={{ width: "80px", height: "auto", color: "#789174" }}
              ></RiCodeBoxFill>
              <div style={{ color: "#789174" }}>Back-End</div>
            </div>
            <div className="align-Self-center">
              <div className="skill-item-list">
                <SiNodedotjs
                  style={{ width: "40px", height: "auto", color: "#70B556" }}
                ></SiNodedotjs>
                Node.js
              </div>
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
