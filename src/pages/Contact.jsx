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

export const Contact = (props) => {
  return (
    <div className="contact" id="contact">
      {/* <div className="contact-header">Hobbies</div> */}
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
            <FaFacebookSquare className="icon-contact" />
            <BsLinkedin className="icon-contact" />
            <AiFillGithub className="icon-contact" />
            <AiFillInstagram className="icon-contact" />
          </div>
        </div>

        <div className="container-contact-right">
          <h1 className="header-text-contact-form">Send Message</h1>
          <TextField
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            className="message-textfield"
          />
          <TextField
            id="outlined-basic"
            label="Topic"
            variant="outlined"
            className="message-textfield"
          />
          <TextField
            id="outlined-basic"
            label="Detail"
            variant="outlined"
            className="message-textfield"
            multiline
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
