import React from "react";
import { connect } from "react-redux";
import "../assets/aboutme.css";
import profile from "../assets/profile.png";

export const AboutMe = (props) => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="maincontainer container">
        <div className="item1">
          <div className="nameaboutme">I am Sophon Kraipinit</div>
          <div className="descriptionaboutme">
            Lorem Ipsum is simply dummy text of the printing and <br></br>
            typesetting industry. Lorem Ipsum has been the industry's <br></br>
            standard dummy text ever since the 1500s, when an
            <br></br>
            took a galley of type and scrambled it to make a type
            <br></br>
            It has survived not only five centuries, but also
            <br></br>
            electronic typesetting, remaining essentially unchanged. It was
            <br></br>
            popularised in the 1960s with the release of Letraset sheets
            <br></br>
          </div>
        </div>
        <div className="item2">
          {/* I am Sophon Kraipinit2222 */}
          <img src={profile} alt="Profile" className="img-profile" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
