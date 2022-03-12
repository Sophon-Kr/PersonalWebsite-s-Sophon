import React from "react";
import { connect } from "react-redux";
import "../style/projectex.css";
// import workIMG from "../assets/MU.jpg";
import { GrGamepad } from "react-icons/gr";
const dataProjectEXP = [
  {
    id: 1,
    icon: <GrGamepad className="project-size-icon" />,
    text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
  },
  {
    id: 2,
    icon: <GrGamepad className="project-size-icon" />,
    text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
  },
  {
    id: 3,
    icon: <GrGamepad className="project-size-icon" />,
    text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
  },
  {
    id: 4,
    icon: <GrGamepad className="project-size-icon" />,
    text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
  },
  {
    id: 5,
    icon: <GrGamepad className="project-size-icon" />,
    text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
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
