import React from "react";
import { connect } from "react-redux";
import "../style/hobbies.css";
import { SiAdobephotoshop } from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { RiComputerFill, RiCodeBoxFill } from "react-icons/ri";

const hobbiesList = [
  {
    id: 1,
    text: (
      <span className="center-text">
        <div>Exploring</div>
        <div>New Technologies</div>
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
        <div>Singing</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiAdobephotoshop className="size-icon"></SiAdobephotoshop>
      </div>
    ),
  },
  {
    id: 3,
    text: (
      <span className="center-text">
        <div>Playing</div>
        <div>Badminton</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiAdobephotoshop className="size-icon"></SiAdobephotoshop>
      </div>
    ),
  },
  {
    id: 4,
    text: (
      <span className="center-text">
        <div>Planting</div>
        <div>Cactus</div>
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
        <div>Cooking</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiAdobephotoshop className="size-icon"></SiAdobephotoshop>
      </div>
    ),
  },
  {
    id: 6,
    text: (
      <span className="center-text">
        <div>Drawing</div>
      </span>
    ),
    icon: (
      <div className="center-text">
        <SiAdobephotoshop className="size-icon"></SiAdobephotoshop>
      </div>
    ),
  },
];

export const Hobbies = (props) => {
  return (
    <div className="hobbies" id="hobbies">
      <div className="hobbies-header">Hobbies</div>
      <div className="maincontainer-hobbies">
        {hobbiesList.map((data) => (
          <div className="item-skills" key={data.id}>
            {data.icon}
            {data.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Hobbies);
