import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <span className="logo-text">kavi.</span>
      </div>
      <div className="nav-links">
        <a href="#about">
          <Link to="about" smooth={true} duration={500}>
            about
          </Link>
        </a>
        <a href="#education">education</a>
        <a href="#work">work</a>
        <a href="#connect">connect</a>
      </div>
    </nav>
  );
};

export default Navbar;
