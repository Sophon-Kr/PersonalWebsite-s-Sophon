import React from "react";
import { connect } from "react-redux";
import "../style/activity.css";
import { FiActivity } from "react-icons//fi";

export const Activity = (props) => {
  return (
    <div className="activity" id="activity">
      <div className="activity-header header-img-mountain-mobile">
        <img
          className="header-img-mountain"
          alt="Mountain-Img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAALOUlEQVR4nO2ceXAb5RnGn3d35TiElCQcAylMCLYkO4plQ9wDW0pwO4EC7XQmMw1HgeGYTKdTDnNkCGkgRwMuUIqhLW1DJzAdjhLSYwZomR5obMmm0xqMJezYkhNDU8pASxICxImk3bd/yE6+Xa8cHavL2d9/evZ7d9/Vo13p2/f9BNjY2NjY2NjY2NjY2NjY2NjY2NjY2AA7eIdc6hzyQSl1AlYSiYZWIsb1AB4vdS65QqVOwCr6+vocVZ8bjwBYUKVRTV2d75NS55QLUqkTsIqqueO3AHADOD0u43ulzidXZsQVMjDacwZp2giAeRPSAczCed5F/v2lzCsXZsQVQqxtxTEzAGAeDlN7qfLJh4q/QgajPU0qtD4Axl9Xn7Ik1TTWtn5YirxypeKvEBVaJ6aaAQAnQ1PXFjuffKnoKyQyErqCiX8zzZDDTElno7Pt30VLKk8q9grp3ds7WwM/qFf5zwD2CkK1pCn3FDOvfKlYQ+YcUu8mwiJBirMm3QpgqziOCWvC0eB5xc0udyrSkIFY4Gwi3CVqDH68sc438tF7ye0ARoRNDoDuLW6GuVORhkisPAxgjiB9mJCPbAWAtra2JBFv1UfwtZFoV33xMsydijMkMtrVwsAVokZE65trVn48+Xpprf85AGFhiKwRbSxWjvlQUYYws8QadUL365D6l9a2PiWOIyKNwVt0GtPqwWhPU1ESzYOKMiQSDd4E0BcEiZlxGxFpxrFep/93BPxDkEiDtsU4rtyoGEOGh0NzATK+oc83un1Bs/FExMy0SdQY+EY41nNhwZK0gIox5IjMG0E4U5DGlaS0froYr9v3J4C6dSJrPyhEflZREYYMjvbWEuNmvUodS5a0vnu8WGZsMEhfHRju+oqF6VlKRRiialongFmCtDd+cvUjmcRO3NL+KmqSJHUwc1k+Nip7QyLR0EqALxc1Jr6jeWHzoUz3QRrdA4CPxgNfjER7LrUwTcsoa0MCgYDC4EdFjYCQt9b/22z201Dn6wP4JZ1I3MHMZXf+ZZeQyKkLlVsBeARJYwntRMTpYtKi8gYA4s9jb3g0uCrPFC2nbA15M9Z9Ogi6Z1AM3uat9b+Ry/689SsiTPyiqBHo/kAgUFadN2VriMJkLMseUAn3TRcTiYZW9e/ucqYdoEobASSPvma4FixUrs4zVUspS0MmHnHcJGoMbLrAufy/6WIGosHbGPyirEp/j8SCF5mNaazzjQD0jKgR0ebBwcEqSxK3gLI0xKQsuytxcPYTZmMHBwerwtHQUwR0InU+C5jxaiTWfY3pvtXEZgDxYwqfqzn232hZ8nlSdoZEYqHVAFYY5NeXLVuWNI4Nvxucn1T2vQrw9YZNs5jp15FYcKNxvnF+fds7xPiVqDF4w9hYoNqSE8iTspoc9e7tnT3nkLrLUAlMwdjx6Uny9S3ntIwDwEQV8GUA09c5DHEDw12LSZJeMcYx0e2NTl+nRaeSM2VlSOoTjU3pR1C3Q3WsSjoOu1mT/gDgdMP2dwA+E0B1dnEAgA/lRLLG42n7NL+zyI+yMSQy2nUOa9IwgJMEWcOU22qub3q6OGEE0/oGt68j97PIn/L5DtGkh6A34wONtGbo6+MA+FwY31SmZ2bTwYvr67/0UUPtil4AXwYwfNw4YI9+N7y2fywwDyWkLAwxL8tifZNzRT9m4UJmBNKEMoAHG1yt1zmdlx2ZFL0u/x7MQguIXksXx4zNqiO5DMA+QZ8vJ+Q78jqZPCmoIW/Gus3u1TpSZVnpJ9DfPt9YWut7GgC8i/z7leSCrwH0tCH0CBFf53X515k9SvEu8u+X4/MvNYsD0bWNbv+m8xe3HWBmw1Njas8k70JRMEN69/bOVpj60s0HJkmVZXGBIDEz3S6WZT0eT9zr8t3AQDtS3yv7QHxJg3P5M8b9iaSL8zp9zx4ddHj8MQAfCGFzZdDdGZ+oxRTsSz0cC60DcweAJDFd0+D2vWAc07f7L6dUqdVRAGcI8vNelz/t44xINLQqKauR82tWxLLJZ7q4gVionVj3VHk8qVHtBXW+/2RzDCsoiCH9Y4F5ckLZDWDBhKQS8fXGT3Q4FnwEDPGePS7LVOep8f2rEHmlY2wsUP1JQokCOGdSI8YTDW5/0Rf+FOSWJceVu3HMDACQmelp8fY1ONpbCzaudKKOYpsBAIsXtx0G6H5RK1ULquWGDA11nwXCrSabdKaorD6OHMuyhSB+sHo7gN2CVJIWVMsNUWXaAP18QkRmpqfCseBPwdCXUAl3ZlOWtZrm5uYEETbrVb42PNJbV8w8LDUkEuupYcIag7wTYg0CUKbeqtDldfpfRInZVfv+cwCGBEkG1M3pxhcCSw1h1rYAcAjSmJxY8G0mvgp6U0Q0SLjTyjxyZTWtVplY3wNM+FYxW1AtMyS8q6sBwJWixszrPR5PvNG5fOc0pjyZa1m2EKQaKKhfkIragmrdFSLLHYb9hb0u/47JF2lMOZAkLqu1G0TEBM1Qyy9eC6olhrw1EvIZe6fAtM7YBC2YkkgNoc3TlWVLRYNr+SulakG1xBDJsECGgFCqr3YqE6ZcDaJI4uPqn1lx/EJg1oL69miordDHzduQSLT7chhKrirTtAstG53Ld8rxREtzc3Mi3+MXiokW1L+JmqYaV2ZZT16GMLOkgYxXx0tNbl/oeLGlrsxlgsSSrgUVhJbwSOiygh4zn+DIaM9VBIg/CTUJ0rS9U5XEUnfrPxl4RScWuAU15x339fU5wGyc2T7vcbW+lW9S5YQC6V6IV8k0LahDQz2LwrHub+ZzvJwNcZwyvgZAjSAliOSKWFiZDRMfsJ2iRkxbjS2ozExJRd0GljrzaSnKyZDevb2ziaFfvUTY1uBs3Z0mpKLRVGyAfv7kPu1s5SpxzNuxnu8AdDHA5x5MyLfkeqycDJl7SGsH8HlBGtc0uaTdGoWkqd4fBfhZUWOmLZMtqENDPYsY/NDkNgKt7xsJnJbLsbI2pH8sMI+Jdf+iQESPNrlb3sslgUpBScobYWhBVR37b2BmUhXtlwDmCsPnOUjJ6QlE1obICWUd9MWnA1JcKlkdo1gsWdL6LoO361W+LzIabGfgEuN4Ar771q6gK9vjZGXI0FD3WQD090eiBz2eln3mETMLZmUrgHFBWgimdB9GB8nI+jaelSGqIt0LffHp/fic6or9S9ZsaXK3vAfCzw2y2JeQNGxYlXrOlzkZGzIw3LWYwbo1GwTaUsoqXymIa8kOAGn+gpZuBqNXVGTiR7JZ8ZuxISRJ9wMQF7aMSYn529ONn6k0u9v+R2Z/1Ez0WoOzdRsk6S4YVvyGY6Erp4xPQ0aGTBSfdK2eDHzf4/HE04TMaI7Ihx+GvgX1MzCvISL2OltfZ+D34ngCPZDpZDGzK0SmH+rGEkW8zqmNbycKzTUrP2bgx4J0h9flP9q4TcBaGH4iZzpZPK4hqS8l0j/h1DCl+HTCMX6oE8AHqVuV70lxk9fl38PAL0Qt08nicQ2RiXU/3SaKT3/MMO0ZS2PjJZ8x8wYlQTeaNXtXqVVbABwQpIwmi9N++0eiwa8zYPwHhIu8zuVdGeZ9QjMQ7V5LoIcEKaGpWJp6FGNO2iskVXyCro7MwMu2GZmjJE59DIZuyONNFtMaYlZ8mqgN2GSIx+OJM7OuNk/AqoGRkD9djKkhJ0rxqRh4Xf4XjJNFifhH6SaLpoacKMWnYkBEbDpZjAavMBs/xRCz4hMxnpypxadiYDpZJKnDbLI4xRCz4pMK+QHr0zyxmJgsHjmmmE8WdYaYFZ+YuHOmF5+Kgdfl30M5ThZtbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxmEv8H4Fc/LsD7mWwAAAAASUVORK5CYII="
        />

        <div className="underline-header mouse-over-activity ">
          <span style={{ color: "#ed8733" }}>E</span>xtracurricular{" "}
          <span style={{ color: "#ed8733" }}>A</span>ctivities
        </div>
        <FiActivity style={{ color: "#d2dac3" }}></FiActivity>
      </div>

      <div className="maincontainer-activity">
        <div className="activity-timeline">
          <ul className="reset-ul-mobile">
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
