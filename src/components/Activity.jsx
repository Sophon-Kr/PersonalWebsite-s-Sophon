import React from "react";
import { connect } from "react-redux";
import "../style/activity.css";

export const Activity = (props) => {
  return (
    <div className="activity" id="activity">
      <div className="activity-header">Extracurricular Activities</div>
      <div className="maincontainer-activity">
        <div className="activity-timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <h1>Click Camp 12 (2020), Being a Staff</h1>
                <p>
                  • Organized the camp providing informing to 80 high-school
                  students who are interested in Computer Engineering - Planed
                  and managed some activities in the camp.
                </p>
                <p>• Planed and managed some activities in the camp.</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>
                  Mahidol University's Choir (MU Choir) (2020) Being Vice
                  President and Secretary of MU Choir.
                </h1>
                <p>
                  • Prepared and submitted project documents to the relevant
                  departments of the university.
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>Participant in the international contest (2019)</h1>
                <p>• The 8th BICF - Bali International Choir Festival</p>
                <p>
                  • 12th International Choral Festival Orientale Concentus at
                  Singapore
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>INCRISIS (2019), Being a Staff </h1>
                <p>
                  • Managed and sold food in marketing department activities by
                  Computer Engineering student
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>
                  Electronic Camp (2018), Being a Staff (Cooperated with
                  electrical engineering student)
                </h1>
                <p>• Did a variety of activities in the camp.</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>
                  WE NEED YOU SMO61 Project (2018) Being a Coordination
                  Department
                </h1>
                <p>
                  • Learned about the work process and supported in many
                  projects in Mahidol University Student Association
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>
                  Festival of Lights (2018) Being a head of sponsor coordination
                </h1>
                <p>
                  • Contacted, coordinated, and managed the sponsor's part in
                  the Festival of Lights 2018 by Mahidol University Student
                  Association Mahidol University
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>EG Open House (2018), Being a Volunteer student</h1>
                <p>
                  • Introduced about Computer Engineering Mahidol University and
                  took high school students to visit the Digital lab
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
