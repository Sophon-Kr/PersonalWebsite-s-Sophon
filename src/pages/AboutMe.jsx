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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I
            am a fourth-year student in the Faculty of Engineering at Mahidol
            University. I have an ability to develop many part of website such
            as develop front-end by react and vue,back-end by node.js and
            manage database SQL and NoSQL. I am also good at designing works
            such as UX/UI design,website design and graphic design. It would be
            a valuable experience to be work as software engineering.<br></br>
            <span className="interest-aboutme-text">
              I am interested in full stack developer.
            </span>
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
