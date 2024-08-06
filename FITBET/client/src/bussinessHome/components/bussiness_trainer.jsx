import React from "react";
import "../styles/bussiness_trainer.css";
function Buss_trainer() {
  return (
    <div id="start-trainer">
      <div className="trainer_main">
        <div className="trainer_image"></div>
        <div className="trainer_header">
          <h2 className="trainer_h2">Start a new career as</h2>
          <h2 className="trainer_h2">
            <span className="trainer_span">Personal</span> Trainer
          </h2>
          <p className="trainer_p">
            "Shape Your Future, Shape Theirs: Launch Your Career as a Personal
            Trainer"
          </p>
          <a href="/trainer/trainerReg">
            <div className="trainer_button">
              <button className="trainer_btn">START WITH US</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Buss_trainer;
