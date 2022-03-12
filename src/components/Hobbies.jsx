import React from "react";
import { connect } from "react-redux";
import "../style/hobbies.css";
import { SiAdobephotoshop } from "react-icons/si";
import { GrPersonalComputer } from "react-icons/gr";
import { GiMicrophone } from "react-icons/gi";
import { GiCactusPot } from "react-icons/gi";
import { GiCampCookingPot } from "react-icons/gi";
import { MdDraw } from "react-icons/md";
import { Icon } from "@iconify/react";

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
        <GrPersonalComputer className="size-icon"></GrPersonalComputer>
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
        <GiMicrophone className="size-icon"></GiMicrophone>
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
        <Icon icon="mdi:badminton" className="size-icon" />
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
        <GiCactusPot className="size-icon"></GiCactusPot>
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
        <GiCampCookingPot className="size-icon"></GiCampCookingPot>
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
        <MdDraw className="size-icon"></MdDraw>
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
