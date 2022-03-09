import React from "react";
import { connect } from "react-redux";
import "../assets/skills.css";
const otherSkills = [
  {
    id: 1,
    text: "Java",
    icon: "Java",
  },
  {
    id: 2,
    text: "Adobe Photoshop",
    icon: "Adobe Photoshop",
  },
];

export const Skills = (props) => {
  return (
    <div className="skills" id="skills">
      <div className="maincontainer-skills">
        <div className="header-skills">Web Skills </div>
        <div className="container-skills-web">
          <div className="card-skills">1</div>
          <div className="card-skills">2</div>
          <div className="card-skills">3</div>
        </div>
        <div className="header-skills">Program and Other Skills </div>
        <div className="container-skills-other">
          {otherSkills.map((data) => (
            <div className="item-skills" key={data.id}>
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
