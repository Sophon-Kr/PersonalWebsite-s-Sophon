import React from "react";
import { connect } from "react-redux";
import "../style/activity.css";
const activityList = [
  {
    id: 1,
    text: "The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.",
  },
  {
    id: 2,
    text: "The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.",
  },
  {
    id: 3,
    text: "The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.",
  },
  {
    id: 4,
    text: "The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.",
  },
  {
    id: 5,
    text: "The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.",
  },
  {
    id: 6,
    text: "The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.",
  },
];

export const Activity = (props) => {
  return (
    <div className="activity" id="activity">
      <div className="maincontainer-activity">
        {/* <div className="activity-header">Activity</div> */}
        <div className="activity-timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <h1>Header 1</h1>
                <p>
                  The behavior could be thought of as a minimum gutter, as if
                  the gutter is bigger somehow (because of something like
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>Header 2</h1>
                <p>
                  The behavior could be thought of as a minimum gutter, as if
                  the gutter is bigger somehow (because of something like
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>Header 3</h1>
                <p>
                  The behavior could be thought of as a minimum gutter, as if
                  the gutter is bigger somehow (because of something like
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>Header 4</h1>
                <p>
                  The behavior could be thought of as a minimum gutter, as if
                  the gutter is bigger somehow (because of something like
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
