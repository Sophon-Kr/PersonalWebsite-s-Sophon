import React from "react";
import { connect } from "react-redux";
import "../style/certificate.css";
import { GrGamepad } from "react-icons/gr";
const certificateList = [
  {
    id: 1,
    icon: (
      <div className="certificate-center-icon">
        <GrGamepad className="certificate-icon" />
      </div>
    ),
    text: "stretch (default): stretch to fill the container (still respect min-width/max-width)",
  },
  {
    id: 2,
    icon: (
      <div className="certificate-center-icon">
        <GrGamepad className="certificate-icon" />
      </div>
    ),
    text: "stretch (default): stretch to fill the container (still respect min-width/max-width)",
  },
  {
    id: 3,
    icon: (
      <div className="certificate-center-icon">
        <GrGamepad className="certificate-icon" />
      </div>
    ),
    text: "stretch (default): stretch to fill the container (still respect min-width/max-width)",
  },
  {
    id: 4,
    icon: (
      <div className="certificate-center-icon">
        <GrGamepad className="certificate-icon" />
      </div>
    ),
    text: "stretch (default): stretch to fill the container (still respect min-width/max-width)",
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
