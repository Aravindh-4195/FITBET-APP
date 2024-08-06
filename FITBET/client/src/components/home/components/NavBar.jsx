import React from "react";
import "../styles/NavBar.css";
import { FaRegCircleUser } from "react-icons/fa6";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import
function NavBar() {
  return (
    <div id="nav">
      <div id="icon">
        <i
          class="fa-solid fa-dumbbell"
          style={{ color: "#000000", fontSize: "3vw" }}
        ></i>
        FITBET
      </div>
      <a href="#main" className="nav_item">
        Home
      </a>
      <a href="#reasons" className="nav_item">
        Why Us
      </a>
      <a href="#about" className="nav_item">
        About
      </a>

      <a href="#review_block" className="nav_item">
        Reviews
      </a>
      <a href="#BMI" className="nav_item">
        Check BMI
      </a>
      <a href="#footer" className="nav_item">
        Services
      </a>

      <a href="/login" className="nav_item account">
        <FaRegCircleUser />
      </a>
    </div>
  );
}
export default NavBar;
