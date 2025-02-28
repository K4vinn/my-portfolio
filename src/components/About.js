import React from "react";
import "../assets/styles/About.css";
import { TypeAnimation } from "react-type-animation";
import { SearchOutlined } from "@ant-design/icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

//vectors
import flower from "../assets/images/flowerempty.png";
import arrow from "../assets/images/arrow.png";
import gmoth from "../assets/images/green-moth.png";
import gbutterfly from "../assets/images/light-green-butterly.png";
import sparklef from "../assets/images/sparkle-for.png";
import sparklestar from "../assets/images/sparkle-star.png";
import starsparkle from "../assets/images/star-sparkle.png";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const educationData = [
    {
      header: "Diploma",
      title: "Diploma in Computer Science",
      institution: "INTI College Penang, MY",
      year: "2020 - 2022",
      description: "Graduated with a CGPA of 2.89",
      description2: "Dean's List of April 2022 (GPA 3.98)",
    },
    {
      header: "Degree",
      title: "Bachelors in Computing with Honors",
      institution: "Coventry University, UK",
      year: "2022 - 2024",
      description: "Graduated with a CGPA of 3.2",
      description2: "Focused majoring on Software Development",
    },
  ];

  return (
    
    <section id="about" className="about-section" ref={ref}>
            {/* <img src={arrow} className="arrow-g" alt="arrow-green"/> */}

      <div className="left">
        <div className="intro-text">
          <h1> Hello, </h1>
          <h2 className="type-animation">
            {inView && (
              <TypeAnimation
                sequence={["I'm Kavinash Devakumar", 2000]}
                speed={30}
                repeat={Infinity}
                cursor={true}
              />
            )}
          </h2>
          <p>
            I am a Fresh Graduate Software Developer, from Penang, Malaysia,
            with a knack for unique, arsty and creative designs that stand out
            and reflect to my personality. I'm a passionate developer to take on
            a creative challenge all whilst making things beautiful and
            innovative.
          </p>
          <p> Lets connect! </p>
          <button
            className="btn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/kavinash-devakumar/")
            }
          >
            <SearchOutlined className="icon" />
            linkedin.com/in/kavinash-devakumar/
          </button>
          <img className="flowerabout" src={gbutterfly} alt="flower"/>
          {/* <img className="flowerabout2" src={flower} alt="flower"/> */}
        </div>
      </div>
      {/* Right Side */}
      <div className="right">
        <h2 className="education-title"> Education </h2>
        <div className="timeline-container" ref={ref}>
          
          {inView && (
            <>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "80vh" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="timeline-line"
              >
                {[0, 1].map((pos, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: pos + 0.5, duration: 0.5 }}
                    className="timeline-dot"
                    style={{ top: `${pos * 100}%` }}
                  />
                ))}
              </motion.div>

              {educationData.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index + 0.5, duration: 0.5 }}
                  className={`timeline-box ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                  style={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="timeline-circle">
                      <h1> {data.header}</h1>
                    <h3>{data.title}</h3>
                    <h2>{data.institution}</h2>
                    <h4>{data.year}</h4>
                    <h4>{data.description}</h4>
                    <h4>{data.description2}</h4>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>
        <img className="sparklefabout" src={sparklef} alt="sparkle"/>
        <img className="sparklefabout2" src={starsparkle} alt="sparkle"/>
        <img className="sparklefabout3" src={sparklestar} alt="sparkle"/>
      </div>
    </section>
    
  );
};

export default About;
