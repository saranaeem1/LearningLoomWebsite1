import React, { useState } from "react";
import logo from "../Assets/logo.png";
import "./page.css";
const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className={`navigation ${showNavigation ? "open" : ""}`}>
        <ul>
          <li>
            <a href="Page.js#courses">Courses</a>
          </li>
          <li>
            <a href="Page.js#instructors">Instructors</a>
          </li>
          <li>
            <a href="Page.js#about">About us</a>
          </li>
          <li>
            <a href="Page.js#pricing">Pricing</a>
          </li>
          <li>
            <a href="Page.js#ContactContainer">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="toggle_btn" onClick={toggleNavigation}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={`dropdown_menu ${showNavigation ? "open" : ""}`}>
        <ul>
          <li>
            <a href="Page.js#courses">Courses</a>
          </li>
          <li>
            <a href="Page.js#instructors">Instructors</a>
          </li>
          <li>
            <a href="Page.js#about">About Us</a>
          </li>
          <li>
            <a href="Page.js#pricing">Pricing</a>
          </li>
          <li>
            <a href="Page.js#ContactContainer">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
