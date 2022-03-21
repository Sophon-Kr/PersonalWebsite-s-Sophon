import React from "react";
import { connect } from "react-redux";
import "../style/projectex.css";
// import { GrGamepad } from "react-icons/gr";
import { RiGamepadLine } from "react-icons/ri";
import { GoBrowser } from "react-icons/go";
import { BsCashCoin } from "react-icons/bs";
import { MdGames } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";

const dataProjectEXP = [
  // {
  //   id: 1,
  //   link: "https://main.d1d8p5kxmlxy4n.amplifyapp.com/",
  //   icon: <GoBrowser className="project-size-icon" />,
  //   text: "Develope a full satack website of Senior Project, using React.js and node.js for Mathematical model for calculating COVID-19 ",
  // },
  {
    id: 2,
    link: "",
    icon: <RiGamepadLine className="project-size-icon" />,
    text: "Developed a Java-GUI Game project, using Object-oriented programming and concept of farm game",
  },
  {
    id: 3,
    link: "",
    icon: <BsCashCoin className="project-size-icon" />,
    text: "Developed a C program project, using C programming for Income and Expense Account Program",
  },
  {
    id: 4,
    link: "",
    icon: <MdGames className="project-size-icon" />,
    text: "Developed a C++ program project, using C++ programming about survival from  PM 2.5 game",
  },
  {
    id: 5,
    link: "",
    icon: <BiDonateHeart className="project-size-icon" />,
    text: "Developed a demo about donation website project, using mongoDB  for a database and adobe XD  for a demo website",
  },
];

export const ProjectEx = (props) => {
  return (
    <div className="projectex" id="projectex">
      <div className="maincontainer-projectex ">
        <div className="projectex-header">Project Experience</div>
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://main.d1d8p5kxmlxy4n.amplifyapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="container-projectex-active">
            <div className="project-icon project-active">
              <GoBrowser className="project-size-icon " />
            </div>
            <div className="project-description-text project-active">
              Develope a full satack website of Senior Project, using React.js
              and node.js for Mathematical model for calculating COVID-19
            </div>
          </div>
        </a>
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
