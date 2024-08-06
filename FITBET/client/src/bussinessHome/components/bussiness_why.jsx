import React from "react";
import "../styles/bussiness_why.css";
function Why() {
  return (
    <div id="bestFromUs">
      <div className="why_allmain">
        <div className="why_main">
          <div className="why_header">
            <h1 className="why_h1">
              Why partner with <span className="why_span">FitBet </span>?{" "}
            </h1>
          </div>
          <div className="why_about">
            <div className="why_about1">
              <div className="why_image1"></div>
              <div className="why_block1">
                <h3 className="why_h3">
                  Leader in fitness segment & International Brand Appeal
                </h3>
                <p className="why_p">
                  Largest fitness chain in India with 1230 + centres & more than
                  10 lac active members .
                </p>
              </div>
            </div>
            <div className="why_about1">
              <div className="why_image2"></div>
              <div className="why_block1">
                <h3 className="why_h3">Great ROI</h3>
                <p className="why_p">
                  Customer rating 3.8+/4. one of the best in the industry. World
                  class trainers & facilities.
                </p>
              </div>
            </div>
            <div className="why_about1">
              <div className="why_image3"></div>
              <div className="why_block1">
                <h3 className="why_h3">Best in class Customer Experience</h3>
                <p className="why_p">
                  Investments 1-1.2Cr. 24-36 months to reach break-even. 30-40%
                  return on investment.
                </p>
              </div>
            </div>
            <div className="why_about1">
              <div className="why_image4"></div>
              <div className="why_block1">
                <h3 className="why_h3">Best in class Tech Systems</h3>
                <p className="why_p">
                  Tech enabled platform for class bookings & seamless centre
                  operations management.
                </p>
              </div>
            </div>
            {/* <div className="why_button">
              <button className="why_btn">PARTNER WITH US</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Why;
