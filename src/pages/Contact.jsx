import React from "react";
import { connect } from "react-redux";
import "../style/contact.css";
import TextField from "@mui/material/TextField";
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { styled } from "@mui/material/styles";
// import { Link } from "react-scroll";

const contactList = [
  {
    id: 1,
    icon: <AiFillHome className="icon-contact" />,
    text: (
      <span>
        <div>107/7 Phimul Village,Phimul,</div>
        <div>Huai Mek,Kalasin;Thailand </div>
      </span>
    ),
    linkto: "",
  },
  {
    id: 2,
    icon: <MdEmail className="icon-contact" />,
    text: "sophonkraipinit@gmail.com",
    linkto: "",
  },
  {
    id: 3,
    icon: <FaPhoneSquareAlt className="icon-contact" />,
    text: "(+66) 096-002-4634",
    linkto: "",
  },
];

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    // "& fieldset": {
    //   borderColor: "red",
    // },
    // "&:hover fieldset": {
    //   borderColor: "yellow",
    // },
    "&.Mui-focused fieldset": {
      borderColor: "#476040",
    },
  },
});
export const Contact = (props) => {
  return (
    <div className="contact" id="contact">
      <div className="maincontainer-contact">
        <div className="container-contact-left">
          <h1 className="header-text-contact-form">Contact Information</h1>
          {contactList.map((data) => (
            <div key={data.id} className="contact-component-text">
              <div>{data.icon}</div>
              <div>{data.text}</div>
            </div>
          ))}
          <div className="container-socialmedia">
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.facebook.com/SophonKraipinit"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="icon-contact" />
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.linkedin.com/in/sophon-kraipinit-94b441202"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon-contact" />
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://github.com/Sophon-Kr"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="icon-contact" />
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.instagram.com/sophon_kr/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="icon-contact" />
            </a>
          </div>
          <div className="button-component-download">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "px",
                color: "#476040",
              }}
            >
              Download :
            </div>
            <button className="button-download-style-cv">CV</button>
            <button className="button-download-style-resume">Resume</button>
          </div>
        </div>

        <div className="container-contact-right">
          <h1 className="header-text-contact-form">Send Message</h1>
          <CssTextField
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            className="message-textfield"
            required
          />
          <CssTextField
            id="outlined-basic"
            label="Topic"
            variant="outlined"
            className="message-textfield"
            required
          />
          <CssTextField
            id="outlined-basic"
            label="Detail"
            variant="outlined"
            className="message-textfield"
            multiline
            required
            rows={4}
          />
          <div className="button-component ">
            <button className="button-contact-style-send">Send</button>
            <button className="button-contact-style-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
