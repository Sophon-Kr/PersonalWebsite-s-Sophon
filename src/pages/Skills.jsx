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
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGithub,
  SiDocker,
  SiTypescript,
  SiSwift,
  SiGitlab,
  SiAmazons3,
  SiHeroku,
  SiFirebase,
  SiJenkins,
  SiFigma,
} from "react-icons/si";

import { FaJava, FaReact, FaVuejs, FaAws } from "react-icons/fa";
import { RiComputerFill, RiCodeBoxFill } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";
import golang from "../assets/golang.png";


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
        <div>GitHub</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiGithub className="size-icon"></SiGithub>
      </div>
    ),
  },
  {
    id: 11,
    text: (
      <span className="center-text">
        <div>GitLab</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiGitlab className="size-icon"></SiGitlab>
      </div>
    ),
  },
  {
    id: 12,
    text: (
      <span className="center-text">
        <div>aws</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <FaAws className="size-icon"></FaAws>
      </div>
    ),
  },
  {
    id: 13,
    text: (
      <span className="center-text">
        <div>aws</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiHeroku className="size-icon"></SiHeroku>
      </div>
    ),
  },
  {
    id: 14,
    text: (
      <span className="center-text">
        <div>Firebase</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiFirebase className="size-icon"></SiFirebase>
      </div>
    ),
  },
  {
    id: 15,
    text: (
      <span className="center-text">
        <div>Jenkins</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiJenkins className="size-icon"></SiJenkins>
      </div>
    ),
  },
  {
    id: 6,
    text: (
      <span className="center-text">
        <div>Docker</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiDocker className="size-icon"></SiDocker>
      </div>
    ),
  },
  {
    id: 7,
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
    id: 16,
    text: (
      <span className="center-text">
        <div>Figma</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiFigma className="size-icon"></SiFigma>
      </div>
    ),
  },
  {
    id: 8,
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
    id: 9,
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
  // {
  //   id: 10,
  //   text: (
  //     <span className="center-text">
  //       <div>MS office</div>
  //     </span>
  //   ),
  //   icon: (
  //     <div className="center-text">
  //       <SiMicrosoftoffice className="size-icon"></SiMicrosoftoffice>
  //     </div>
  //   ),
  // },
];

export const Skills = (props) => {
  return (
    <div className="skills" id="skills">
      <div className="maincontainer-skills">
        <div className="header-skills-1">
          <span className="w-header">D</span>evelopment Skills{" "}
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
                  <SiTypescript
                    style={{ width: "25px", height: "auto", color: "#137ECE" }}
                  ></SiTypescript>
                  Typescript
                </div>
              </div>
              {/* <div className="skill-container-list align-Self-center">
                <div className="skill-item-list">
                  <FaReact
                    style={{ width: "30px", height: "auto", color: "#5ED3F3" }}
                  ></FaReact>
                  React.js
                </div>
              </div> */}
              <div className="skill-container-list align-Self-center">
                <div className="skill-item-list">
                  <FaReact
                    style={{ width: "30px", height: "auto", color: "#5ED3F3" }}
                  ></FaReact>
                  React.js
                </div>
                <div className="skill-item-list">
                  <FaVuejs
                    style={{ width: "30px", height: "auto", color: "#3FB27F" }}
                  ></FaVuejs>
                  Vue.js
                </div>
              </div>
              <div className="skill-container-list align-Self-center">
                <div className="skill-item-list">
                  <SiCss3
                    style={{ width: "30px", height: "auto", color: "#006CB4" }}
                  ></SiCss3>
                  CSS
                </div>
                <div className="skill-item-list ">
                  <SiHtml5
                    style={{ width: "30px", height: "auto", color: "#DD4B25" }}
                  ></SiHtml5>
                  HTML
                </div>
                {/* <div
                  className="skill-item-list"
                  style={{ textAlign: "center" }}
                >
                  <SiMaterialui
                    style={{ width: "30px", height: "auto", color: "#007DC5" }}
                  ></SiMaterialui>{" "}
                  Material-UI
                </div> */}
              </div>
              <div className="skill-container-list align-Self-center">

                <div className="skill-item-list ">
                  <SiSwift
                    style={{ width: "30px", height: "auto", color: "#F05740" }}
                  ></SiSwift>
                  Swift
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
            <div className="align-Self-center skill-container-list">
              <div className="skill-item-list">
                <SiNodedotjs
                  style={{ width: "40px", height: "auto", color: "#70B556" }}
                ></SiNodedotjs>
                Node.js
              </div>
              <div className="skill-item-list">
                <img
                  src={golang}
                  alt="icons8-golang-48"
                  className="icons8-golang-48"
                  style={{ width: "40px", height: "auto" }}

                />
                Golang
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
