import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "../style/navbar.css";

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
            <FaTimes size={30} style={{ color: "#b55139" }} />
          ) : (
            <FaBars size={30} style={{ color: "#476040" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
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
          <li className="nav-item">
            <Link
              to="activity"
              spy={true}
              smooth={true}
              offset={-60}
              duration={50}
              onClick={closeMenu}
            >
              Activity
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="hobbies"
              spy={true}
              smooth={true}
              offset={-50}
              duration={50}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
