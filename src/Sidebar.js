import React, { useState } from "react";
import "./sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="close-btn" onClick={toggleSidebar}>
          X
        </div>
       
        <ul>
        
            <img src='https://www.hyrathon.com/static/index_page/images/logo.png' alt="logo"/>
        
          <li>Home</li>
          <li>About Us</li>
          <li>Offerings</li>
          <li>Testimonial</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
