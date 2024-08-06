import React from "react";
import "../styles/bussiness_presence.css";
function Buss_presence() {
  return (
    <div id="presence">
      <div className="presence_allmain">
        <div className="presence_head">
          <h1 className="presence_h1">
            <span className="presence_span">FitBet </span> Presence
          </h1>
        </div>
        <div className="presence_blocks">
          <div className="presence_block1">
            <h1 className="presence_h1">20+</h1>
            <p className="presence_p">CITIES</p>
          </div>
          <div className="presence_block1">
            <h1 className="presence_h1">200+</h1>
            <p className="presence_p">CENTERS</p>
          </div>
        </div>
        <div className="presence_india">
          <h1 className="india_h1">INDIA</h1>
          <p className="presence_p">
            Bangalore | Mumbai | Hyderabad | NCR | Chennai | Pune | Kolkata |
            Mysore | Mangalore | Coimbatore | Kochi | Vizag | Jaipur | Ahmedabad
            | Surat | Indore | Chandigarh | Amritsar | Ludhiana | Jammu |
          </p>
        </div>
      </div>
    </div>
  );
}
export default Buss_presence;
