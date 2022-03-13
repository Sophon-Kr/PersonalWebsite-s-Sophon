import React from "react";
import { connect } from "react-redux";
import "../style/education.css";
import MU from "../assets/MU.jpg";
import SKWK from "../assets/SKWK.jpg";

export const Education = (props) => {
  return (
    <div className="education " id="education">
      <div className="maincontainer-education">
        <div className="headereducation">Education </div>
        <div className="container-education">
          <div className="papereducation-1">
            <img src={MU} alt="Mahidol-University" className="imgeducation" />
            <div className="textmu">
              Collage
              <div>
                •2018-Present Faculty of Engineering, Major in Computer
                Engineering,Mahidol University
              </div>
            </div>
          </div>
          <div className="papereducation-2">
            <div className="textskwk">
              Hight School
              <div>2012-2017 Srikranuanwittayakom School (Science - Math)</div>
            </div>

            <img
              src={SKWK}
              alt="Srikranuanwittayakom-School"
              className="imgeducation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
