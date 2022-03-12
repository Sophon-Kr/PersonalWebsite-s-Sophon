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
              Mahidol University
              <div>
                This defines the default behavior for how flex items are laid
                out along the cross axis on the current line. Think of it as the
                justify-content version for the cross-axis (perpendicular to the
                main-axis).
              </div>
            </div>
          </div>
          <div className="papereducation-2">
            <div className="textskwk">
              Srikanuan witthayakom
              <div>
                This defines the default behavior for how flex items are laid
                out along the cross axis on the current line. Think of it as the
                justify-content version for the cross-axis (perpendicular to the
                main-axis).
              </div>
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
