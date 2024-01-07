import React from "react";
import { connect } from "react-redux";
import "../style/aboutme.css";
import profile from "../assets/profile.png";
import { Link } from "react-scroll";

export const AboutMe = (props) => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="maincontainer container">
        <div className="item1">
          <div className="nameaboutme">
            <div>
              I<span style={{ color: "#ed8733" }}>'</span>m
              <span style={{ color: "#789174" }}>&nbsp;&nbsp;S</span>ophon
            </div>
            <div>
              <span style={{ color: "#ed8733" }}>&nbsp;&nbsp;K</span>raipinit
            </div>
          </div>
          <div className="descriptionaboutme">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a software engineer based in Bangkok, Thailand with 1 year and 6 months of experience in the software industry. My focus area for the past few years has been mobile development with React Native and full-stack web development with React and Node.js. but I'm also skilled in back-end development with GoLang. furthermore, I can manage database SQL and NoSQL and design mobile UX/UI and web UX/UI. It would be a valuable experience to work as a software engineer so I’m seeking a new opportunity for the position of software engineer.<br></br>
            {/* <span className="interest-aboutme-text">
              I am interested in full stack developer.
            </span> */}
          </div>
          <div className="nav-item-aboutme">
            <Link
              to="hobbies"
              spy={true}
              smooth={true}
              offset={-50}
              duration={50}
            // onClick={closeMenu}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="item2">
          <div className="container-img-profile">
            <img src={profile} alt="Profile" className="img-profile" />
          </div>
          {/* <div className="behide-img"> </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
