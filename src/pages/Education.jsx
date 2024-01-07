import React from "react";
import { connect } from "react-redux";
import "../style/education.css";
import MU from "../assets/MU.jpg";
import SKWK from "../assets/SKWK.jpg";
import { GiBookshelf } from "react-icons/gi";

export const Education = (props) => {
  return (
    <div className="education " id="education">
      <div className="maincontainer-education">
        <div className="headereducation">
          <GiBookshelf style={{ color: "#789174" }}></GiBookshelf>
          <span className="education-text">
            <span style={{ color: "#b55139" }}>E</span>du
            <span style={{ color: "#789174" }}>c</span>ati
            <span style={{ color: "#ed8733" }}>o</span>n
          </span>
        </div>
        <div className="container-education">
          <div className="papereducation-1">
            <div className="bordery">
              <img src={MU} alt="Mahidol-University" className="imgeducation" />
            </div>

            <div className="textmu">
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "26px",
                  lineHeight: "200%",
                  color: "#476040",
                }}
              >
                Bachelor's Degree
              </div>
              <div>
                <span>Years : </span>
                <span>2018-2022 </span>
              </div>
              <div>
                <span>
                  Computer Engineering, Mahidol University.
                </span>
              </div>
            </div>
          </div>
          <div className="papereducation-2">
            <div className="textskwk">
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "26px",
                  lineHeight: "200%",
                  color: "#476040",
                }}
              >
                High School
              </div>
              <div>
                <span>Years : </span>
                <span>2012-2017</span>
              </div>
              <div>High school in  Science and Mathematics Program, Srikranuanwittayakom School.
              </div>
            </div>

            <div className="bordery">
              <img
                src={SKWK}
                alt="Srikranuanwittayakom-School"
                className="imgeducation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
