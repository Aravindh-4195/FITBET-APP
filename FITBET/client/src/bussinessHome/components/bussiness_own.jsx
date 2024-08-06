import React from "react";
import "../styles/bussiness_own.css";
function Buss_own() {
  return (
    <div id="own">
      <div className="own_allmain">
        <div className="own_main">
          <div className="own_image"></div>
          <div className="own_header">
            <h2 className="own_h2">Open your own </h2>
            <h2 className="own_h2">
              <span className="own_span">Fitness</span> center
            </h2>
            <p className="own_p">Empower Your Entrepreneurial Spirit: </p>
            <p className="own_p">
              Partner with Us to Launch Your Own Fitness Center!
            </p>
            <div className="own_button">
              <a href="/gym/registerGym">
                {" "}
                <button className="own_btn">PARTNER WITH US</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buss_own;
