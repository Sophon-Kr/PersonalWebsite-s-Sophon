import React from "react";
import { connect } from "react-redux";
import "../style/aboutme.css";
import profile from "../assets/profile.png";

export const AboutMe = (props) => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="maincontainer container">
        <div className="item1">
          <div className="nameaboutme">I am Sophon Kraipinit</div>
          <div className="descriptionaboutme">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an took a galley of type and scrambled it
            to make a type It has survived not only five centuries, but also
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
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
