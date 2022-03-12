import React from "react";
import { connect } from "react-redux";
import "../style/skills.css";
import { SiAdobephotoshop } from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { RiComputerFill, RiCodeBoxFill } from "react-icons/ri";

const otherSkills = [
  {
    id: 1,
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
    id: 2,
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
                Database
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
                Front-End
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
