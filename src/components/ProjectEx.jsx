import React from "react";
import { connect } from "react-redux";
import "../style/projectex.css";
import { GrGamepad } from "react-icons/gr";
import { GoBrowser } from "react-icons/go";
import { BsCashCoin } from "react-icons/bs";
import { MdGames } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";

const dataProjectEXP = [
  {
    id: 1,
    icon: <GoBrowser className="project-size-icon" />,
    text: "Develope a full satack website of Senior Project, using React.js and node.js for Mathematical model for calculating COVID-19 ",
  },
  {
    id: 2,
    icon: <GrGamepad className="project-size-icon" />,
    text: "Developed a Java-GUI Game project, using Object-oriented programming and concept of farm game",
  },
  {
    id: 3,
    icon: <BsCashCoin className="project-size-icon" />,
    text: "Developed a C program project, using C programming for Income and Expense Account Program",
  },
  {
    id: 4,
    icon: <MdGames className="project-size-icon" />,
    text: "Developed a C++ program project, using C++ programming about survival from  PM 2.5 game",
  },
  {
    id: 5,
    icon: <BiDonateHeart className="project-size-icon" />,
    text: "Developed a demo about donation website project, using mongoDB  for a database and adobe XD  for a demo website",
  },
];

export const ProjectEx = (props) => {
  return (
    <div className="projectex" id="projectex">
      <div className="maincontainer-projectex ">
        <div className="projectex-header">Project Experience</div>
        {dataProjectEXP.map((data) => (
          <div key={data.id} className="container-projectex">
            <div className="project-icon">{data.icon}</div>
            <div className="project-description-text">{data.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEx);
