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
import { sendEmail } from "../services/sendmail.service";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Contact = (props) => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [textDetail, setTextDetail] = React.useState("");
  const [sendFailure, setSendFailure] = React.useState(false);
  const [sendComplete, setSendComplete] = React.useState(false);

  const handleSend = (status) => {
    if (status === 2000 || status === "2000") {
      setSendComplete(true);
    } else {
      setSendFailure(true);
    }
  };
  const handleCloseComplete = (status) => {
    setSendComplete(false);
  };
  const handleCloseFailure = (status) => {
    setSendFailure(false);
  };

  const handleSendEmail = async () => {
    const statusSend = await sendEmail({
      sendFrom: email,
      subjectData: subject,
      sendText: textDetail,
    });
    handleSend(statusSend.status);
  };

  const handleClerForm = () => {
    setEmail("");
    setSubject("");
    setTextDetail("");
  };

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
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://drive.google.com/file/d/1Kg5PSnyblzGU2T-7GYYNHMdfJYlQJ9lm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button-download-style-cv">CV</button>
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://drive.google.com/file/d/1yhdaGCCpq-ySZ-dulLjMww2jLUk7PfIS/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button-download-style-resume">Resume</button>
            </a>
          </div>
        </div>

        <div className="container-contact-right">
          <h1 className="header-text-contact-form">Send Message</h1>
          <TextField
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            className="message-textfield"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Topic"
            variant="outlined"
            className="message-textfield"
            required
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Detail"
            variant="outlined"
            className="message-textfield"
            multiline
            required
            rows={4}
            value={textDetail}
            onChange={(event) => setTextDetail(event.target.value)}
          />
          <div className="button-component ">
            <button
              className="button-contact-style-send"
              onClick={handleSendEmail}
            >
              Send
            </button>
            <button
              className="button-contact-style-cancel"
              onClick={handleClerForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={sendComplete}
        autoHideDuration={3000}
        onClose={handleCloseComplete}
        TransitionComponent="SlideTransition"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseComplete}
          severity="success"
          sx={{ width: "100%" }}
        >
          Send Complete!
        </Alert>
      </Snackbar>
      <Snackbar
        open={sendFailure}
        autoHideDuration={3000}
        onClose={handleCloseFailure}
        TransitionComponent="SlideTransition"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseFailure}
          sx={{ width: "100%" }}
          severity="error"
        >
          Send Failure!
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
