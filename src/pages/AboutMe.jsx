import React from "react";
import { connect } from "react-redux";
import "../assets/aboutme.css";

export const AboutMe = (props) => {
  return (
    <div
      className="aboutme"
      id="aboutme"
      style={{
        backgroundColor: "#efeeea",
        height: "100vh",
        paddingTop: "65px",
        padding: "5%",
      }}
    >
      <div className="maincontainer">I am Sophon Kraipinit</div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
