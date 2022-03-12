import React from "react";
import { connect } from "react-redux";
import "../style/workex.css";
import workIMG from "../assets/MSC.jpg";

export const WorkEx = (props) => {
  return (
    <div className="workex" id="workex">
      <div className="maincontainer-workex ">
        <div className="workex-header">Work Experience</div>
        <div className="container-workex">
          <img className="workex-img" src={workIMG} alt="MSC IMG" />
          <div className="descroption-workex">
            This defines the default behavior for how flex items are laid out
            along the cross axis on the current line. Think of it as the
            justify-content version for the cross-axis (perpendicular to the
            main-axis).
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorkEx);
