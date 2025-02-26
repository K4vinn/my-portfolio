import React from "react";
import "../assets/styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="left">
        <div className="intro-text">
          <h1> Hello, </h1>
          <h2 className="typewriter"> I'm Kavinash Devakumar</h2>
          <p> I am a Software Developer</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="right">Hello</div>
    </section>
  );
};

export default About;
