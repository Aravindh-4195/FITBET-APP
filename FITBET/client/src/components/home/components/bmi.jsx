import { useState } from "react";
import "../styles/bmi.css"; // Import the CSS file for styling

function BmiCalc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      // logic for message
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };

  return (
    <>
      <div id="BMI">
        <section className="bmi-section py-6rem relative">
          <div className="container page-padding ">
            <div className="allbmi">
              <span className="overlay-bg"></span>

              <div className="text-container">
                <h2 className="title">
                  Let's Calculate Your{" "}
                  <span className="highlighted-text">BMI</span>
                </h2>
                <p className="description">
                  Easily determine your body mass index with our accurate
                  calculation tool.
                </p>
                <div className="form-container">
                  <form className="form ">
                    <input
                      onChange={(e) => setWeight(e.target.value)}
                      className="input-field w-50percent"
                      type="text"
                      placeholder="Weight / kg"
                      id="weight"
                    ></input>
                    <input
                      onChange={(e) => setHeight(e.target.value)}
                      className="input-field w-50percent"
                      type="text"
                      placeholder="Height / cm"
                      id="height"
                    ></input>
                  </form>
                  <div className="output-container mt-10">
                    <div>
                      <p className="output-text">
                        <span className="output-label">Your BMI is: </span>
                        <span className="output-value">{bmi}</span>
                      </p>
                    </div>
                    <div>
                      <p className="output-text">
                        <span className="output-label">Your weight is: </span>
                        <span className="output-value">{message}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={calcBmi}
                    style={{ transition: "all 0.3s" }}
                    type="submit"
                    className="calculate-btn"
                  >
                    CALCULATE
                  </button>
                </div>
              </div>
            </div>
            <div className="bmi-img"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BmiCalc;
