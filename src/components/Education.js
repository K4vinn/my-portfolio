import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/Education.css";

import floweredu from "../assets/images/green-edu.png";
import flowerwork from "../assets/images/green-work.png";

const Education = () => {
  const [selected, setSelected] = useState("education");
  const infoRef = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState("auto");

  const handleSelect = (type) => {
    setSelected(type);
  };

  useEffect(() => {
    if (infoRef.current) {
      const contentHeight = infoRef.current.scrollHeight;
      setHeight(`${contentHeight}px`);
    }
  }, [selected]);

  return (
    <section className="education-section" id="education" ref={containerRef}>
      <div className="container">
        <div className="top-container">
          <h1 className="edu-header">Experience</h1>
          <div className="edu-header-container">
            <div
              className={`edu-item ${
                selected === "education" ? "selected" : ""
              }`}
              onClick={() => handleSelect("education")}
            >
              <img src={floweredu} alt="flower" className="floweredu" />
              <button>Education</button>
            </div>
            <div
              className={`edu-item ${selected === "work" ? "selected" : ""}`}
              onClick={() => handleSelect("work")}
            >
              <img src={flowerwork} alt="flower" className="floweredu" />
              <button>Work</button>
            </div>
          </div>
          <div className="information-container" style={{ height: height }}>
            <div ref={infoRef} className="content">
              {selected === "education" && (
                <div className="fade-in">
                  <ul>
                    <li>
                      <h1> Diploma - Diploma in Computer Science</h1>
                      <h2> 2020 - 2022</h2>
                      <h3> INTI International College Penang, MY </h3>
                      <ul>
                        <li>Graduated with CGPA 2.89 </li>
                        <li>Deans List APR2022 Semester (3.89)</li>
                      </ul>
                      <br />
                      <h2>
                        Area of Study : Computer Engineer, Algorithms and Data
                        Structures, Operating Systems, UX/UI Design, Security,
                        Cybercrimes and Cyber Laws
                      </h2>
                      <br />
                      <h2>Languages : Python, C++, Java</h2>
                    </li>

                    <li>
                      <h1> Degree - Bachelors with Honors in Computing</h1>
                      <h2> 2022 - 2024</h2>
                      <h3>INTI International College Penang, MY</h3>
                      <ul>
                        <li> Graduated with CGPA 3.0 </li>
                        <li> Collaboration with Coventry University, UK </li>
                      </ul>
                      <br />
                      <h2>
                        Area of Study : Software Development, Web Development,
                        Mobile Application Development, Database Management,
                        Data Structures, UX/UI Design, Cyber Security
                      </h2>
                      <br />
                      <h2>
                        Languages : PHP, HTML, CSS, React.JS, JavaScript, C++
                      </h2>
                    </li>
                  </ul>
                </div>
              )}
              {selected === "work" && (
                <div className="fade-in">
                  <ul>
                    <li>
                      <h1> Cloudatik Solutions </h1>
                      <h2> JAN 2022 - APR 2022 </h2>
                      <h3> Diploma Internship | Front End Developer </h3>

                      <ul>
                        <li>Developed a web-based control panel system.</li>
                        <li>
                          Worked with React.js, HTML5, CSS, and JavaScript.
                        </li>
                        <li>
                          Developed the organization's first web-based control
                          panel with API gateways and database integration.
                        </li>
                        <li>
                          The control panel was for FarmSense, an automated
                          agricultural machinery system.
                        </li>
                      </ul>
                      <br />
                      <h2>
                        Key Achievements: Gained real-world experience in
                        solving complex problems and improving communication
                        skills within the development team.
                      </h2>
                    </li>

                    <li>
                      <h1> Motorola Solutions Sdn Bhd</h1>
                      <h2> DEC 2023 - MAR 2024 </h2>
                      <h3> Degree Internship | Software Developer </h3>

                      <ul>
                        <li>
                          Troubleshot and resolved issues in legacy dashboards
                          and software.
                        </li>
                        <li>
                          Developed a new productivity tracker to help project
                          leads track daily test case completion.
                        </li>
                        <li>
                          Improved and updated the existing dashboard system.
                        </li>
                      </ul>
                      <br />
                      <h2>
                        Key Achievements: Gained hands-on experience in a
                        real-world work environment and enhanced technical
                        skills.
                      </h2>
                    </li>

                    <li>
                      <h1> Project Rock Climbing Gym</h1>
                      <h2> JUL 2024 - FEB 2025 </h2>
                      <h3> Part-Time | Operations Crew </h3>

                      <ul>
                        <li>
                          Conducted climber introductions and managed sales.
                        </li>
                        <li>
                          Served as the person-in-charge on designated days and
                          led team-building programs.
                        </li>
                        <li>
                          Managed cashier and sales, optimizing sales strategies
                          for climbers.
                        </li>
                      </ul>
                      <br />
                      <h2>
                        Key Achievements: Developed strong customer relations
                        skills and learned how to provide the best experience
                        for newcomers in the climbing community.
                      </h2>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
