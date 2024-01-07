import React from "react";
import { connect } from "react-redux";
import "../style/workex.css";
import workIMG from "../assets/MSC.jpg";
import bluebik from "../assets/bluebik.jpg";
import MetroSys from "../assets/MetroSys.jpg";
import Mahidol from "../assets/Mahidol.jpg";

export const WorkEx = (props) => {
  return (
    <div className="workex" id="workex">
      <div className="maincontainer-workex ">
        <div className="workex-header">Work Experience</div>
        <div className="container-workex">
          <img className="workex-img" src={bluebik} alt="Bluebik logo IMG" />
          <div className="descroption-workex">
            <h1 className="workex-header-position">Software Engineer</h1>
            <h2 className="workex-header-company"><i>Bluebik Group Public Company Limited. Bangkok Thailand  (Dec 2019 - Present)</i></h2>
            <ul>
              <li>
                <desc className="workex-description">• Software engineer in the team responsible for developing a mobile application as a front-end role. I focused on developing a super application with react native, redux, etc., for handling UI and  using Protocol Buffers (Protobuf) to be API endpoint of back-end. Furthermore, I integrated other parts that are included in the application such as tracking with Google Analytics etc.</desc>

              </li>
            </ul>
          </div>
        </div>
        <div className="container-workex">
          <img className="workex-img" src={MetroSys} alt="MSC IMG" />
          <div className="descroption-workex">
            <h1 className="workex-header-position">            Full Stack Engineer (Internship)
            </h1>
            <h2 className="workex-header-company"><i>            Metro Systems Corporation Plc. Bangkok Thailand (July 2021-December 2021)
            </i></h2>
            <ul>
              <li>   <desc className="workex-description">            • Full Stack Engineer in the team responsible for developing back office web platform.
              </desc></li>
              <li>  <desc className="workex-description">            • Focused on front-end to take the efforts to create UI and handle web using React,  Redux, Material UI, Jest, etc.
              </desc></li>
              <li>  <desc className="workex-description">            • Contributed to the back-end services for webhooks and integrations built in Node.js  and TypeORM with PostgreSQL.
              </desc></li>
              <li>  <desc className="workex-description">            • Handled other parts of web for integrating and improving performance with a variety of tools such as OAuth2 for handling two-factor authentication, jest and Selenium for making automation testing and user interface testing, etc.
              </desc></li>
            </ul>





          </div>
        </div>
        <div className="container-workex">
          <img className="workex-img" src={Mahidol} alt="Mahidol IMG" />
          <div className="descroption-workex">
            <h1 className="workex-header-position"> Teacher Assistant</h1>
            <h2 className="workex-header-company"><i>            Mahidol university. Bangkok Thailand (July 2022 - December 2023)
            </i></h2>
            <ul>
              <li>
                <desc className="workex-description">            • Teacher Assistant for Discrete Mathematics for engineer student of Mahidol University responsible for supporting the teacher to check students’ assignments and check midterm and final tests then give points, summary points and send it back.
                </desc>
              </li>
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorkEx);
