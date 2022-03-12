import React from "react";
import { connect } from "react-redux";

export const Contact = (props) => {
  return (
    <div className="contact" id="contact" style={{ height: "50vh" }}>
      Contact
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
