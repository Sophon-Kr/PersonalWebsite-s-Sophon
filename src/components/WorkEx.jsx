import React from "react";
import { connect } from "react-redux";
import "../style/workex.css";
import workIMG from "../assets/MU.jpg";

export const WorkEx = (props) => {
  return (
    <div className="workex" id="workex">
      <div className="maincontainer-workex ">
        <div className="workex-header">Work Experience</div>
        <div className="container-workex">
          <img className="workex-img" src={workIMG} alt="MSC IMG" />
          <div>Des WorkEx</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorkEx);
