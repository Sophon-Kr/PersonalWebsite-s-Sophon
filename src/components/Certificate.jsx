import React from "react";
import { connect } from "react-redux";
import "../style/certificate.css";
import { GrGamepad } from "react-icons/gr";
const certificateList = [
  {
    id: 1,
    icon: (
      <div className="certificate-center-icon">
        <img
          src="https://img.icons8.com/ios-filled/100/000000/medal-window.png"
          alt="medal-icon"
          className="certificate-icon"
        />
      </div>
    ),
    text: "The Digital Literacy Assessment Level 2, ICDL,2018",
  },
  {
    id: 2,
    icon: (
      <div className="certificate-center-icon">
        <img
          src="https://img.icons8.com/ios-filled/100/000000/macbook-medal.png"
          alt="medal-icon"
          className="certificate-icon"
        />
      </div>
    ),
    text: "Gold medal, Web page creation competition, category Web Editor, Arts and Crafts students 2017 (Provincial level)",
  },
  {
    id: 3,
    icon: (
      <div className="certificate-center-icon">
        <img
          src="https://img.icons8.com/ios-filled/100/000000/macbook-medal.png"
          alt="medal-icon"
          className="certificate-icon"
        />
      </div>
    ),
    text: "Bronze medal, Web page creation competition, category Web Editor, Arts and Crafts students 2016 (region level)	",
  },
  {
    id: 4,
    icon: (
      <div className="certificate-center-icon">
        <img
          src="https://img.icons8.com/ios-filled/100/000000/macbook-medal.png"
          alt="medal-icon"
          className="certificate-icon"
        />
      </div>
    ),
    text: "Gold medal, Web page creation competition, category Web Editor, Arts and Crafts students 2016 (Provincial level)",
  },
];

export const Certificate = (props) => {
  return (
    <div className="certificate" id="certificate">
      <div className="certificate-header">Certification</div>
      <div className="maincontainer-certificate ">
        <div className="container-certificate">
          {certificateList.map((data) => (
            <div key={data.id} className="card-certificate">
              {data.icon} {data.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Certificate);
