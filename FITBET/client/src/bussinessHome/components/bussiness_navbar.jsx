import React from "react";
import "../styles/bussiness_navbar.css";
import { FaRegCircleUser } from "react-icons/fa6";
function NavBar() {
  return (
    <div id="buss_nav">
      <div className="buss_navBar">
        <a href="#home" className="buss_nav_item">
          Home
        </a>
        <a href="#own" className="buss_nav_item">
          Patner with us
        </a>
        <a href="#bestFromUs" className="buss_nav_item">
          Best from us
        </a>

        <a href="#start-trainer" className="buss_nav_item">
          Trainer
        </a>
        <a href="#presence" className="buss_nav_item">
          Our Presence
        </a>
        <a href="#bussinessContact" className="buss_nav_item">
          Contact
        </a>
        <a href="/bussiness/login" className="buss_nav_item account">
          <FaRegCircleUser />
        </a>
      </div>
    </div>
  );
}
export default NavBar;
