import React from "react";
import "./navbar.css";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://www.hyrathon.com/static/index_page/images/color-logo.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link">46235 Total Candidates</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">27772 Challenges Taken</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">1276320 Questions Answered</span>
        </li>
      </ul>
      <button className="btn btn-primary">Log In</button>
      <Sidebar/>
    </nav>
  );
}

export default Navbar;
