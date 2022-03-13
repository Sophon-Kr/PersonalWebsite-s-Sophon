import React from "react";
import { connect } from "react-redux";
import WorkEx from "../components/WorkEx";
import ProjectEx from "../components/ProjectEx";
import Certificate from "../components/Certificate";

export const Experiences = (props) => {
  return (
    <div
      className="experiences"
      id="experiences"
      style={{ backgroundColor: "#efeeea", minHeight: "100vh" }}
    >
      <WorkEx />
      <ProjectEx />
      <Certificate />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Experiences);
