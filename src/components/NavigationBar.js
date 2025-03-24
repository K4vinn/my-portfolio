import React from "react";
import { Link } from "react-scroll";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">kavi.</div>
      <div className="nav-links">
        <Link to="about" smooth={true} duration={600}>
          about
        </Link>
        <Link to="education" smooth={true} duration={600}>
          education
        </Link>
        <Link to="work" smooth={true} duration={600}>
          work
        </Link>
        <Link to="connect" smooth={true} duration={600}>
          connect
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
