import React from "react";
import { connect } from "react-redux";

export const Homepage = (props) => {
  return (
    <div style={{ color: "red", marginTop: 50 }}>
      Homepage jkjslajkldjkljdkjdsd
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
