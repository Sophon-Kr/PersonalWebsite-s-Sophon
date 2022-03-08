import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "../assets/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link to="aboutme" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#212121" }} />
          ) : (
            <FaBars size={30} style={{ color: "#212121" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            {/* <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={-60}
              duration={50}
              onSetActive={this.handleSetActive}
            >
              Test 1
            </Link> */}
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-60}
              duration={50}
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-60}
              duration={50}
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-60}
              duration={50}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="experiences"
              spy={true}
              smooth={true}
              offset={-60}
              duration={50}
              onClick={closeMenu}
            >
              Experiences
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;